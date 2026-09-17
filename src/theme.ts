export type Theme = 'dark' | 'gold' | 'forest';

/**
 * Three real, selectable site themes found in the Figma file — confirmed by
 * a literal 3-dot theme-switcher control in the Home page nav, plus each
 * site section rendering a genuinely different background. Figma's own
 * section names are misleading (both "gold" and "forest" are labeled
 * "Light Mode" there, despite "forest" being dark) — these names are ours.
 * Only `dark`'s accent stripe ties back to a bound Figma Variable
 * (`primary/base`); `gold` and `forest` are raw hex in the source file.
 * See design-tokens/tokens.json → "themes" and DESIGN_SYSTEM.md.
 */
export const THEME_ORDER: Theme[] = ['gold', 'dark', 'forest'];

export const THEME_LABELS: Record<Theme, string> = {
  gold: 'Gold',
  dark: 'Dark',
  forest: 'Forest',
};

/** Swatch color for each theme, used by ThemeSwitcher's dots — matches each theme's page background. */
export const THEME_SWATCH_CLASS: Record<Theme, string> = {
  dark: 'bg-theme-dark-bg',
  gold: 'bg-theme-gold-bg',
  forest: 'bg-theme-forest-bg',
};

type ThemeClasses = {
  bg: string;
  text: string;
  navSurface: string;
  navSurfaceBorder: string;
  iconSurface: string;
  iconSurfaceBorder: string;
  /**
   * Hairline divider color (e.g. Footer's border-top). Not directly
   * evidenced per-theme in Figma — inferred from each theme's text
   * lightness (light divider on dark bg, dark divider on light bg).
   */
  divider: string;
  /** AnnouncementBar's background — a different, darker/distinct color from `bg` in every theme. */
  accentStripe: string;
  /** AnnouncementBar's text color. Overridden from the source on `forest` — see tokens.css. */
  accentStripeText: string;
  /** ProductGallery's tile surface. Confirmed on dark/gold; inferred on forest — see tokens.css. */
  gallerySurface: string;
};

/**
 * Literal Tailwind class names per theme (kept literal, not templated, so
 * Tailwind's content scanner can find them). Each class is backed by a CSS
 * custom property in design-tokens/tokens.css.
 */
export const THEME_CLASSES: Record<Theme, ThemeClasses> = {
  dark: {
    bg: 'bg-theme-dark-bg',
    text: 'text-theme-dark-text',
    navSurface: 'bg-theme-dark-nav-surface',
    navSurfaceBorder: 'border-theme-dark-nav-surface-border',
    iconSurface: 'bg-theme-dark-icon-surface',
    iconSurfaceBorder: 'border-theme-dark-icon-surface-border',
    divider: 'border-white/10',
    accentStripe: 'bg-theme-dark-accent-stripe',
    accentStripeText: 'text-theme-dark-accent-stripe-text',
    gallerySurface: 'bg-theme-dark-gallery-surface',
  },
  gold: {
    bg: 'bg-theme-gold-bg',
    text: 'text-theme-gold-text',
    navSurface: 'bg-theme-gold-nav-surface',
    navSurfaceBorder: 'border-theme-gold-nav-surface-border',
    iconSurface: 'bg-theme-gold-icon-surface',
    iconSurfaceBorder: 'border-theme-gold-icon-surface-border',
    divider: 'border-black/10',
    accentStripe: 'bg-theme-gold-accent-stripe',
    accentStripeText: 'text-theme-gold-accent-stripe-text',
    gallerySurface: 'bg-theme-gold-gallery-surface',
  },
  forest: {
    bg: 'bg-theme-forest-bg',
    text: 'text-theme-forest-text',
    navSurface: 'bg-theme-forest-nav-surface',
    navSurfaceBorder: 'border-theme-forest-nav-surface-border',
    iconSurface: 'bg-theme-forest-icon-surface',
    iconSurfaceBorder: 'border-theme-forest-icon-surface-border',
    divider: 'border-white/10',
    accentStripe: 'bg-theme-forest-accent-stripe',
    accentStripeText: 'text-theme-forest-accent-stripe-text',
    gallerySurface: 'bg-theme-forest-gallery-surface',
  },
};
