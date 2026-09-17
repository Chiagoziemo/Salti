import { THEME_CLASSES, type Theme } from '../../theme';

export type AnnouncementBarProps = {
  children: string;
  theme?: Theme;
  className?: string;
};

/**
 * The "• Free Shipping in Lagos, Nigeria •" strip that sits above Nav on
 * every page, in every theme (nodes 17:2849, 67:5461, and equivalents) —
 * present in every single page pull but never actually built until now.
 * Uses each theme's `accentStripe`, a distinct color from the page `bg`.
 */
export function AnnouncementBar({ children, theme = 'dark', className }: AnnouncementBarProps) {
  const t = THEME_CLASSES[theme];
  return (
    <div className={['flex w-full items-center justify-center px-4 py-[14px] text-center', t.accentStripe, className].filter(Boolean).join(' ')}>
      <p className={['font-ui text-[11px] sm:text-[13px]', t.accentStripeText].join(' ')}>{children}</p>
    </div>
  );
}
