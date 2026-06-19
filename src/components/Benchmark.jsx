import { benchmark } from '../content.js'
import { Caption } from './Teaser.jsx'

export default function Benchmark() {
  return (
    <section id="benchmark" className="abstract">
      <div className="container">
        <h2 className="section-title">{benchmark.title}</h2>
        <p className="section-intro">{benchmark.intro}</p>

        {/* Six application domains with question counts. */}
        <div className="domain-grid">
          {benchmark.domains.map((d) => (
            <div className="domain-card" key={d.name} style={{ '--dc': d.color }}>
              <div className="domain-head">
                <span className="domain-name">{d.name}</span>
                <span className="domain-count">
                  {d.count} {d.count === 1 ? 'question' : 'questions'}
                </span>
              </div>
              <p>{d.blurb}</p>
            </div>
          ))}
        </div>

        <figure className="method-figure">
          <div className="teaser-wrap">
            <img
              src={benchmark.gallery.image}
              alt={benchmark.gallery.alt}
              loading="lazy"
            />
          </div>
          <Caption parts={benchmark.gallery.caption} />
        </figure>

        <div className="metric-grid">
          {benchmark.stats.map((s) => (
            <div className="metric" key={s.label}>
              <div className="v">{s.value}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
