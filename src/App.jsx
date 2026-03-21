import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">JH</div>
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
