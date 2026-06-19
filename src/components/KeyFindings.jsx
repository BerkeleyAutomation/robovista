import { findings } from '../content.js'

export default function KeyFindings() {
  return (
    <section id="findings">
      <div className="container">
        <h2 className="section-title">{findings.title}</h2>
        <ol className="findings">
          {findings.items.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
