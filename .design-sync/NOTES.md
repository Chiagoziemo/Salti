# design-sync notes — Salti

## Known render warns

- `[RENDER_THIN]` on `ArrowForwardIcon`, `CloseIcon`, `HomeIcon`, `MinusIcon`,
  `ShoppingBasketIcon`, `ChevronLeftIcon`, `ChevronRightIcon`: each preview
  is a single stroke-SVG glyph with no text content, so the "mounts have no
  text" heuristic flags it even though the contact sheet shows the icon
  rendering correctly. Confirmed benign by eye
  (`ds-bundle/_screenshots/contact-sheet-1.png`). A re-sync should expect
  this warn on all seven icon previews and not treat it as new. (`PlusIcon`
  was on this list too but the component was removed — see below.)

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
- `HeroGallery`'s demo images (`public/images/IMG_*.jpg`) are real campaign
  photography from a Drive folder the user shared ("Melody collab"), not
  Figma exports — see the commit that added `public/images/` for
  provenance. They depict a linen co-ord set, not the "ORGC Traditions
  Crewneck" product on the Product Page — don't reuse them there.
- `ProductStepper` and `PlusIcon` were removed (replaced by `SizeSelector` —
  see `../DESIGN_SYSTEM.md` "Product Page") and cleaned up in this sync:
  their remote files were deleted and their stale grade caches pruned
  automatically by `package-capture.mjs`.
- `HeroGallery`, `ProductGallery`, and `SizeSelector`'s previews use inline
  SVG data-URI placeholders, not real photos or the Figma asset URL — the
  design-sync capture context can't reach `public/images/` (that's the
  demo app's static folder) or the expiring Figma CDN link. The demo app
  (`demo/pages/Home.tsx`, `demo/pages/Product.tsx`) is what shows real
  images; these previews only need to prove the layout works.
