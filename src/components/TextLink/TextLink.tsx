import type { ElementType, ReactNode } from 'react';
import { ArrowForwardIcon } from '../Icon';

export type TextLinkProps = {
  href: string;
  children: ReactNode;
  /** `lg` (18px, DM Sans Regular — "Explore the Collection") or `sm` (16px — "View Piece"). */
  size?: 'lg' | 'sm';
  /** Router-agnostic link injection — see `NavLinkComponent` for the pattern. */
  linkComponent?: ElementType;
  className?: string;
};

/**
 * The recurring underlined text-CTA pattern found on Featured Products,
 * Brand Story, and every product card ("Explore the Collection", "View
 * Piece") — DM Sans + trailing arrow + a hairline bottom border. Distinct
 * from `Button`, which is a filled pill used only for primary CTAs.
 */
export function TextLink({ href, children, size = 'lg', linkComponent: LinkComponent = 'a', className }: TextLinkProps) {
  return (
    <LinkComponent
      href={href}
      className={[
        'inline-flex items-center gap-[10px] border-b-[0.5px] border-text-link-border px-4 py-[10px] text-white',
        size === 'lg' ? 'font-ui text-body' : 'font-ui text-ui',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span>{children}</span>
      <ArrowForwardIcon size={24} />
    </LinkComponent>
  );
}
