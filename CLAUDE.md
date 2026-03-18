# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Julian Emsley Website

Artist portfolio for Julian Emsley.

## User context
Julian is the artist and site owner, not a developer. When explaining things, keep it plain and non-technical. When a task involves committing, pushing to GitHub, or deploying to Vercel, remind him of the relevant steps from `GUIDE.md` rather than assuming he knows the workflow. If something goes wrong, explain it simply and offer the fix. After making changes, remind him to:
1. Open a new terminal tab (`Cmd + T`)
2. Run `cd /Users/julian/Documents/JE.com && npm run dev`
3. Open http://localhost:4321 in his browser to check the changes
4. Press `Ctrl + C` in that terminal tab when done previewing

Always give these steps explicitly — do not assume the dev server is already running.

## Stack
- Astro 5 (static output, Sharp image optimization)
- Vercel deployment (staging: julian.jamie.cx, production: julianemsley.com)

## Commands
```bash
npm run dev    # Start dev server (localhost:4321)
npm run build  # Build for production
npm run preview # Preview production build
```

## Architecture

### Content model
Content lives in TypeScript data files (not Astro content collections):
- `src/data/paintings.ts` — array of `Piece[]`
- `src/data/vessels.ts` — array of `Piece[]`

Each `Piece` has: `slug`, `title`, `medium`, `year`, `dimensions`, `images` (array of `{ src: ImageMetadata, alt: string }`), and optional `blurb`.

Images are imported as ES modules in the data files (e.g. `import foo from '@/assets/images/paintings/foo.jpg'`), which feeds them through Astro's Sharp optimization pipeline. Static/unoptimized images go in `public/images/`.

### Routing
- `/` → `src/pages/index.astro` (paintings gallery)
- `/vessels` → `src/pages/vessels.astro`
- `/about` → `src/pages/about.astro`
- `/paintings/[slug]` and `/vessels/[slug]` → dynamic detail pages using `getStaticPaths()` derived from the data arrays

### Layout & navigation
`src/layouts/Base.astro` is the single layout used by all pages. It renders:
- **Desktop (≥768px):** Fixed 220px left sidebar with nav links
- **Mobile (<768px):** Top bar with a "Work" hamburger that reveals a sub-row of section links

Active route detection compares `Astro.url.pathname`. The `/` and `/paintings/*` paths share the same active state. Layout props: `title`, `fullBleed`, `bodyScroll` (used on About to enable document scroll for IntersectionObserver fade-ins).

### Gallery component
`src/components/Gallery.astro` accepts `pieces: Piece[]` and `section` (string for building detail-page URLs). It renders a horizontally-scrolling row with aspect-ratio-aware image sizing via CSS custom properties, lazy loading, and figcaptions below each image.

### Detail pages
`src/pages/paintings/[slug].astro` and `src/pages/vessels/[slug].astro` are near-identical: two-column desktop layout (fixed info panel + scrolling images), single-column on mobile.

### Path alias
`@/*` resolves to `src/*` (configured in `tsconfig.json`).
