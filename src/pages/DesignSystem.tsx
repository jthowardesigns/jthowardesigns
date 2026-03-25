import type { CSSProperties } from 'react'

const colorTokens: { name: string; label: string }[] = [
  { name: '--color-bg', label: 'Background' },
  { name: '--color-fg', label: 'Foreground' },
  { name: '--color-brand', label: 'Brand' },
  { name: '--color-muted', label: 'Muted' },
  { name: '--color-border', label: 'Border' },
  { name: '--color-surface-elevated', label: 'Surface elevated' },
  { name: '--color-link', label: 'Link' },
  { name: '--color-typewriter-prefix', label: 'Typewriter prefix' },
]

const spaceTokens = [
  '--space-1',
  '--space-2',
  '--space-3',
  '--space-4',
  '--space-5',
  '--space-6',
]

const typeScale: {
  className: string
  style: CSSProperties
  label: string
}[] = [
  {
    className: 'ds-type-sample',
    style: { fontSize: 'var(--text-2xl)' },
    label: '--text-2xl',
  },
  {
    className: 'ds-type-sample',
    style: { fontSize: 'var(--text-xl)' },
    label: '--text-xl',
  },
  {
    className: 'ds-type-sample',
    style: { fontSize: 'var(--text-lg)' },
    label: '--text-lg',
  },
  {
    className: 'ds-type-sample',
    style: { fontSize: 'var(--text-base)' },
    label: '--text-base',
  },
  {
    className: 'ds-type-sample',
    style: { fontSize: 'var(--text-sm)' },
    label: '--text-sm',
  },
  {
    className: 'ds-type-sample',
    style: { fontSize: 'var(--text-xs)' },
    label: '--text-xs',
  },
]

const radiusTokens: { cssVar: string; label: string }[] = [
  { cssVar: '--radius-sm', label: 'sm' },
  { cssVar: '--radius-md', label: 'md' },
  { cssVar: '--radius-lg', label: 'lg' },
]

const DesignSystem = () => (
  <section className="page" id="top">
    <h1>Design system</h1>
    <p style={{ color: 'var(--color-muted)', marginTop: 0 }}>
      Theme tokens for this site. Toggle light/dark in the header to preview.
    </p>

    <section className="ds-section" aria-labelledby="ds-colors-heading">
      <h2 id="ds-colors-heading">Color</h2>
      <div className="ds-grid">
        {colorTokens.map(({ name, label }) => (
          <div key={name} className="ds-swatch">
            <div
              className="ds-swatch-color"
              style={{ background: `var(${name})` }}
              aria-hidden
            />
            <span className="ds-swatch-label">
              {label}
              <br />
              <code>{name}</code>
            </span>
          </div>
        ))}
      </div>
    </section>

    <section className="ds-section" aria-labelledby="ds-type-heading">
      <h2 id="ds-type-heading">Typography</h2>
      {typeScale.map(({ className, style, label }) => (
        <p key={label} className={className} style={style}>
          {label} — The quick brown fox
        </p>
      ))}
    </section>

    <section className="ds-section" aria-labelledby="ds-space-heading">
      <h2 id="ds-space-heading">Spacing</h2>
      {spaceTokens.map(name => (
        <div key={name} className="ds-space-row">
          <code className="ds-swatch-label" style={{ minWidth: '8rem' }}>
            {name}
          </code>
          <div
            className="ds-space-box"
            style={{ width: `var(${name})`, height: `var(${name})` }}
            aria-hidden
          />
        </div>
      ))}
    </section>

    <section className="ds-section" aria-labelledby="ds-radius-heading">
      <h2 id="ds-radius-heading">Radius</h2>
      <div>
        {radiusTokens.map(({ cssVar, label }) => (
          <span
            key={cssVar}
            className="ds-radius-demo"
            style={{ borderRadius: `var(${cssVar})` }}
          >
            {label}
          </span>
        ))}
      </div>
    </section>

    <section className="ds-section" aria-labelledby="ds-samples-heading">
      <h2 id="ds-samples-heading">Components</h2>
      <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
        <article className="card">
          <div className="card-header">
            <h3>Sample card</h3>
            <span className="pill">Label</span>
          </div>
          <p>Card body using tokenized border, radius, and surface colors.</p>
          <a className="link-button" href="#top">
            Primary action
          </a>
        </article>
      </div>
    </section>
  </section>
)

export default DesignSystem
