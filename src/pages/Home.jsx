import { useTypewriter } from '../hooks/useTypewriter'

const Home = () => {
  const text = useTypewriter()

  return (
    <section className="page">
      <div className="hero">
        <h1 className="visually-hidden">jthowardesigns</h1>
        <p className="typewriter-hero" aria-hidden="true">
          <span className="typewriter-text">{text}</span>
          <span className="typewriter-cursor" />
        </p>
      </div>
    </section>
  )
}

export default Home
