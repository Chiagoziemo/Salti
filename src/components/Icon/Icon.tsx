import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  /** Pixel size for both width and height. Defaults to 16, matching the nav/UI icons in Figma. */
  size?: number;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

/** `home-01` — used in Nav for the active/home link. */
export function HomeIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9v10a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1V9" />
    </svg>
  );
}

/** `shopping-basket-01` — used in Nav for cart. */
export function ShoppingBasketIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 10h16l-1.4 9.1a2 2 0 0 1-2 1.9H7.4a2 2 0 0 1-2-1.9L4 10Z" />
      <path d="M8 10 9.5 4M16 10 14.5 4M9 14v3M15 14v3" />
    </svg>
  );
}

/** `multiplication-sign` — modal/panel close control. */
export function CloseIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** `arrow-forward-sharp` — trailing CTA affordance. */
export function ArrowForwardIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** `minus-sign` — stepper decrement control. */
export function MinusIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

/** Stepper increment control — pairs with MinusIcon; no `plus-sign` instance was found bound in the file, inferred symmetric. */
export function PlusIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
