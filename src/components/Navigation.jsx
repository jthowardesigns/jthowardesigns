import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  )
}

export default Navigation
