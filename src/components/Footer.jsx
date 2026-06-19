import { footerNote, paper } from '../content.js'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>{footerNote}</p>
        <p>
          © {paper.shortName} ·{' '}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
          >
            CC BY-SA 4.0
          </a>
        </p>
      </div>
    </footer>
  )
}
