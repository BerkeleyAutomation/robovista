// Inline SVG wordmark for the hero: a camera/viewfinder frame (the "vista" a
// robot sees) with a focusing lens iris at its center, antennae echoing a robot
// head. Locked up beside the "RoboVista" wordmark, whose glyphs inherit the
// parent .hero h1 gradient; the mark carries its own matching gradient.
export default function RoboVistaLogo() {
  return (
    <span className="rv-logo" aria-label="RoboVista">
      <svg
        className="rv-logo-mark"
        viewBox="0 0 96 72"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="rvLogoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#c026a8" />
          </linearGradient>
        </defs>

        {/* robot antennae */}
        <g
          stroke="url(#rvLogoGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <line x1="26" y1="20" x2="18" y2="8" />
          <line x1="70" y1="20" x2="78" y2="8" />
        </g>
        <g fill="url(#rvLogoGrad)">
          <circle cx="18" cy="7" r="3.4" />
          <circle cx="78" cy="7" r="3.4" />
        </g>

        {/* viewfinder / camera frame */}
        <rect
          x="14"
          y="20"
          width="68"
          height="44"
          rx="11"
          fill="none"
          stroke="url(#rvLogoGrad)"
          strokeWidth="3.2"
        />

        {/* corner focus brackets */}
        <g
          fill="none"
          stroke="url(#rvLogoGrad)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        >
          <path d="M24 31 V27 H28" />
          <path d="M72 31 V27 H68" />
          <path d="M24 53 V57 H28" />
          <path d="M72 53 V57 H68" />
        </g>

        {/* lens iris — the "eye" looking at the scene */}
        <circle cx="48" cy="42" r="13" fill="none" stroke="url(#rvLogoGrad)" strokeWidth="3.2" />
        <circle cx="48" cy="42" r="5.2" fill="url(#rvLogoGrad)" />
        <circle cx="52.5" cy="37.5" r="2" fill="#fff" />
      </svg>
      <span className="rv-logo-word">RoboVista</span>
    </span>
  )
}
