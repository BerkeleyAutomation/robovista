# RoboVista — Project Page

Project page for **RoboVista: Evaluating Vision-Language Models for Diverse Robot Applications**.

RoboVista is an expert-annotated, robot-centric Visual Question Answering benchmark built with the
modular **Robot Question Answering (RQA)** framework — 474 multiple-choice questions across 6 robot
application domains (agriculture, industrial, domestic, surgical, autonomous driving, and open robot
datasets) and 39 task types.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- No CSS framework — a single hand-written `src/index.css`
- All page copy and data live in `src/content.js` (single source of truth)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/robovista/
```

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

The site is configured for `https://berkeleyautomation.github.io/robovista/`
(`base: '/robovista/'` in `vite.config.js`, `homepage` in `package.json`).

```bash
npm run deploy   # builds and pushes dist/ via gh-pages
```

## Editing content

Edit `src/content.js` — every section (hero, TL;DR, RQA framework, benchmark, construction,
evaluation tables, physical-robot validation, findings, future work) reads its text and numbers
from there. Figures live in `public/static/images/` and are referenced through the `asset()` helper
so they resolve under the project base path.

## Structure

```
src/
  App.jsx                 # section order
  content.js              # all copy + data
  index.css               # styles + theme tokens
  components/
    Hero.jsx              # title, authors, links
    RoboVistaLogo.jsx     # inline SVG wordmark
    Teaser.jsx            # overview figure (+ shared Caption)
    Tldr.jsx
    RQAFramework.jsx      # modular abstraction + module tuple
    Benchmark.jsx         # domains, gallery, examples, stats
    Method.jsx            # 3-stage curation + case studies
    Results.jsx           # zero-shot / CoT / ICL tables
    Physical.jsx          # bimanual alignment + surgical knot tying
    KeyFindings.jsx
    FutureWork.jsx
    Footer.jsx
    SideNav.jsx
    Icons.jsx
```
