import type { ReactNode } from 'react';
import { HomeIcon, ShoppingBasketIcon } from '../Icon';

export type NavItem = {
  label: string;
  href: string;
  /** Home page shows exactly one active item at a time. */
  active?: boolean;
};

export type NavProps = {
  /** Logo mark, rendered top-left. The file uses a light-on-dark icon lockup here. */
  logo?: ReactNode;
  items: NavItem[];
  cartCount?: number;
  onCartClick?: () => void;
  className?: string;
};

/**
 * Consolidates the ~20 copy-pasted nav frames found across Home / Product /
 * Contact into one component. Visual spec (colors, radii, type) is read
 * directly off the file; see DESIGN_SYSTEM.md for what's confirmed vs
 * approximated.
 */
export function Nav({ logo, items, cartCount = 0, onCartClick, className }: NavProps) {
  return (
    <div className={['flex items-center justify-between px-[80px] py-6', className].filter(Boolean).join(' ')}>
      <div className="flex h-12 w-[68px] items-center">{logo}</div>

      <nav
        aria-label="Primary"
        className="flex items-center gap-[12px] rounded-[10.71px] border border-[#242222] bg-[rgba(18,18,18,0.8)] p-[9px]"
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            className={[
              'flex items-center gap-[6px] rounded-[5px] px-4 py-2',
              'font-nav text-nav capitalize text-white',
              item.active ? 'border border-[#575757] bg-[#191919]' : 'border border-transparent hover:bg-white/5',
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
          className="flex h-10 items-center gap-[6px] rounded-[5px] border border-[#242222] bg-[#191919] px-4 py-[6px] font-nav text-nav capitalize text-white"
        >
          <ShoppingBasketIcon size={16} />
          Cart{cartCount > 0 ? ` (${cartCount})` : ''}
        </button>
      </div>
    </div>
  );
}
