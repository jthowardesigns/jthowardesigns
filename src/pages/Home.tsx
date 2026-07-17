import { useEffect } from 'react'
import { usePersonalityTypewriter } from '../hooks/usePersonalityTypewriter'

const Home = () => {
  const { prefixText, suffixText, personality } = usePersonalityTypewriter()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--nav-accent', `var(${personality.accentVar})`)
    root.style.setProperty('--footer-accent', `var(${personality.accentVar})`)

    return () => {
      root.style.removeProperty('--nav-accent')
      root.style.removeProperty('--footer-accent')
    }
  }, [personality.accentVar])

  return (
    <section className="page page--home">
      <div className="hero">
        <h1 className="visually-hidden">
          jthowardesigns. Senior Software Engineer and Investor.
        </h1>
        <p className="hero-word" aria-hidden="true">
          <span className="wrap">
            <span className="prefix">{prefixText}</span>
            <span
              className="suffix"
              style={{
                fontFamily: personality.font,
                fontSize: personality.size,
                fontWeight: personality.weight,
                fontStyle: personality.style,
              }}
            >
              {suffixText}
            </span>
          </span>
          <span className="cursor" />
        </p>
        <div className="tag-row" aria-hidden="true">
          <span className="tag">{personality.tag}</span>
          <span className="tag-desc">{personality.description}</span>
        </div>
        <p className="bio">
          Atlanta-based designer and software engineer. I ship React and
          TypeScript front ends and the design systems that keep them
          consistent.
        </p>
      </div>
    </section>
  )
}

export default Home
