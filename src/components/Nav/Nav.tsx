import { useState, type ElementType, type ReactNode } from 'react';
import { HomeIcon, ShoppingBasketIcon } from '../Icon';
import { THEME_CLASSES, type Theme } from '../../theme';

export type NavItem = {
  label: string;
  href: string;
  /** Home page shows exactly one active item at a time. */
  active?: boolean;
};

/** Minimal shape any router's link component (or the plain `'a'` default) can satisfy — see `linkComponent` on `NavProps`. */
export type NavLinkComponent = ElementType<{
  href: string;
  className?: string;
  'aria-current'?: 'page' | undefined;
  children?: ReactNode;
}>;

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
  /**
   * Component to render nav items with, taking `href` (not `to` — keeps
   * this library router-agnostic). Defaults to a plain `<a>`, which causes
   * a full page reload in a single-page app. Pass an adapter around your
   * router's Link (e.g. `({ href, ...props }) => <Link to={href} {...props} />`)
   * for client-side navigation.
   */
  linkComponent?: NavLinkComponent;
  className?: string;
};

/**
 * Consolidates the ~20 copy-pasted nav frames found across Home / Product /
 * Contact into one component. Visual spec (colors, radii, type) is read
 * directly off the file; see DESIGN_SYSTEM.md for what's confirmed vs
 * approximated. The pill nav itself has no mobile spec in Figma (every
 * sampled frame is desktop-width) — below `md` it collapses behind a
 * hamburger toggle instead, a device-adaptation decision, not a sourced one.
 */
export function Nav({
  logo,
  items,
  cartCount = 0,
  onCartClick,
  theme = 'dark',
  linkComponent: LinkComponent = 'a',
  className,
}: NavProps) {
  const t = THEME_CLASSES[theme];
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderItem = (item: NavItem, stacked: boolean) => (
    <LinkComponent
      key={item.label}
      href={item.href}
      aria-current={item.active ? 'page' : undefined}
      onClick={() => setMobileOpen(false)}
      className={[
        'flex items-center gap-[6px] rounded-[5px] px-4 py-2',
        'font-nav text-nav capitalize',
        stacked ? 'w-full' : '',
        item.active
          ? 'border border-theme-nav-item-active-border bg-theme-nav-item-active text-white'
          : ['border border-transparent hover:bg-black/5', t.text].join(' '),
      ].join(' ')}
    >
      {item.active && item.label.toLowerCase() === 'home' && <HomeIcon size={16} />}
      {item.label}
    </LinkComponent>
  );

  return (
    <div className={['relative px-4 py-4 sm:px-6 md:px-10 lg:px-[80px] lg:py-6', className].filter(Boolean).join(' ')}>
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-[56px] items-center lg:h-12 lg:w-[68px]">{logo}</div>

        <nav
          aria-label="Primary"
          className={[
            'hidden items-center gap-[12px] rounded-[10.71px] border p-[9px] md:flex',
            t.navSurface,
            t.navSurfaceBorder,
          ].join(' ')}
        >
          {items.map((item) => renderItem(item, false))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-10">
          <button
            type="button"
            onClick={onCartClick}
            className={[
              'flex h-10 items-center gap-[6px] rounded-[5px] border px-3 py-[6px] lg:px-4',
              'font-nav text-nav capitalize',
              t.iconSurface,
              t.iconSurfaceBorder,
              t.text,
            ].join(' ')}
          >
            <ShoppingBasketIcon size={16} />
            <span className="hidden sm:inline">Cart{cartCount > 0 ? ` (${cartCount})` : ''}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={[
              'flex h-10 w-10 items-center justify-center rounded-[5px] border md:hidden',
              t.iconSurface,
              t.iconSurfaceBorder,
              t.text,
            ].join(' ')}
          >
            <span className="relative block h-3 w-4">
              <span
                className={[
                  'absolute left-0 top-0 block h-[1.5px] w-full bg-current transition-transform',
                  mobileOpen ? 'translate-y-[5px] rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity',
                  mobileOpen ? 'opacity-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute bottom-0 left-0 block h-[1.5px] w-full bg-current transition-transform',
                  mobileOpen ? '-translate-y-[5px] -rotate-45' : '',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Primary"
          className={['mt-4 flex flex-col gap-2 rounded-[10.71px] border p-[9px] md:hidden', t.navSurface, t.navSurfaceBorder].join(
            ' ',
          )}
        >
          {items.map((item) => renderItem(item, true))}
        </nav>
      )}
    </div>
  );
}
