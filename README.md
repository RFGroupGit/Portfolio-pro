# Personal CV — UX Designer & Digital Product Professional

A single-page, print-ready résumé website built with **React 19, TypeScript, Tailwind CSS 4 and Vite**.
Designed for recruiters in Switzerland (Lausanne / Geneva): minimal, editorial, fast, accessible.

## Run locally

```bash
npm install
npm run dev        # http://127.0.0.1:4173
```

Other scripts:

| Command                        | What it does                                        |
| ------------------------------ | --------------------------------------------------- |
| `npm run build`                | Type-check and build the production bundle to `dist/` |
| `npm run preview`              | Serve the production build on http://127.0.0.1:4174 |
| `npm run lint`                 | Lint with oxlint                                    |
| `./scripts/generate-assets.sh` | Regenerate `og-image.png` and `apple-touch-icon.png` (needs Chrome) |

## Edit your content (no component changes needed)

All copy lives in `src/data/`. Replace the bracketed placeholders:

| File                     | Content                                                                   |
| ------------------------ | ------------------------------------------------------------------------- |
| `src/data/profile.ts`    | Name, roles, tagline, location, email, LinkedIn, site URL, `about` text   |
| `src/data/experience.ts` | Professional timeline (most recent first)                                 |
| `src/data/projects.ts`   | Selected projects — context, problem, solution, role, tools, result, image |
| `src/data/skills.ts`     | Skill groups and the tools list                                           |
| `src/data/education.ts`  | Degrees and languages                                                     |
| `src/data/navigation.ts` | Order and labels of the sticky navigation                                 |

Types are defined in `src/data/types.ts`.

### Project images

The four case studies in `src/data/projects.ts` map 1:1 to the experiences on the CV
(Dronemapping, Lensys, Techform, Cegedim). Frames live in `public/projects/*.svg`
and can be swapped for real Figma exports: drop a PNG/SVG in `public/projects/` and
update the `image` path. A quiet placeholder is shown when `image` is omitted.

### SEO metadata

`index.html` holds the title, description, canonical URL, Open Graph, Twitter/X cards and JSON-LD.
Search for `Robin Fremy` (update if needed) and `https://robinfux.vercel.app` and replace them. Update `public/robots.txt`
and `public/sitemap.xml` with your domain as well, then run `./scripts/generate-assets.sh` after
editing `scripts/og-template.html` with your name.

## Download CV / print

Pressing **Ctrl/Cmd + P** or clicking **Download CV** produces a clean A4 document:
navigation and buttons are hidden, animations removed, margins tightened and sections are kept
from splitting across pages. Choose **Save as PDF** in the print dialog.

To link a hand-crafted PDF instead, put it in `public/` and set `cvPdfUrl: '/cv.pdf'` in
`src/data/profile.ts` — the button then downloads that file directly.

## Design system

Defined as Tailwind tokens in `src/index.css` (`@theme`):

- **Typography** — Inter Variable (body/UI) and Instrument Serif (name, section titles), self-hosted.
  Scale: `text-display` (name), `text-h2` (sections), `text-lede` (intro), `text-label` (eyebrows).
- **Colours** — `paper`, `surface`, `ink`, `ink-soft`, `muted`, `line`, `line-strong` and a single
  accent `#b3261e` (WCAG AA on white).
- **Spacing** — Tailwind 4px scale; sections use `py-20 → py-32`.
- **Radius** — 2px (`rounded-sm`) for cards and buttons, full for chips.
- **Components** — `Section` (numbered editorial header + content column), `DownloadCvButton`,
  `.btn-primary / .btn-secondary / .btn-ghost`, `.link-underline`, `.eyebrow`.

## Structure

```
src/
  components/      Navbar, Hero, About, Experience, Projects, Skills, Tools,
                   Education, Languages, Contact, Footer, ui/Section, ui/DownloadCvButton
  data/            All editable content + types
  hooks/           useActiveSection (IntersectionObserver-based nav highlight)
  index.css        Design tokens, base styles, print stylesheet
public/            favicon.svg, og-image.png, apple-touch-icon.png, robots.txt, sitemap.xml
scripts/           Asset generation (OG image, touch icon)
```

## Accessibility & performance

Semantic landmarks, skip link, visible focus rings, keyboard-operable mobile menu (Escape closes,
focus returns to the toggle), `aria-current` on the active nav item, reduced-motion support,
self-hosted fonts with `unicode-range` subsetting, lazy-loaded images, no runtime CSS-in-JS.

## Deploy

Static output in `dist/` — deploy to Vercel, Netlify, Cloudflare Pages or any static host.
