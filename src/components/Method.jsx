import { method } from '../content.js'
import { Caption } from './Teaser.jsx'

export default function Method() {
  return (
    <section id="method">
      <div className="container">
        <h2 className="section-title">{method.title}</h2>
        <p className="section-intro">{method.intro}</p>

        {/* Module-abstraction pipeline figure (paper Fig. RQA-module1 / fig:task). */}
        {method.pipeline && (
          <figure className="method-figure">
            <div className="teaser-wrap">
              <img
                src={method.pipeline.image}
                alt={method.pipeline.alt}
                loading="lazy"
              />
            </div>
            <Caption parts={method.pipeline.caption} />
          </figure>
        )}

        <div className="feature-list">
          {method.cards.map((c) => (
            <div className="feature-item" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="va-callout" style={{ marginTop: 26 }}>
          <span className="va-callout-label">{method.caseStudies.title}</span>
          <p style={{ marginBottom: 16 }}>{method.caseStudies.intro}</p>
          <div className="tuple-grid">
            {method.caseStudies.items.map((c) => (
              <div className="tuple-item" key={c.name}>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worked case-study examples mapping systems to Robot-VQA (Fig. RQA-exps). */}
        {method.caseStudies.figure && (
          <figure className="method-figure" style={{ marginTop: 22 }}>
            <div className="teaser-wrap">
              <img
                src={method.caseStudies.figure.image}
                alt={method.caseStudies.figure.alt}
                loading="lazy"
              />
            </div>
            <Caption parts={method.caseStudies.figure.caption} />
          </figure>
        )}
      </div>
    </section>
  )
}
