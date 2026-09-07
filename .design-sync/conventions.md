## Using the Salti design system

**No provider needed.** None of the 10 components read from React context — `Button`, `Nav`, `Footer`, and `ProductStepper` all work standalone. The only setup requirement is that `styles.css` (bundled alongside `_ds_bundle.js`) is loaded on the page — it carries the Tailwind utilities, the design tokens, and the `@import` for the three brand fonts. Without it every component renders unstyled HTML.

**Styling idiom: Tailwind utility classes, generated from this system's own token names — not Tailwind's defaults.** When composing your own layout around these components (page wrappers, spacing between sections, headings), reach for these classes rather than inventing new ones or using raw hex/px:

| Class | Value | Use for |
|---|---|---|
| `bg-primary-{100…700}` / `text-primary-{100…700}` | green brand ramp | Primary UI surfaces and text — `primary-700` (`#0a130f`) is the dark hero/footer ground, `primary-base` is the mid brand green |
| `bg-secondary-*`, `bg-tertiary-*`, `bg-grey-*` | supporting ramps, same 100–700 scale | Secondary surfaces, muted text (`text-grey-400` for captions) |
| `bg-theme-background` | `#ffffff` | Light page ground — also the CTA button's fill |
| `font-display` / `text-display` | Playfair Display ExtraBold 48px, −0.96px tracking | Hero and page headlines only |
| `font-ui` / `text-ui` | DM Sans Medium 16px | Buttons, CTAs, primary UI text |
| `font-nav` / `text-nav` | Work Sans Regular 12.24px, capitalize | Nav labels, small captions |

Avoid `bg-alt-primary-*` / `bg-alt-secondary-*` / etc. (the gold/olive ramp) unless a design explicitly calls for it — it exists in the tokens but was never found bound to a real page; treat it as reserved, not a free second brand color.

**Where the truth lives.** `design-tokens/tokens.css` in the repo root is the single source for every token (also duplicated as raw values in `design-tokens/tokens.json`). `tailwind.config.ts` maps each token to the utility class names above — read it before inventing a new class. `DESIGN_SYSTEM.md` documents which tokens are confirmed-live vs. approximated, and lists three open design questions (which color mode maps to "dark" vs "light", a duplicate Figma section, one unverified grey value) — don't silently resolve those; flag them instead if a design decision depends on the answer.

**Composing with the library:**

```tsx
import { Nav, Button, Footer } from '@salti/design-system';

function Hero() {
  return (
    <section className="bg-primary-700 px-[80px] py-[112px]">
      <Nav
        logo={<span className="font-display text-white">Salti</span>}
        items={[
          { label: 'home', href: '/', active: true },
          { label: 'about', href: '/about' },
          { label: 'contact', href: '/contact' },
        ]}
      />
      <h1 className="font-display text-display mt-16 max-w-[520px] text-white">
        Some clothes you wear,
        <br />
        Salti you are.
      </h1>
      <Button withArrow>Shop Our Collection</Button>
    </section>
  );
}
```

`Footer` takes a `variant` of `"default"` (full column layout) or `"compact"` (single row) — pick based on how much footer content the page actually has, not by default habit. `ProductStepper` is generic over its label (`"Size"`, `"Quantity"`, etc.) — it's a labeled +/− row, not size-specific.
