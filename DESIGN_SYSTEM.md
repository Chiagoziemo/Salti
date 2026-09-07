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
2. **`alt` (the gold/olive shade *ramp*, 100–700) is still reserved — but the
   flat gold *theme* color (`#ffd58b`) is real and shipping.** These are two
   different things: `alt` is a multi-step palette exploration with no
   confirmed live binding; `gold` is one of the three real site themes (see
   below), used at a single flat value that doesn't match any step in
   `alt`. Don't use `alt` without asking; do use the `gold` theme freely.
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
7. **Pass `theme` explicitly to `Nav` and `Footer` — don't rely on the
   `dark` default once a page has a real theme.** Use `THEME_CLASSES` from
   `src/theme.ts` for any new themed surface rather than hardcoding a hex
   per theme inline — it's the single place all 3 themes' colors live.

## Color

| Token | Value | Status |
|---|---|---|
| `primary/base` | `#3a5448` | ✅ confirmed — bound on live Home/Product/Contact frames |
| `primary/100–700` | see `tokens.json` | ✅ confirmed |
| `secondary/100–700`, `tertiary/100–700` | see `tokens.json` | confirmed present in the same bound ramp as primary; sampled indirectly |
| `grey/100` | `#f1f0f0` | ✅ confirmed live — does **not** match either grey swatch in the Color Palette board |
| `grey/200–700` | see `tokens.json` | ⚠️ taken from the Color Palette board, not verified against a live binding |
| `alt/*` (gold/olive shade ramp) | see `tokens.json` | ⚠️ fully built, not found bound anywhere — separate from the `gold` site theme below |
| `theme/background` | `#ffffff` | ✅ confirmed, bound on every sampled frame regardless of site theme — likely the default canvas ground, not part of the 3 themes |

## Site themes

The file has **3 real, selectable site themes**, confirmed by a literal
3-dot theme-switcher control in the Home page nav (Figma nodes
`79:2080`/`79:1902`) and by each theme rendering a genuinely different
background across the same Home/Product/Contact pages. Figma's own section
names are misleading — **both `gold` and `forest` are labeled "Light Mode"
in Figma, despite `forest` having a dark background.** The names below are
ours, not Figma's; flag this to design so the file itself gets relabeled.

| Theme | Figma section | Background | Text | Tokenized in Figma? |
|---|---|---|---|---|
| `dark` | "Dark Mode" (`79:639`) | `#000000` | white | ✅ partially — the announcement stripe uses `primary/base`; the page background itself is a flat `#000000` rect, not a variable |
| `gold` | "Light Mode" (`79:1000`) | `#ffd58b` | `#141414` | ❌ raw hex |
| `forest` | "Light Mode" (`79:2274`) | `#14261e` | white | ❌ raw hex |

Nav surfaces (the floating pill + cart/icon cluster) also change per theme —
see `src/theme.ts` `THEME_CLASSES` for the exact surface/border values used
in each. The CTA button (white fill, near-black text) and the active nav
pill (`#191919` / border `#575757`) are the same on **all three** themes —
confirmed identical across all three sampled Home pages.

Footer's per-theme colors in `src/components/Footer/Footer.tsx` are
**inferred, not directly sampled** — no footer was checked across all 3
theme sections. Flag to design if a footer looks wrong on `gold` or
`forest`.

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

- **The two "Light Mode" Figma sections should be renamed.** One (`79:1000`)
  is genuinely light (cream/gold, dark text); the other (`79:2274`) is dark
  (deep green, white text) despite sharing the same label. This is resolved
  in code (see "Site themes" above, named `gold` and `forest`) but the
  source file's labels are still wrong — worth fixing at the source so the
  next person reading Figma directly isn't misled the way we were.
- **Neither `gold` nor `forest`'s background color is tokenized in Figma** —
  both are raw hex fills, unlike `dark`'s accent stripe. If this design
  system is meant to be the source of truth going forward, consider
  formalizing `#ffd58b` and `#14261e` as real Figma Variables so future
  Figma work and this code don't drift apart.
- **`grey/100` (`#f1f0f0`) doesn't match either grey swatch shown in the
  Color Palette board.** Confirm whether the palette board needs updating,
  or whether `grey/100` should be repointed to match one of the swatches.
- **Footer wasn't sampled across all 3 themes** — its per-theme background/
  text mapping in code is inferred from the pattern seen elsewhere, not
  confirmed against an actual Figma footer frame in the `gold` or `forest`
  sections.
- **`ProductStepper` was only sampled on one theme's product page.** If
  product pages differ by theme the way Home pages do, this component may
  need theme-awareness too — not yet added since there's no evidence either
  way.
