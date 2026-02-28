const LinkButton = ({ href, children }) => (
  <a className="link-button" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default LinkButton
