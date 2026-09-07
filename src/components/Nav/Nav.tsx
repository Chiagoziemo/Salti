import type { ReactNode } from 'react';
import { HomeIcon, ShoppingBasketIcon } from '../Icon';
import { THEME_CLASSES, type Theme } from '../../theme';

export type NavItem = {
  label: string;
  href: string;
  /** Home page shows exactly one active item at a time. */
  active?: boolean;
};

export type NavProps = {
  /** Logo mark, rendered top-left. Color it per `theme` yourself — the file uses a dark logo on gold, light on dark/forest. */
  logo?: ReactNode;
  items: NavItem[];
  cartCount?: number;
  onCartClick?: () => void;
  /**
   * Which of the 3 real site themes this nav renders on. Confirmed by a
   * literal 3-dot theme switcher in the file — see `../../theme.ts` and
   * DESIGN_SYSTEM.md. Defaults to `dark`, the only theme tied to a bound
   * Figma Variable.
   */
  theme?: Theme;
  className?: string;
};

/**
 * Consolidates the ~20 copy-pasted nav frames found across Home / Product /
 * Contact into one component. Visual spec (colors, radii, type) is read
 * directly off the file; see DESIGN_SYSTEM.md for what's confirmed vs
 * approximated.
 */
export function Nav({ logo, items, cartCount = 0, onCartClick, theme = 'dark', className }: NavProps) {
  const t = THEME_CLASSES[theme];

  return (
    <div className={['flex items-center justify-between px-[80px] py-6', className].filter(Boolean).join(' ')}>
      <div className="flex h-12 w-[68px] items-center">{logo}</div>

      <nav
        aria-label="Primary"
        className={['flex items-center gap-[12px] rounded-[10.71px] border p-[9px]', t.navSurface, t.navSurfaceBorder].join(
          ' ',
        )}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            className={[
              'flex items-center gap-[6px] rounded-[5px] px-4 py-2',
              'font-nav text-nav capitalize',
              item.active
                ? 'border border-theme-nav-item-active-border bg-theme-nav-item-active text-white'
                : ['border border-transparent hover:bg-black/5', t.text].join(' '),
            ].join(' ')}
          >
            {item.active && item.label.toLowerCase() === 'home' && <HomeIcon size={16} />}
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-10">
        <button
          type="button"
          onClick={onCartClick}
          className={[
            'flex h-10 items-center gap-[6px] rounded-[5px] border px-4 py-[6px]',
            'font-nav text-nav capitalize',
            t.iconSurface,
            t.iconSurfaceBorder,
            t.text,
          ].join(' ')}
        >
          <ShoppingBasketIcon size={16} />
          Cart{cartCount > 0 ? ` (${cartCount})` : ''}
        </button>
      </div>
    </div>
  );
}
