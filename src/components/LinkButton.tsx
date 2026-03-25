import type { PropsWithChildren } from 'react'

type LinkButtonProps = PropsWithChildren<{
  href: string
}>

const LinkButton = ({ href, children }: LinkButtonProps) => (
  <a className="link-button" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default LinkButton
