# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (max-warnings 0 — zero tolerance)
```

## Architecture

Single-page React + Vite + Tailwind CSS landing page (LivSight). No routing — navigation uses anchor links (`#section-id`). `App.jsx` renders all sections in order.

```
App.jsx
├── Nav
├── Hero
├── TrustedBy
├── LeProbleme
├── Solution
├── MetriquesCles
├── Temoignages
├── SecuriteConfiance
├── Tarifs
├── Faq
├── CtaFinal
└── Footer
```

**`src/sections/`** — full-width page sections that compose smaller pieces  
**`src/components/`** — reusable UI elements (`Button`, `Nav`)  
**`src/constants/index.js`** — single source of truth for copy/data (`navLinks`, footer columns, testimonials, FAQ, tarifs, etc.)  
**`src/assets/icons/index.js` + `src/assets/images/index.js`** — barrel exports for assets

## Key Rules (from .cursor/rules/)

**Branding & content**: Prefer `src/constants/index.js` for copy and nav/footer data.

**Assets**: Import via barrel files (`import { headerLogo } from "../assets/images"`), not raw string paths.

**Theming**: Adjust look via `tailwind.config.js` tokens (colors, fonts, shadows).

**Nav ↔ section IDs**: Keep `navLinks` `href` values in sync with section `id` attributes in `src/sections/*`.

## Tailwind Conventions

- Custom fonts: `font-palanquin`, `font-montserrat`
- Custom colors: `coral-red`, `brand-blue`, `slate-gray`, `pale-blue`, `primary`, `security-ink`
- Shared padding utilities: `.padding`, `.padding-x`, etc. (`src/index.css`)
- Layout wrapper: `.max-container`
- Custom breakpoint: `wide:` (1440px)
