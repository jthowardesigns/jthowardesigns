import { BRAND_WORDS, useTypewriter } from '../hooks/useTypewriter'

/** Set to true for heavier monospace (see `.typewriter-hero--bold` in App.css). */
const TYPEWRITER_BOLD = true

/** Must match `prefixLength` in useTypewriter — muted styling for `jthowar`. */
const TYPEWRITER_PREFIX_LEN = 7

const Home = () => {
  const text = useTypewriter(BRAND_WORDS, {
    prefixLength: TYPEWRITER_PREFIX_LEN,
    pauseMs: 4500,
    pauseBetweenDeletesMs: 70,
  })

  return (
    <section className="page page--home">
      <div className="hero">
        <h1 className="visually-hidden">
          jthowardesigns. Senior Software Engineer and Investor.
        </h1>
        <p
          className={`typewriter-hero${TYPEWRITER_BOLD ? ' typewriter-hero--bold' : ''}`}
          aria-hidden="true"
        >
          <span className="typewriter-text">
            <span className="typewriter-prefix">
              {text.slice(0, TYPEWRITER_PREFIX_LEN)}
            </span>
            <span className="typewriter-suffix">
              {text.slice(TYPEWRITER_PREFIX_LEN)}
            </span>
          </span>
          <span className="typewriter-cursor" />
        </p>
        <p className="hero-tagline" aria-hidden="true">
          Senior Software Engineer and Investor
        </p>
      </div>
    </section>
  )
}

export default Home
