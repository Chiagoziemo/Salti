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
4. **Match typography to role, not vibe.** Twelve type roles are confirmed —
   see the table below. Don't introduce a new role without a Figma
   reference, and don't reach for `label` (Bricolage Grotesque) outside the
   one spot it's confirmed — see the open question about it below.
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
8. **In a single-page app, pass `linkComponent` to every component that
   takes one** (`Nav`, `Footer`, `TextLink`, `CollectionGrid`,
   `FeaturedProducts`, `BrandStory`). All default to a plain `<a>` (full
   page reload) to keep the library router-agnostic — they take `href`, not
   a router's `to`. Write the adapter once (see `demo/RouterLink.tsx`) and
   pass it everywhere; don't leave the default in place and accept full
   reloads by omission.
9. **Use `Logo`, not text, for the wordmark.** Figma's Nav never had a text
   "Salti" wordmark — only the icon mark (`Logo`, from "Logos Variants",
   nodes 1:7/1:4). It auto-picks light/dark fill from `theme`.
10. **Reuse `TextLink` and `CarouselButton` — don't re-invent the
    underlined-arrow link or the circular chevron button.** Both patterns
    repeat across at least 3 sections each (Featured Products, Brand Story,
    every product card; Home hero gallery and Featured Products,
    respectively). A new occurrence of either pattern should use these,
    not a fresh one-off.

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
| `product-title` | Playfair Display | SemiBold (600) | 24px | 1.2 | Product Page — product name |
| `price` | Playfair Display | Medium (500) | 40px | 1.2 | Product Page — price |
| `body` | DM Sans | Regular (400) | 18px | 1.2 | Product Page description; "Explore the Collection" text-links |
| `heading` | Playfair Display | ExtraBold (800) | 40px | 1.2 | Section headings (Featured Products, Brand Story) — smaller than hero `display` |
| `statement` | DM Sans | Medium (500) | 32px | 1.2 | Collection Grid's centered brand statement |
| `price-sm` | Playfair Display | Medium (500) | 32px | 1.2 | Featured Products card price (Product Page itself uses the larger `price`) |
| `label` | **Bricolage Grotesque** | Regular (400) | 16px | 1.5 | Contact's "Socials:" — the only sampled use of this 4th typeface, see open question |
| `detail` | DM Sans | Medium (500) | 24px | 1.2 | Contact details block; Featured Products card titles; Brand Story body |
| `token: "Text Small"` | Inter | Medium (500) | 16px | 1.5 | Defined as a Figma Variable, but not actually used by any sampled layer |

The `Text Small` token exists but is disconnected from what's actually on
the pages — treat the roles above as the real scale until design formally
tokenizes them.

## Home page

Home has 5 sections, not just the hero (the hero was the only one pulled
initially — the other 4 were found later and are now fully built):

1. **Hero** (`10:2010` etc.) — headline + CTA + `HeroGallery`. Covered above.
2. **Marquee** (`78:514`) — see `Marquee` below.
3. **Collection Grid** (`20:2891`) — centered brand statement (`statement`
   role) + the real `Logo` mark + a 3-image grid (`CollectionGrid`). Each
   tile shows "Collection 01" + "→ View" at rest; Figma's file froze a
   frosted-glass "View" overlay permanently visible on the middle tile
   rather than showing a resting state — built as a real `:hover` instead,
   applied uniformly to all three tiles, not just the one Figma happened to
   screenshot mid-hover.
4. **Featured Products** (`64:4765`) — `FeaturedProducts` + `ProductCard`.
   Real catalog names surfaced here: "ORGC Traditions Crewneck [Grey]" and
   "The Fur Shirt", both ₦40,000. The sampled file shows each repeated
   twice in the carousel — that's **2 real SKUs**, not 4; the repetition
   isn't a pattern to preserve when wiring real product data.
5. **Brand Story** (`64:4870`) — `BrandStory`. Full-bleed photo (same photo
   as Collection Grid's centered background) under a flat 50%-black
   overlay.

**`Marquee`** (used identically on Home and Contact, `78:514`/`81:3899`):
an infinite scrolling ticker — Figma's own Project Inspo brief documents it
explicitly ("All five brand lines scrolling continuously. Pauses on
hover."). Scroll speed itself isn't in the file (30s, tuned for
readability — not sourced). Content: "Different by Design", "Natural
Fabrics Honest Design", "Not made to fit in", "Become the Exception".

## Contact page

Pulled from `67:5460` (Dark theme only — gold/forest not checked, same gap
as Product Page). Two-column layout: a photo panel + a content column with
heading ("Contact us", `display` role), contact details (`detail` role:
email/phone/"Join our community"), a "Socials:" label (the file's only use
of **Bricolage Grotesque** — see open question below), 4 social icon
badges (Facebook/Instagram/Telegram/WhatsApp — approximated brand glyphs,
not pixel-exact reproductions of Figma's exported SVGs), and the same
`Marquee` component as Home, full-width at the bottom.

## Product Page

Pulled from Figma node `70:5606` (Dark theme). Real sampled content: product
"ORGC Traditions Crewneck [Burgundy]", priced in **Nigerian Naira** (`₦40,000`)
— consistent with the Home hero's "Free Shipping in Lagos, Nigeria" banner.

- **`ProductGallery`** — a fixed 4-tile masonry (large / two-medium-row /
  large), every tile on a `product-surface` (`#141414`) ground with the
  photo centered and cropped square. The sampled file reuses the same photo
  in all 4 tiles — treat that as placeholder repetition, not a rule.
- **`SizeSelector`** — **correction**: this was originally built as a
  quantity +/- stepper (`ProductStepper`, since removed). Direct inspection
  of the Product Page showed that's wrong: it's a vertical list of size rows
  (S/M/L/XL/2XL), selected row highlighted `product-surface-selected`
  (`#232323`), with a labeled collapse-toggle bar underneath using the
  `minus-sign` icon. **There is no plus icon anywhere in the file** — the
  `PlusIcon` component has been removed along with the old stepper.
- **Add to Cart** reuses the existing `Button` component unchanged (white
  fill, near-black text, trailing arrow) — confirmed identical styling to
  the Home hero CTA.

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
- **`ProductGallery` and `SizeSelector` were only sampled on the `dark`
  theme's Product Page.** If Product Page differs by theme the way Home
  does, these components may need theme-awareness too — not yet added since
  there's no evidence either way.
- **Each theme section has a second, shorter Product Page frame**
  (`71:5979`, `79:1741`, `79:3392`, all 1024px tall vs. the primary
  ~2717px) — same pattern as Home's duplicated frames. Not investigated;
  likely an earlier draft, but not confirmed.
- **Bricolage Grotesque is a 4th typeface used in exactly one place** — the
  "Socials:" label on Contact (`label` role). Worth confirming with design
  whether that's deliberate (a genuine 4th brand typeface for
  micro-labels) or a one-off slip while designing that layer. Until
  confirmed, don't reach for `label` anywhere else.
- **Social icon badges are approximated**, not pixel-exact copies of
  Figma's exported SVGs (`items` 77:446/448/451/453) — the general
  Facebook/Instagram/Telegram/WhatsApp shapes are right, but the exact
  glyph geometry wasn't traced. Fine for a placeholder; revisit before
  shipping if brand-accurate social icons matter.
- **Contact page wasn't sampled across all 3 themes**, same gap as Product
  Page — only `dark` is built.
- **"Tag design" and "Mockup" sections were checked and excluded** — the
  former is print-ready garment tag artwork, the latter is device/
  presentation renders. Neither is a web UI component.
