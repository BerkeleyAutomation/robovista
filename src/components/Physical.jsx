import { physical } from '../content.js'

function PhysTable({ table }) {
  return (
    <div className="table-scroll" style={{ marginBottom: 14 }}>
      <table className="result-table">
        <thead>
          <tr>
            {table.columns.map((c, i) => (
              <th key={c} className={i === 0 ? 'left' : ''}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className={row.highlight ? 'highlight' : ''}>
              {row.cells.map((v, i) => {
                const cls = [
                  i === 0 ? 'left' : '',
                  row.bold?.includes(i) ? 'best' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
                return (
                  <td key={i} className={cls}>
                    {v}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Physical() {
  return (
    <section id="physical" className="alt">
      <div className="container">
        <h2 className="section-title">{physical.title}</h2>
        <p className="section-intro">{physical.intro}</p>

        {physical.blocks.map((b) => (
          <div className="phys-block" key={b.name}>
            <div className="phys-head">
              <span className="phys-tag">{b.tag}</span>
              <h3>{b.name}</h3>
            </div>
            <p>{b.body}</p>

            <figure className="phys-figure">
              <img src={b.figure.image} alt={b.figure.alt} loading="lazy" />
              <figcaption>{b.figure.caption}</figcaption>
            </figure>

            {b.correlations && (
              <div className="corr-callout">
                {b.correlations.map((c) => (
                  <div className="corr-pill" key={c.label}>
                    <span className="cv">{c.value}</span>
                    <span className="cl">{c.label}</span>
                  </div>
                ))}
              </div>
            )}

            {b.table && <PhysTable table={b.table} />}

            <p className="caption" style={{ marginTop: 14 }}>
              {b.result}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
