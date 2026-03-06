# Julian Emsley — Portfolio

Minimal artist portfolio built with [Astro](https://astro.build). Static output, image-heavy, zero client-side framework.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output → dist/
npm run preview   # preview the build
```

## Adding artwork

Each piece is a JSON file in `src/content/paintings/` or `src/content/vessels/`.

```json
{
  "title": "Smoke On The Hills",
  "year": 2025,
  "medium": "Oil on canvas",
  "dimensions": "120 × 90 cm",
  "image": "/images/paintings/smoke-on-the-hills.jpg",
  "order": 1,
  "featured": true
}
```

Drop the corresponding image into `public/images/paintings/` or `public/images/vessels/`.

**Fields:** `title` and `year` are required. `medium`, `dimensions`, and `featured` are optional. `order` controls sort position in the gallery (lower = first).

## Structure

```
src/
  content.config.ts     ← collection schemas
  content/
    paintings/*.json    ← painting entries
    vessels/*.json      ← vessel entries
  layouts/
    Base.astro          ← header, nav, footer
  components/
    Gallery.astro       ← grid + lightbox
  pages/
    index.astro         ← all work
    paintings.astro     ← paintings only
    vessels.astro       ← vessels only
    about.astro         ← artist statement
  styles/
    global.css          ← tokens, reset, base
public/
  images/               ← artwork images
  favicon.svg
```

## Design decisions

- **Dark ground** (`#111110`) — lets the artwork carry all colour
- **DM Sans** at light weight — refined but doesn't compete with the work
- **4px grid gap** — tight mosaic feel, images breathe through scale not whitespace
- **Native `<dialog>` lightbox** — no JS library, keyboard + click-outside to close, arrow key navigation
- **`mix-blend-mode: difference`** on the header — nav stays readable over any image
- **Staggered fade-in** on gallery items — subtle entrance animation
- **Content collections** — type-safe, validated at build time, easy to extend

## Deployment

Static output works anywhere. Recommended: Netlify or Vercel with automatic deploys from a Git repo.

```bash
# Netlify
npm run build
# Deploy dist/ directory

# Or add netlify.toml:
# [build]
#   command = "npm run build"
#   publish = "dist"
```

## Customisation

- **Colours:** Edit CSS custom properties in `src/styles/global.css`
- **Typography:** Swap the Google Fonts import in `global.css`
- **Grid density:** Adjust `--grid-min` and `--grid-gap` variables
- **New categories:** Add a collection in `content.config.ts`, create a content directory, and add a page
