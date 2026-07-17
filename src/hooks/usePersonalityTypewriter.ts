import { useEffect, useState } from 'react'

export interface Personality {
  word: string
  accentVar: string
  tag: string
  description: string
  font: string
  size: string
  weight: string
  style: string
}

export const PERSONALITIES: Personality[] = [
  {
    word: 'jthowardesigns',
    accentVar: '--accent-design',
    tag: '[design]',
    description: 'Obsessing over layout, type, and interaction detail.',
    font: "'Fredoka',sans-serif",
    size: '36px',
    weight: '400',
    style: 'normal',
  },
  {
    word: 'jthowardevelops',
    accentVar: '--accent-build',
    tag: '[build]',
    description: 'Shipping React & TypeScript front ends, end to end.',
    font: "'IBM Plex Mono',monospace",
    size: '36px',
    weight: '600',
    style: 'normal',
  },
  {
    word: 'jthowardoodles',
    accentVar: '--accent-doodle',
    tag: '[doodle]',
    description: 'Sketching ideas and side projects just for fun.',
    font: "'Caveat',cursive",
    size: '46px',
    weight: '700',
    style: 'normal',
  },
  {
    word: 'jthowardelivers',
    accentVar: '--accent-ship',
    tag: '[ship]',
    description: 'Reliable execution -- on time, every time.',
    font: "'Archivo Black',sans-serif",
    size: '34px',
    weight: '400',
    style: 'normal',
  },
]

const PREFIX_LEN = 7
const TYPING_SPEED = 80
const DELETING_SPEED = 45
const PAUSE_MS = 4200

export interface UsePersonalityTypewriterResult {
  prefixText: string
  suffixText: string
  personality: Personality
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function usePersonalityTypewriter(): UsePersonalityTypewriterResult {
  const [prefixText, setPrefixText] = useState(() =>
    prefersReducedMotion() ? PERSONALITIES[0].word.slice(0, PREFIX_LEN) : ''
  )
  const [suffixText, setSuffixText] = useState(() =>
    prefersReducedMotion() ? PERSONALITIES[0].word.slice(PREFIX_LEN) : ''
  )
  const [personality, setPersonality] = useState<Personality>(
    PERSONALITIES[0]
  )

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPersonality(PERSONALITIES[0])
      setPrefixText(PERSONALITIES[0].word.slice(0, PREFIX_LEN))
      setSuffixText(PERSONALITIES[0].word.slice(PREFIX_LEN))
      return
    }

    let wordIndex = 0
    let charIndex = 0
    let phase: 'typing' | 'pausing' | 'deleting' = 'typing'
    let timeoutId = 0
    let cancelled = false

    const renderText = (text: string) => {
      setPrefixText(text.slice(0, PREFIX_LEN))
      setSuffixText(text.slice(PREFIX_LEN))
    }

    const words = PERSONALITIES.map(p => p.word)

    const step = () => {
      if (cancelled) return
      const current = words[wordIndex % words.length]

      if (phase === 'typing') {
        if (charIndex < current.length) {
          charIndex += 1
          renderText(current.slice(0, charIndex))
          timeoutId = window.setTimeout(step, TYPING_SPEED)
        } else {
          phase = 'pausing'
          timeoutId = window.setTimeout(step, PAUSE_MS)
        }
      } else if (phase === 'pausing') {
        phase = 'deleting'
        timeoutId = window.setTimeout(step, DELETING_SPEED)
      } else {
        if (charIndex > PREFIX_LEN) {
          charIndex -= 1
          renderText(current.slice(0, charIndex))
          timeoutId = window.setTimeout(step, DELETING_SPEED)
        } else {
          wordIndex = (wordIndex + 1) % words.length
          phase = 'typing'
          const next = words[wordIndex % words.length]
          charIndex = PREFIX_LEN
          setPersonality(PERSONALITIES[wordIndex])
          renderText(next.slice(0, PREFIX_LEN))
          timeoutId = window.setTimeout(step, TYPING_SPEED)
        }
      }
    }

    setPersonality(PERSONALITIES[0])
    step()

    return () => {
      cancelled = true
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return { prefixText, suffixText, personality }
}
