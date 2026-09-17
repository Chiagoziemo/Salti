import type { Config } from 'tailwindcss';

// Every value here is a CSS custom property defined in design-tokens/tokens.css,
// which is imported by src/styles.css. Edit tokens.css (generated from
// design-tokens/tokens.json), never the literal values below.
export default {
  content: ['./src/**/*.{ts,tsx}', './demo/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'var(--color-primary-base)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
        },
        secondary: {
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
        },
        tertiary: {
          100: 'var(--color-tertiary-100)',
          200: 'var(--color-tertiary-200)',
          300: 'var(--color-tertiary-300)',
          400: 'var(--color-tertiary-400)',
          500: 'var(--color-tertiary-500)',
          600: 'var(--color-tertiary-600)',
          700: 'var(--color-tertiary-700)',
        },
        grey: {
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
        },
        // Documented in Figma but not confirmed bound to any live page — see DESIGN_SYSTEM.md.
        // Kept under an `alt-` prefix so it can't be reached for by accident.
        'alt-primary': {
          100: 'var(--color-alt-primary-100)',
          200: 'var(--color-alt-primary-200)',
          300: 'var(--color-alt-primary-300)',
          400: 'var(--color-alt-primary-400)',
          500: 'var(--color-alt-primary-500)',
          600: 'var(--color-alt-primary-600)',
          700: 'var(--color-alt-primary-700)',
        },
        'alt-secondary': {
          100: 'var(--color-alt-secondary-100)',
          200: 'var(--color-alt-secondary-200)',
          300: 'var(--color-alt-secondary-300)',
          400: 'var(--color-alt-secondary-400)',
          500: 'var(--color-alt-secondary-500)',
          600: 'var(--color-alt-secondary-600)',
          700: 'var(--color-alt-secondary-700)',
        },
        'alt-tertiary': {
          100: 'var(--color-alt-tertiary-100)',
          200: 'var(--color-alt-tertiary-200)',
          300: 'var(--color-alt-tertiary-300)',
          400: 'var(--color-alt-tertiary-400)',
          500: 'var(--color-alt-tertiary-500)',
          600: 'var(--color-alt-tertiary-600)',
          700: 'var(--color-alt-tertiary-700)',
        },
        'alt-grey': {
          100: 'var(--color-alt-grey-100)',
          200: 'var(--color-alt-grey-200)',
          300: 'var(--color-alt-grey-300)',
          400: 'var(--color-alt-grey-400)',
          500: 'var(--color-alt-grey-500)',
          600: 'var(--color-alt-grey-600)',
          700: 'var(--color-alt-grey-700)',
        },
        'theme-background': 'var(--color-theme-background)',

        // Three real site themes — see design-tokens/tokens.json "themes" and DESIGN_SYSTEM.md.
        'theme-dark-bg': 'var(--theme-dark-bg)',
        'theme-dark-text': 'var(--theme-dark-text)',
        'theme-dark-accent-stripe': 'var(--theme-dark-accent-stripe)',
        'theme-dark-nav-surface': 'var(--theme-dark-nav-surface)',
        'theme-dark-nav-surface-border': 'var(--theme-dark-nav-surface-border)',
        'theme-dark-icon-surface': 'var(--theme-dark-icon-surface)',
        'theme-dark-icon-surface-border': 'var(--theme-dark-icon-surface-border)',

        'theme-gold-bg': 'var(--theme-gold-bg)',
        'theme-gold-text': 'var(--theme-gold-text)',
        'theme-gold-nav-surface': 'var(--theme-gold-nav-surface)',
        'theme-gold-nav-surface-border': 'var(--theme-gold-nav-surface-border)',
        'theme-gold-icon-surface': 'var(--theme-gold-icon-surface)',
        'theme-gold-icon-surface-border': 'var(--theme-gold-icon-surface-border)',

        'theme-forest-bg': 'var(--theme-forest-bg)',
        'theme-forest-text': 'var(--theme-forest-text)',
        'theme-forest-nav-surface': 'var(--theme-forest-nav-surface)',
        'theme-forest-nav-surface-border': 'var(--theme-forest-nav-surface-border)',
        'theme-forest-icon-surface': 'var(--theme-forest-icon-surface)',
        'theme-forest-icon-surface-border': 'var(--theme-forest-icon-surface-border)',

        'theme-nav-item-active': 'var(--theme-nav-item-active)',
        'theme-nav-item-active-border': 'var(--theme-nav-item-active-border)',

        'product-surface': 'var(--product-surface)',
        'product-surface-selected': 'var(--product-surface-selected)',

        'cream-tint': 'var(--color-cream-tint)',
        'marquee-bg': 'var(--marquee-bg)',
        'marquee-text': 'var(--marquee-text)',
        'text-link-border': 'var(--text-link-border)',
      },
      spacing: {
        'space-1': 'var(--space-1)',
        'space-5': 'var(--space-5)',
        'site-gutter': 'var(--site-gutter)',
        'site-margin': 'var(--site-margin)',
        'section-none': 'var(--section-space-none)',
        'section-main': 'var(--section-space-main)',
        'control-2-5': 'var(--control-height-2-5)',
        'col-3': 'var(--column-width-3)',
        'col-9': 'var(--column-width-9)',
      },
      borderWidth: {
        main: 'var(--border-width-main)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        ui: ['"DM Sans"', 'system-ui', 'sans-serif'],
        nav: ['"Work Sans"', 'system-ui', 'sans-serif'],
        label: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'var(--text-display-size)',
          {
            lineHeight: 'var(--text-display-line-height)',
            letterSpacing: 'var(--text-display-tracking)',
            fontWeight: 'var(--text-display-weight)',
          },
        ],
        ui: [
          'var(--text-ui-size)',
          { lineHeight: 'var(--text-ui-line-height)', fontWeight: 'var(--text-ui-weight)' },
        ],
        nav: [
          'var(--text-nav-size)',
          { lineHeight: 'var(--text-nav-line-height)', fontWeight: 'var(--text-nav-weight)' },
        ],
        'product-title': [
          'var(--text-product-title-size)',
          { lineHeight: 'var(--text-product-title-line-height)', fontWeight: 'var(--text-product-title-weight)' },
        ],
        price: [
          'var(--text-price-size)',
          { lineHeight: 'var(--text-price-line-height)', fontWeight: 'var(--text-price-weight)' },
        ],
        body: [
          'var(--text-body-size)',
          { lineHeight: 'var(--text-body-line-height)', fontWeight: 'var(--text-body-weight)' },
        ],
        heading: [
          'var(--text-heading-size)',
          {
            lineHeight: 'var(--text-heading-line-height)',
            letterSpacing: 'var(--text-heading-tracking)',
            fontWeight: 'var(--text-heading-weight)',
          },
        ],
        statement: [
          'var(--text-statement-size)',
          {
            lineHeight: 'var(--text-statement-line-height)',
            letterSpacing: 'var(--text-statement-tracking)',
            fontWeight: 'var(--text-statement-weight)',
          },
        ],
        'price-sm': [
          'var(--text-price-sm-size)',
          { lineHeight: 'var(--text-price-sm-line-height)', fontWeight: 'var(--text-price-sm-weight)' },
        ],
        label: [
          'var(--text-label-size)',
          { lineHeight: 'var(--text-label-line-height)', fontWeight: 'var(--text-label-weight)' },
        ],
        detail: [
          'var(--text-detail-size)',
          { lineHeight: 'var(--text-detail-line-height)', fontWeight: 'var(--text-detail-weight)' },
        ],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // Duration is arbitrary (Figma doesn't encode animation timing) —
        // tuned for a readable scroll speed, not sourced from the file.
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
