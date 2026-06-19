// Minimal inline SVG icons (no external icon-font dependency).
const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' }

export function Icon({ name }) {
  switch (name) {
    case 'github':
      return (
        <svg {...base} className="ico" aria-hidden="true">
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
        </svg>
      )
    case 'arxiv':
      return (
        <svg {...base} className="ico" aria-hidden="true">
          <path d="M3 4h18v2H3zM3 11h18v2H3zM3 18h12v2H3z" />
        </svg>
      )
    case 'paper':
      return (
        <svg {...base} className="ico" aria-hidden="true">
          <path d="M6 2h9l5 5v15a0 0 0 0 1 0 0H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8zm0 4h8v1.5H8zm0-8h4v1.5H8z" />
        </svg>
      )
    case 'data':
      return (
        <svg {...base} className="ico" aria-hidden="true">
          <path d="M12 2c-4.4 0-8 1.6-8 3.5S7.6 9 12 9s8-1.6 8-3.5S16.4 2 12 2zM4 8.5v4C4 14.4 7.6 16 12 16s8-1.6 8-3.5v-4C20 10.4 16.4 12 12 12S4 10.4 4 8.5zm0 7v4C4 21.4 7.6 23 12 23s8-1.6 8-3.5v-4C20 17.4 16.4 19 12 19s-8-1.6-8-3.5z" />
        </svg>
      )
    case 'video':
      return (
        <svg {...base} className="ico" aria-hidden="true">
          <path d="M4 4h12a2 2 0 0 1 2 2v3l4-2.5v11L18 15v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        </svg>
      )
    default:
      return null
  }
}
