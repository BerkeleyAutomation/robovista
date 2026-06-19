import { useState } from 'react'
import { citation } from '../content.js'

export default function Citation() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(citation.bibtex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the text is selectable as a fallback */
    }
  }

  return (
    <section id="bibtex" className="alt">
      <div className="container">
        <h2 className="section-title">{citation.label}</h2>
        <div className="bibtex-block">
          <button className="bibtex-copy" onClick={copy} type="button">
            {copied ? 'Copied' : 'Copy'}
          </button>
          <pre>
            <code>{citation.bibtex}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
