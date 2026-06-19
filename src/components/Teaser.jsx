import { teaser } from '../content.js'

// Renders a caption made of { text, strong } parts.
export function Caption({ parts, className = 'caption' }) {
  return (
    <figcaption className={className}>
      {parts.map((p, i) =>
        p.strong ? <strong key={i}>{p.text}</strong> : <span key={i}>{p.text}</span>,
      )}
    </figcaption>
  )
}

export default function Teaser() {
  return (
    <section className="tight">
      <div className="container">
        <figure className="method-figure">
          <div className="teaser-wrap">
            <img src={teaser.image} alt={teaser.alt} loading="lazy" />
          </div>
          {teaser.caption && <Caption parts={teaser.caption} className="caption caption-wide" />}
        </figure>
      </div>
    </section>
  )
}
