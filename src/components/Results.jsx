import { results } from '../content.js'

// Decide the color class for a signed delta cell.
// Normal columns: '+' is good (green), '-' is bad (red).
// Inverted columns (e.g. calibration error, where lower is better): flipped.
function deltaClass(value, inverted) {
  const s = String(value).trim()
  const isPos = s.startsWith('+')
  const isNeg = s.startsWith('-') || s.startsWith('−')
  if (!isPos && !isNeg) return ''
  const good = inverted ? isNeg : isPos
  return good ? 'pos' : 'neg'
}

function ResultTable({ table }) {
  const deltaCols = new Set(table.deltaCols || [])
  const invCols = new Set(table.deltaColsInverted || [])
  return (
    <div className="result-table-block">
      <div className="result-table-head">
        <span className="rt-name">{table.name}</span>
        <span className="rt-note">{table.note}</span>
      </div>
      <div className="table-scroll">
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
            {table.rows.map((row, ri) => {
              // A row with `group` renders a full-width subheader that splits
              // the table into labeled sections (e.g. closed- vs open-source).
              if (row.group) {
                return (
                  <tr key={ri} className="group-row">
                    <td className="left" colSpan={table.columns.length}>
                      {row.group}
                    </td>
                  </tr>
                )
              }
              return (
                <tr key={ri} className={row.highlight ? 'highlight' : ''}>
                {row.cells.map((v, i) => {
                  let delta = ''
                  if (deltaCols.has(i)) delta = deltaClass(v, false)
                  else if (invCols.has(i)) delta = deltaClass(v, true)
                  const cls = [
                    i === 0 ? 'left' : '',
                    row.bold?.includes(i) ? 'best' : '',
                    delta,
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
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <h2 className="section-title">{results.title}</h2>
        <p className="section-intro">{results.intro}</p>
        {results.tables.map((t) => (
          <ResultTable key={t.name} table={t} />
        ))}
        {results.failure && (
          <div className="va-callout" style={{ marginTop: 6 }}>
            <span className="va-callout-label">Where do VLMs fail?</span>
            <p>{results.failure}</p>
          </div>
        )}
      </div>
    </section>
  )
}
