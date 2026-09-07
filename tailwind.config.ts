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
      },
    },
  },
  plugins: [],
} satisfies Config;
