# design-sync notes — Salti

## Known render warns

- `[RENDER_THIN]` on `ArrowForwardIcon`, `CloseIcon`, `HomeIcon`, `MinusIcon`, `PlusIcon`,
  `ShoppingBasketIcon`: each preview is a single stroke-SVG glyph with no text
  content, so the "mounts have no text" heuristic flags it even though the
  contact sheet shows the icon rendering correctly. Confirmed benign by eye
  (`ds-bundle/_screenshots/contact-sheet-1.png`, 2026-08-22). A re-sync
  should expect this warn on all six icon previews and not treat it as new.

## Config decisions

- `overrides.Nav.cardMode: "column"` — Nav is a full-width floating bar
  (matches the real page layout), so it's always going to be wider than a
  standard grid cell. Column mode gives it the full card width instead of
  being cropped.

## Re-sync risks

- Fonts (Playfair Display, DM Sans, Work Sans) are loaded via a Google
  Fonts `@import` in `src/styles.css`, not shipped as `@font-face` files
  (`[FONT_REMOTE]`). If Google Fonts is ever unreachable from wherever a
  design built with this DS renders, those three families silently fall
  back. No local font files exist in this repo to ship instead — if brand
  fonts should be guaranteed available, source `.woff2` files and wire them
  via `cfg.extraFonts`.
- `Footer`'s `variant` prop (`default`/`compact`) is my own approximation —
  the source Figma file has four distinctly-named footer frames (Footer
  3/4/5/6) with no documented distinction between them (see
  `../DESIGN_SYSTEM.md`). If design clarifies the real distinction, the
  component and its preview may need to change shape, not just restyle.
- `Nav`'s consolidated left/center/right layout is built from one sampled
  nav frame in Figma, not cross-checked against every page. If another page
  uses a materially different nav arrangement, this component may need a
  second look.
- The color/typography token gaps flagged in `../DESIGN_SYSTEM.md`
  ("Open questions for design") still apply here — nothing in this sync
  resolves them, it only builds on top of the `primary` ramp as the
  confirmed-live one.
