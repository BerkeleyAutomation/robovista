import { futureWork } from '../content.js'

export default function FutureWork() {
  return (
    <section id="future-work" className="alt">
      <div className="container">
        <h2 className="section-title">{futureWork.title}</h2>
        <p className="section-intro">{futureWork.intro}</p>
        <div className="feature-list">
          {futureWork.items.map((c) => (
            <div className="feature-item" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
