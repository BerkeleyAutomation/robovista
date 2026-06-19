import { tldr } from '../content.js'

export default function Tldr() {
  return (
    <section className="tight">
      <div className="container">
        <div className="tldr-box">
          <h2 className="tldr-title">{tldr.label}</h2>
          <p className="tldr-text">
            {tldr.parts.map((p, i) =>
              p.hl ? (
                // `hl: true` uses the default accent; `hl: '<name>'` selects a
                // named highlight color (see `.hl-*` rules in index.css).
                <span
                  className={typeof p.hl === 'string' ? `hl hl-${p.hl}` : 'hl'}
                  key={i}
                >
                  {p.text}
                </span>
              ) : (
                p.text
              ),
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
