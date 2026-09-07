# Salti design system rules

Source of truth: Figma, **Project Salti**, canvas "Designs & Assets"
(`https://www.figma.com/design/4S7dDJxevNN1OXkd7LmFE2/Project-Salti`).

Everything in this file was pulled by reading the file's bound Variables and
actual text/component layers directly — not eyeballed from a screenshot.
`design-tokens/tokens.json` is the machine-readable version;
`design-tokens/tokens.css` is a CSS custom-property build of it. Regenerate
the CSS from the JSON if either changes — don't hand-edit values in two
places.

## Rules for writing code against this system

1. **Never hardcode a hex value, spacing number, or font stack in component
   code.** Reference a token (`--color-primary-500`, `--space-1`, etc.) or
   the equivalent value from `tokens.json`. If the value you need isn't
   tokenized yet, add it to `tokens.json` first, then use it — don't inline
   it "just this once."
2. **Use the `primary` ramp, not `alt`.** The `alt` (gold/olive) ramp is
   fully built in Figma but wasn't found bound to any live page — treat it as
   reserved until a designer confirms where it's meant to apply. If a design
   task calls for gold, ask before pulling from `alt`.
3. **Don't touch the `reserved` ramps** (`quaternary` through `octonary`).
   They're unfilled placeholders in Figma (`#000000`, hidden) — there's
   nothing to implement yet.
4. **Match typography to role, not vibe.** Three typefaces are actually in
   use — see the table below. Use `display` for headlines, `ui` for
   buttons/controls, `nav` for navigation labels/captions. Don't introduce a
   fourth without a Figma reference.
5. **Componentize nav and footer on first touch.** Both are currently
   copy-pasted per page in Figma (~20 nav copies, 4 named footer variants).
   If you're building either in code, build it once as a real component with
   props/variants — don't perpetuate the duplication.
6. **Don't wire the `button_default` Figma component as-is.** Every instance
   of it in the file is hidden; the buttons designers actually shipped are
   hand-built frames with their own styling. Match the hand-built CTA's
   actual styling (see `ui` type token + `--color-theme-background` /
   `--color-primary-700` for the "Shop Our Collection" button: white fill,
   near-black text) rather than assuming the named component reflects
   current intent.

## Color

| Token | Value | Status |
|---|---|---|
| `primary/base` | `#3a5448` | ✅ confirmed — bound on live Home/Product/Contact frames |
| `primary/100–700` | see `tokens.json` | ✅ confirmed |
| `secondary/100–700`, `tertiary/100–700` | see `tokens.json` | confirmed present in the same bound ramp as primary; sampled indirectly |
| `grey/100` | `#f1f0f0` | ✅ confirmed live — does **not** match either grey swatch in the Color Palette board |
| `grey/200–700` | see `tokens.json` | ⚠️ taken from the Color Palette board, not verified against a live binding |
| `alt/*` (gold/olive) | see `tokens.json` | ⚠️ fully built, not found bound anywhere |
| `theme/background` | `#ffffff` | ✅ confirmed, used on every sampled frame in both theme sections |

## Typography

| Role | Typeface | Weight | Size | Line-height | Where it's used |
|---|---|---|---|---|---|
| `display` | Playfair Display | ExtraBold (800) | 48px | 1.2 | Hero / page headlines |
| `ui` | DM Sans | Medium (500) | 16px | 1.2 | Buttons, CTAs |
| `nav` | Work Sans | Regular (400) | 12.24px | 14.688px | Nav pill labels (capitalized) |
| `token: "Text Small"` | Inter | Medium (500) | 16px | 1.5 | Defined as a Figma Variable, but not actually used by any sampled layer |

The `Text Small` token exists but is disconnected from what's actually on
the pages — treat the three roles above as the real scale until design
formally tokenizes `display`/`ui`/`nav`.

## Spacing & layout

8px base unit (`space-1`). Site margin 48px, gutter 32px. Section rhythm is
112px (`section-space-main`) or 0 (`section-space-none`) for flush joins.
Full values in `design-tokens/tokens.json`.

## Open questions for design (don't guess past these)

- **Which color ramp is "Dark Mode" and which is "Light Mode"?** The two
  Figma sections named for theme don't map cleanly onto the two color
  ramps in the Color Palette board — the "Dark Mode" section's pages bind
  the *green* `primary/base`, and the "Light Mode" sections don't bind any
  `primary/secondary/tertiary` variable at all (only layout + `grey/100`).
  Confirm the intended mapping before building a theme switcher.
- **Two sections are both named "Salti Full Website – Light Mode"**
  (Figma node ids `79:1000` and `79:2274`), same dimensions, same variable
  footprint. Confirm which is current before using either as a build
  reference — the other may be a stale working copy.
- **`grey/100` (`#f1f0f0`) doesn't match either grey swatch shown in the
  Color Palette board.** Confirm whether the palette board needs updating,
  or whether `grey/100` should be repointed to match one of the swatches.
