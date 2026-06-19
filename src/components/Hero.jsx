import { paper, links, asset } from '../content.js'
import { Icon } from './Icons.jsx'
import RoboVistaLogo from './RoboVistaLogo.jsx'

const heroVideo = asset('static/videos/RSS_26_teaser.mp4')

function Authors() {
  const showMarkers = paper.affiliations.length > 1
  return (
    <div className="authors">
      {paper.authors.map((a, i) => (
        <span key={a.name}>
          {a.url ? (
            <a href={a.url} target="_blank" rel="noreferrer">
              {a.name}
            </a>
          ) : (
            <span className="author-name">{a.name}</span>
          )}
          {(a.equal || showMarkers) && (
            <sup>
              {a.equal ? '*' : ''}
              {showMarkers ? a.affiliations.join(',') : ''}
            </sup>
          )}
          {i < paper.authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-video" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        {paper.venue && <p className="hero-venue">{paper.venue}</p>}
        <h1 className="hero-logo">
          <RoboVistaLogo />
        </h1>
        {paper.subtitle && <p className="hero-subtitle">{paper.subtitle}</p>}
        <Authors />
        <div className="affiliations">
          {paper.affiliations.map((af) => (
            <span key={af.id}>
              {paper.affiliations.length > 1 && <sup>{af.id}</sup>} {af.name}
              {'  '}
            </span>
          ))}
        </div>
        {paper.equalContribNote && (
          <div className="eql-note">* {paper.equalContribNote}</div>
        )}

        <div className="btn-row">
          {links.map((l) => {
            const disabled = !l.href
            return (
              <a
                key={l.label}
                className={`btn${disabled ? ' disabled' : ''}`}
                href={l.href || '#'}
                target={l.href && l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-disabled={disabled}
                title={disabled ? 'Coming soon' : l.label}
              >
                <Icon name={l.icon} />
                <span>{l.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
