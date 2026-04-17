# Rebrand-Only Landing Page Prompt (Copy/Paste)

Use this prompt when you want to rebrand a landing-page repo **without changing its architecture, layout patterns, or responsiveness**.

---

## Prompt

You are working inside my existing landing-page repository.

### Goal
Rebrand this landing page from its current brand to **[NEW BRAND / PROJECT NAME]**, while preserving the existing:
- folder architecture and file structure
- component/section layout patterns
- Tailwind responsive breakpoints and spacing utilities
- overall visual style system (same “template feel”), unless explicitly instructed otherwise

### Hard constraints (must follow)
- Do **not** refactor or reorganize directories like `src/components`, `src/sections`, `src/assets`, `src/constants`.
- Do **not** change the section order in `src/App.jsx` unless I explicitly ask.
- Do **not** rewrite layouts or responsiveness logic (keep Tailwind class intent; keep `padding*`, `max-container`, breakpoints like `max-lg`, `max-xl`, `sm`, `wide`).
- Do **not** introduce new frameworks, routers, state libraries, or a new CSS system.
- Make the smallest possible diffs that accomplish the rebrand.

### What you ARE allowed to change (preferred “rebrand surfaces”)
- Replace brand copy, labels, links, product/service text in `src/constants/index.js` and the section components under `src/sections`.
- Replace logos/images/icons in `src/assets/images` and `src/assets/icons` (keep filenames if that minimizes diffs; otherwise update imports safely).
- Update brand color tokens in `tailwind.config.js` (keep token names stable unless you have a strong reason).
- Update document branding in `index.html` (title, favicon, meta basics).

### Inputs I will provide (use these; if missing, propose sensible placeholders)
- **Brand name**:
- **Tagline / one-liner**:
- **Primary CTA text** (e.g. “Get Started”):
- **Secondary CTA text** (optional):
- **Brand colors** (hex or Tailwind-like intent):
- **Logo files** (paths or I’ll add them):
- **Hero image/product images** (paths or I’ll add placeholders):
- **Navigation labels + section anchors**:
- **Footer links** + support email + phone:
- **SEO**: title + description:

### Deliverables
1. Implement the rebrand across copy, assets, and tokens while preserving layout/responsiveness.
2. Ensure internal anchors (nav links like `#home`, `#about-us`, etc.) still work and match section `id`s.
3. Keep mobile responsiveness intact (no breakpoint regressions).
4. Run lint/build if available; fix any new errors introduced by the rebrand.
5. Summarize exactly which files changed and what I need to replace (e.g., missing images).

### Quality bar / acceptance criteria
- The site looks like the same template, just rebranded.
- No broken imports, missing assets, or console errors.
- Copy has no leftover mentions of the old brand.
- Mobile layout still looks intentional and clean.

---

## Optional: Brand Kit (paste below)

### Brand kit
- Brand name:
- Industry:
- Tone (e.g. modern, playful, premium):
- 3 adjectives:
- Do/Don’t words:

### Copy blocks
- Hero headline:
- Hero subtext:
- About/value prop headline:
- About/value prop body:
- Services (3 cards):
- Reviews (2):
- Subscribe CTA:
- Footer blurb:

