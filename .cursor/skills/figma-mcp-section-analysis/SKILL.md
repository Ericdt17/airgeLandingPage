---
name: figma-mcp-section-analysis
description: Analyze a Figma design/section using the Figma MCP and produce an implementation-ready breakdown for this landing-page template (sections concerned, reuse vs create components, assets/icons with filenames and export specs, tokens). Use when the user shares a Figma URL, mentions Figma MCP, or asks to analyze a design/section for implementation.
---

# Figma MCP section analysis (template-safe)

## Purpose
Turn a Figma page/section into an implementation-ready plan **without refactoring** this template’s architecture or responsiveness.

## Preconditions
- The user provides a Figma link (design/board/make) or a fileKey + nodeId.
- Prefer reusing existing `src/sections/*` and `src/components/*`.

## Workflow

### 1) Pull design context (Figma MCP)
- Use the Figma MCP primary method to fetch design context for the target node.
- If the user provides only a file link, extract **fileKey** and **nodeId** from the URL.

### 2) Map to this repo (reuse-first)
- Identify which parts map to existing sections in `src/sections/*`.
- Identify reusable components in `src/components/*` before proposing new ones.
- Avoid changing section order in `src/App.jsx` unless explicitly requested.

### 3) Output the required markdown breakdown
Follow the repo’s rule:
- `.cursor/rules/figma-analysis-section-breakdown.mdc`

Also follow:
- `ICONS_CANVA_GUIDE.md` for icon sizing/export/naming conventions

### 4) Include “implementation notes” only when needed
- Call out any required Tailwind token tweaks in `tailwind.config.js` (prefer token changes over one-off styles).
- Call out any anchor/id changes needed so `navLinks` remain accurate.

## Output template (copy/paste)

Use this exact structure:

```markdown
## Sections concerned
- ...

## Components needed
### <SectionName> (`src/sections/<SectionName>.jsx`)
- **Reuse**:
  - ...
- **Create**:
  - ...
- **Props/data**:
  - ...

## Assets required
- **Images/logos**:
  - ...
- **Icons required**:
  - **Purpose**:
  - **Proposed filename**:
  - **Export spec**:
  - **Target location**:
  - **Where used**:
  - **Source (Figma node)**:

## Tokens & styles
- ...
```

## Repo references
- Sections: `src/sections/*`
- Components: `src/components/*`
- Central copy/data: `src/constants/index.js`
- Icons: `src/assets/icons/` + `src/assets/icons/index.js`
- Images/logos: `src/assets/images/` + `src/assets/images/index.js`
- Theme tokens: `tailwind.config.js`
- Icon export guide: `ICONS_CANVA_GUIDE.md`
