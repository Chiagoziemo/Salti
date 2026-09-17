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

/** `minus-sign` — Size selector's collapse-toggle affordance (node 70:5868). */
export function MinusIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

/** `chevron-down-sharp` rotated +90° — Home hero gallery's "previous" control (node 78:551). */
export function ChevronLeftIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}

/** `chevron-down-sharp` rotated -90° — Home hero gallery's "next" control (node 78:554). */
export function ChevronRightIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

/** `Polygon 1` — the small filled diamond bullet separating Marquee items (node 78:516). Filled, not stroked, unlike the rest of this set. */
export function DiamondIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0 16 8 8 16 0 8Z" />
    </svg>
  );
}

const socialBase = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
});

/** Contact page social badge — Facebook (node 77:446). Circular dark badge, matching the source's 40px default. */
export function FacebookIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg {...socialBase(size)} {...props}>
      <circle cx="12" cy="12" r="12" fill="#191919" />
      <path d="M13.5 12.5H15l.3-2H13.5v-1.3c0-.6.15-1 1.02-1H15.3V6.1c-.23-.03-1-.1-1.9-.1-1.9 0-3.2 1.16-3.2 3.28V10.5H8.3v2H10.2V18h2.3v-5.5Z" fill="#fff" />
    </svg>
  );
}

/** Contact page social badge — Instagram (node 77:448). */
export function InstagramIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg {...socialBase(size)} {...props}>
      <circle cx="12" cy="12" r="12" fill="#191919" />
      <rect x="7" y="7" width="10" height="10" rx="3" stroke="#fff" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2.6" stroke="#fff" strokeWidth="1.3" />
      <circle cx="15.2" cy="8.8" r="0.6" fill="#fff" />
    </svg>
  );
}

/** Contact page social badge — Telegram (node 77:451). */
export function TelegramIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg {...socialBase(size)} {...props}>
      <circle cx="12" cy="12" r="12" fill="#191919" />
      <path d="m7 12.3 10-3.8-1.7 9.2-2.9-2.2-1.5 1.5-.3-2.6L15 10l-6.2 3.4Z" fill="#fff" />
    </svg>
  );
}

/** Contact page social badge — WhatsApp (node 77:453). */
export function WhatsAppIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg {...socialBase(size)} {...props}>
      <circle cx="12" cy="12" r="12" fill="#191919" />
      <path
        d="M12 6.5a5.5 5.5 0 0 0-4.7 8.36L6.5 17.5l2.72-.78A5.5 5.5 0 1 0 12 6.5Z"
        stroke="#fff"
        strokeWidth="1.3"
      />
      <path d="M9.8 10.2c.2.9 1.1 2.2 2 2.6.3.13.5 0 .7-.2l.4-.5.9.4v.9c0 .3-.3.6-.6.6-1.6.1-3.7-1.6-4-3.5 0-.3.1-.6.4-.7l.9-.4Z" fill="#fff" />
    </svg>
  );
}
