import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const projects = [
  {
    title: 'Design System Refresh',
    description:
      'A reusable component library with tokens for color, spacing, and typography.',
    link: '#',
  },
  {
    title: 'Interactive Data Dashboard',
    description:
      'Built responsive charts and filters for a product analytics experience.',
    link: '#',
  },
  {
    title: 'Portfolio Microsite',
    description:
      'A fast, accessible marketing site showcasing brand identity and case studies.',
    link: '#',
  },
]

const LinkButton = ({ href, children }) => (
  <a className="link-button" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

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

const About = () => (
  <section className="page">
    <div className="content-card">
      <h2>About</h2>
      <p>
        I blend design systems thinking with modern front-end engineering. My
        toolkit includes React, TypeScript, Vite, and accessible HTML/CSS. I
        enjoy collaborating with product teams to ship clear, fast, and reliable
        experiences.
      </p>
      <p>
        When I&apos;m not pushing pixels, you&apos;ll find me prototyping ideas,
        iterating with user feedback, and polishing the final 10%.
      </p>
    </div>
  </section>
)

const Projects = () => (
  <section className="page" id="projects">
    <h2>Projects</h2>
    <div className="grid">
      {projects.map((project) => (
        <article key={project.title} className="card">
          <div className="card-header">
            <h3>{project.title}</h3>
            <span className="pill">Case study</span>
          </div>
          <p>{project.description}</p>
          <LinkButton href={project.link}>View details</LinkButton>
        </article>
      ))}
    </div>
  </section>
)

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">JH</div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} James Howard. Crafted with React.</p>
        <div className="footer-links">
          <a href="mailto:james@example.com">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
