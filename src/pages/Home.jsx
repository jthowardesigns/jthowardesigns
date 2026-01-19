import LinkButton from '../components/LinkButton'

const Home = () => (
  <section className="page">
    <div className="hero">
      <p className="eyebrow">Portfolio / UI Engineer</p>
      <h1>
        Hi, I&apos;m <span className="accent">James Howard</span>.
      </h1>
      <p className="lede">
        I design and build thoughtful digital experiences—from elegant landing
        pages to robust product interfaces.
      </p>
      <div className="actions">
        <LinkButton href="mailto:james@example.com">Say hello</LinkButton>
        <a className="text-link" href="#projects">
          View projects
        </a>
      </div>
    </div>
  </section>
)

export default Home
