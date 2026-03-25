import { useEffect, useState } from 'react'

export const BRAND_WORDS = [
  'jthowardesigns',
  'jthowardevelops',
  'jthowardoodles',
  'jthowardelivers',
]

/**
 * @param {string[]} strs
 * @returns {number}
 */
function longestCommonPrefixLength(strs) {
  const nonEmpty = strs.filter(s => s.length > 0)
  if (!nonEmpty.length) return 0
  const first = nonEmpty[0]
  for (let i = 0; i < first.length; i += 1) {
    const c = first[i]
    for (let j = 1; j < nonEmpty.length; j += 1) {
      if (i >= nonEmpty[j].length || nonEmpty[j][i] !== c) return i
    }
  }
  return first.length
}

/**
 * @param {string[]} words
 * @param {{
 *   typingSpeed?: number
 *   deletingSpeed?: number
 *   pauseMs?: number
 *   prefixLength?: number
 *   pauseBetweenDeletesMs?: number
 * }} [options]
 */
export function useTypewriter(words = BRAND_WORDS, options = {}) {
  const {
    typingSpeed = 80,
    deletingSpeed = 45,
    pauseMs = 2200,
    prefixLength: prefixLengthOption,
    pauseBetweenDeletesMs = 0,
  } = options

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

    const minWordLen = Math.min(...words.map(w => w.length))
    let prefixLen =
      typeof prefixLengthOption === 'number' &&
      Number.isFinite(prefixLengthOption)
        ? Math.max(0, Math.min(Math.floor(prefixLengthOption), minWordLen))
        : longestCommonPrefixLength(words)

    if (prefixLen > minWordLen) {
      prefixLen = minWordLen
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
        timeoutId = window.setTimeout(
          step,
          deletingSpeed + pauseBetweenDeletesMs
        )
      } else {
        const stopAt = prefixLen
        if (charIndex > stopAt) {
          charIndex -= 1
          setText(current.slice(0, charIndex))
          timeoutId = window.setTimeout(
            step,
            deletingSpeed + pauseBetweenDeletesMs
          )
        } else {
          wordIndex = (wordIndex + 1) % words.length
          phase = 'typing'
          const next = words[wordIndex % words.length]
          if (!next.length) {
            charIndex = 0
            setText('')
            timeoutId = window.setTimeout(step, typingSpeed)
            return
          }
          if (stopAt === 0) {
            charIndex = 0
            setText('')
          } else {
            const safePrefix = Math.min(stopAt, next.length)
            charIndex = safePrefix
            setText(next.slice(0, safePrefix))
          }
          timeoutId = window.setTimeout(step, typingSpeed)
        }
      }
    }

    step()

    return () => {
      cancelled = true
      clear()
    }
  }, [
    words,
    typingSpeed,
    deletingSpeed,
    pauseMs,
    prefixLengthOption,
    pauseBetweenDeletesMs,
  ])

  return text
}
