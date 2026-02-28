import LinkButton from '../components/LinkButton'

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

export default Projects
