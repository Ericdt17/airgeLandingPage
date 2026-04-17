# Figma section command (copy/paste)

Use this after you **select a frame/section in Figma** (so it’s highlighted).

---

## Command

```text
FIGMA SECTION READY (SELECTED)

Use the `figma-mcp-section-analysis` skill on my CURRENTLY SELECTED Figma frame/section.
Fallback if selection isn’t detected: use this node URL: [paste node URL]

Return markdown with:
1) Sections concerned (map to `src/sections/*` + anchor ids)
2) Components needed
   - Reuse (existing paths)
   - Create (new components + proposed paths)
   - Props/data (bullets)
3) Assets required
   - Images/logos (filenames + target folder + where used)
   - Icons required (purpose + proposed filename + export spec + where used + Figma node name)
4) Tokens & styles (Tailwind token changes only; keep breakpoints/spacing)
5) Checks (navLinks↔ids, assets barrel exports, no old-brand leftovers)

Constraints: keep template architecture + responsiveness; minimal diffs; reuse-first.
```

