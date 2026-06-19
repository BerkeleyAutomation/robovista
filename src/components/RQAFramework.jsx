import { rqa } from '../content.js'

export default function RQAFramework() {
  return (
    <section id="rqa" className="alt">
      <div className="container">
        <h2 className="section-title">{rqa.title}</h2>

        <p className="va-lead">
          {rqa.lead.map((p, i) =>
            p.hl ? (
              <span className="hl" key={i}>
                {p.text}
              </span>
            ) : (
              <span key={i}>{p.text}</span>
            ),
          )}
        </p>

        {/* Four functional layers of a modular robot pipeline. */}
        <div className="module-grid">
          {rqa.modules.map((m) => (
            <div className="module-card" key={m.name}>
              <span className="module-step">{m.step}</span>
              <h3>{m.name}</h3>
              <p>{m.blurb}</p>
            </div>
          ))}
        </div>

        <div className="va-callout">
          <span className="va-callout-label">{rqa.tupleTitle}</span>
          <p style={{ marginBottom: 16 }}>{rqa.tupleLead}</p>
          <div className="tuple-grid">
            {rqa.tuple.map((t) => (
              <div className="tuple-item" key={t.name}>
                <span className="tuple-sym">{t.sym}</span>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
