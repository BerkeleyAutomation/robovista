import { useEffect, useState } from 'react'

// Section ids must match the `id` props rendered by the section components.
const items = [
  { id: 'top', label: 'Overview' },
  { id: 'rqa', label: 'RQA Framework' },
  { id: 'method', label: 'Construction' },
  { id: 'benchmark', label: 'Benchmark' },
  { id: 'results', label: 'Evaluation' },
  { id: 'physical', label: 'Physical Robots' },
  { id: 'findings', label: 'Key Findings' },
  { id: 'future-work', label: 'Future Work' },
  { id: 'bibtex', label: 'BibTeX' },
]

export default function SideNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sidenav" aria-label="Section navigation">
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              <span className="dot" />
              <span className="lbl">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
