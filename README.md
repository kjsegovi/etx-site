# ETX — concept site

A revamped, multi-page marketing site for **ETX (Center for Education Through Exploration)**, repositioning ETX as a *learning-experience design studio*. Built as a demo/prototype successor to [etx.asu.edu](https://etx.asu.edu).

> The science of learning. The art of storytelling. Education for everyone.

## Stack

- **React 18** + **TypeScript** + **Vite 6**
- **React Router** for multi-page routing
- **Tailwind CSS v4** (design tokens defined in `src/index.css`)
- **Framer Motion** for scroll-reveal animation

## Getting started

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Pages

| Route          | Page                                            |
| -------------- | ----------------------------------------------- |
| `/`            | Home — message, services, featured work         |
| `/work`        | Portfolio of all projects                       |
| `/work/:slug`  | Per-project case study (data-driven)            |
| `/services`    | Studio services + "Them vs. Us" differentiators |
| `/approach`    | Mission, values, process, evidence              |
| `/contact`     | Demo contact form                               |
| `*`            | 404                                             |

## Editing content

Almost all copy and data is centralized so it's easy to iterate on messaging:

- `src/data/content.ts` — brand voice, services, values, process, stats, partners, nav
- `src/data/projects.ts` — portfolio + case-study content

Design tokens (colors, fonts, helper classes) live in `src/index.css` under `@theme`.

## Project structure

```
src/
  data/         content.ts, projects.ts        # all editable content
  layout/       RootLayout, Nav, Footer, ScrollToTop
  components/   ui/ (Button, Card, Section, Reveal, Logo), ProjectCard, PageHero
  pages/        Home, Work, CaseStudy, Services, Approach, Contact, NotFound
```

## Notes

- The contact form is a front-end **concept demo** (no backend).
- Project cards use gradient placeholder tiles; drop in real screenshots/logos later.
- `public/_redirects` provides SPA fallback for static hosts (e.g. Cloudflare Pages).
- This is a concept/prototype for internal review, not the production ETX site.
