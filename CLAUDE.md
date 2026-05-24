# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server (often http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint, max-warnings 0
```

## Product

**AIRGÉ** — dark-first marketing site for a creator/content platform (formations + outil IA + accompagnement). French copy, tutoiement on the home page.

## Architecture

React 18 + Vite + Tailwind + React Router. No global state library.

```
src/App.jsx              # Routes
src/pages/Landing.jsx    # Home (section order defined here)
src/sections/*           # Hero, LeProbleme, Solution, …
src/components/*         # Nav, NavBrand, Button, SEO, …
src/constants/index.js   # Copy, nav, FAQ, pricing, CTAs
src/index.css            # :root AIRGÉ tokens + layout utilities
tailwind.config.js       # airge-* + hero-grid
```

## Home sections (order)

Nav → Hero → LeProbleme → Solution → SecuriteConfiance (`#fonctionnalites`) → MetriquesCles (`#impact`) → Tarifs → Faq → CtaFinal → Footer

## Key constants

- `brandName`, `navLinks`, `appCtaHref`, `whatsappCtaHref`
- Section copy: `hero*`, `problem*`, `solution*`, `howItWorks*` / SecuriteConfiance, `impact*`, `pricing*`, `faq*`, `ctaFinal*`, `footer*`

## Theming

Design tokens are CSS custom properties defined in `src/index.css` (`:root`) — that is the source of truth. `tailwind.config.js` maps every `airge-*` class to the corresponding `var()`. Always use `airge-*` token names in new code; never hardcode hex values.

**Canonical tokens:** `airge-bg` · `airge-bg-subtle` · `airge-bg-deep` · `airge-surface` · `airge-surface-soft` · `airge-foreground` · `airge-muted` · `airge-primary` · `airge-primary-hover` · `airge-primary-light` · `airge-border` · `airge-accent-warm` · `airge-accent-danger` · `airge-ink`

**Legacy aliases** (still valid, map to canonical tokens): `brand-blue` → `airge-primary` · `coral-red` → `airge-accent-danger` · `slate-gray` → `airge-muted` · `pale-blue` → `airge-surface` · `security-ink` → `airge-bg-deep`

Utility classes: `.max-container` · `.padding[-x/y/l/r/t/b]` · `.info-text` · `.text-gradient` · `.input` · `bg-hero-grid` · breakpoint `wide:` (1440px)

## Nav ↔ Section ID Map

`navLinks` in `src/constants/index.js` must stay in sync with section `id` attributes. When renaming an anchor update both the constant and the section file.

| href | Section file | id |
|------|--------------|----|
| `#probleme` | `LeProbleme.jsx` | `probleme` |
| `#solution` | `Solution.jsx` | `solution` |
| `#fonctionnalites` | `SecuriteConfiance.jsx` | `fonctionnalites` |
| `#impact` | `MetriquesCles.jsx` | `impact` |
| `#tarifs` | `Tarifs.jsx` | `tarifs` |
| `#faq` | `Faq.jsx` | `faq` |

## Icons & Assets

- Use **Heroicons** (`@heroicons/react`) for in-section icons — installed and already used across sections.
- Import images and SVG brand/social icons through the barrel files (`src/assets/images/index.js`, `src/assets/icons/index.js`), never via raw paths.

## Accessibility

- Decorative elements: `alt=""` and `aria-hidden="true"`.
- FAQ/accordions: `aria-expanded`, `aria-controls`, `role="region"` — see `Faq.jsx` as reference.
- External links: `rel="noopener noreferrer"` with `target="_blank"`.

## Legacy

Inner routes (`/plateforme/*`, some `/entreprise/*`) may still reference LivSight / logistics — clean up when editing those files.
