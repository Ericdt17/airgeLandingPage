# Icon design guide (Canva → this repo)

This landing-page repo uses **local icon files** (preferably SVG) in `src/assets/icons/`.

## 1) Pick one icon style (be consistent)

Choose **one** and stick to it for the whole site:
- **Outline**: simple strokes (recommended for modern UI)
- **Solid**: filled shapes (works well for bold brands)

If you mix outline and solid, do it intentionally and label variants in filenames.

## 2) Recommended sizes

Design icons to look good at common UI sizes: **16px**, **20px**, **24px**.

### Default artboard (recommended)
- **Artboard/canvas**: **24×24**
- **Safe padding**: keep the drawing inside ~**20×20** (don’t touch edges)

### Outline icons (recommended defaults)
- **Stroke**: **2px** (on a 24×24 artboard)
- **Stroke caps/joins**: pick one style (round is friendlier; square is sharper) and keep it consistent

### Solid icons
- Use consistent visual weight across icons
- Avoid super-thin details that disappear at 16px

## 3) Export settings

### Best: SVG
- Export each icon as **SVG**
- Background: **transparent**
- One icon per file

### If SVG isn’t available: PNG fallback
- Export **PNG** with transparent background
- Export at **256×256** or **512×512** so it downscales cleanly

## 4) Naming convention (important)

Use **kebab-case** filenames and include the file extension:
- `menu.svg`
- `close.svg`
- `chevron-left.svg`
- `check-circle.svg`

Variants:
- `chevron-left-solid.svg`
- `chevron-left-outline.svg`
- `chevron-left-sm.svg` (only if the design truly needs a separate small variant)

Avoid brand names in filenames unless it’s literally a brand logo (e.g. `facebook.svg`).

## 5) How to organize in this repo

- Put exported icons in: `src/assets/icons/`
- Prefer importing icons via: `src/assets/icons/index.js`

## 6) Quick quality checklist

Before you export:
- Does it still read clearly at **16×16**?
- Is there consistent padding (nothing touches edges)?
- Does it match the same stroke width / weight as the rest?
- Is it centered optically (not just mathematically)?

