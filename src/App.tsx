import type { NavLinkProps } from 'react-router-dom'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './styles/tokens.css'
import './App.css'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import DesignSystem from './pages/DesignSystem'

const navLinkClass: NavLinkProps['className'] = ({ isActive }) =>
  isActive ? 'active' : undefined

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-start">
          <Link to="/" className="brand" aria-label="jthowardesigns home">
            <img
              src="/jthowardesigns.svg"
              alt=""
              className="brand-logo"
              width={40}
              height={47}
              decoding="async"
            />
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/design-system" className={navLinkClass}>
              Design system
            </NavLink>
          </nav>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
          }
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} James Howard. Crafted with React.</p>
        <div className="footer-links">
          <a href="mailto:james@example.com">Email</a>
          <a
            href="https://www.linkedin.com/in/jthowardesigns/"
            target="_blank"
            rel="noreferrer"
          >
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
