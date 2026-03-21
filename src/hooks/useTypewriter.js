import { useEffect, useState } from 'react'

export const BRAND_WORDS = [
  'jthowardesigns',
  'jthowardevelops',
  'jthowardoodles',
  'jthowardelivers',
]

/**
 * @param {string[]} words
 * @param {{ typingSpeed?: number; deletingSpeed?: number; pauseMs?: number }} [options]
 */
export function useTypewriter(words = BRAND_WORDS, options = {}) {
  const { typingSpeed = 80, deletingSpeed = 45, pauseMs = 2200 } = options

  const [text, setText] = useState(() => {
    if (typeof window === 'undefined') return ''
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? (words[0] ?? '')
      : ''
  })

  useEffect(() => {
    if (!words.length) {
      setText('')
      return
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setText(words[0])
      return
    }

    let wordIndex = 0
    let charIndex = 0
    /** @type {'typing' | 'pausing' | 'deleting'} */
    let phase = 'typing'
    let timeoutId = 0
    let cancelled = false

    const clear = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = 0
    }

    const step = () => {
      if (cancelled) return
      const current = words[wordIndex % words.length]
      if (!current.length) {
        wordIndex = (wordIndex + 1) % words.length
        timeoutId = window.setTimeout(step, typingSpeed)
        return
      }

      if (phase === 'typing') {
        if (charIndex < current.length) {
          charIndex += 1
          setText(current.slice(0, charIndex))
          timeoutId = window.setTimeout(step, typingSpeed)
        } else {
          phase = 'pausing'
          timeoutId = window.setTimeout(step, pauseMs)
        }
      } else if (phase === 'pausing') {
        phase = 'deleting'
        timeoutId = window.setTimeout(step, deletingSpeed)
      } else {
        if (charIndex > 0) {
          charIndex -= 1
          setText(current.slice(0, charIndex))
          timeoutId = window.setTimeout(step, deletingSpeed)
        } else {
          wordIndex = (wordIndex + 1) % words.length
          phase = 'typing'
          timeoutId = window.setTimeout(step, typingSpeed)
        }
      }
    }

    step()

    return () => {
      cancelled = true
      clear()
    }
  }, [words, typingSpeed, deletingSpeed, pauseMs])

  return text
}
