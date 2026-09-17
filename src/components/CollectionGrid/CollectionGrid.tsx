import type { ElementType } from 'react';
import { Logo } from '../Logo';
import type { Theme } from '../../theme';

export type CollectionGridItem = {
  src: string;
  alt: string;
  href: string;
};

export type CollectionGridProps = {
  statement: string;
  items: CollectionGridItem[];
  /** For the centered logo mark's color — see `Logo`. */
  theme?: Theme;
  collectionLabel?: string;
  linkComponent?: ElementType;
  className?: string;
};

/**
 * Home's brand-statement + 3-image grid (node 20:2891). Each tile shows the
 * rotated "Collection 01" label and "→ View" link at rest; hovering reveals
 * a frosted-glass "View" overlay — Figma's file froze that hover state
 * permanently on one tile rather than showing the resting state, so this
 * makes it a real `:hover` instead, applied uniformly to every tile.
 */
export function CollectionGrid({
  statement,
  items,
  theme = 'dark',
  collectionLabel = 'Collection 01',
  linkComponent: LinkComponent = 'a',
  className,
}: CollectionGridProps) {
  return (
    <div className={['flex flex-col items-center gap-[80px] px-[80px] py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="flex flex-col items-center gap-[60px]">
        <p className="max-w-[684px] text-center font-ui text-statement text-white">{statement}</p>
        <Logo theme={theme} size={68} />
      </div>

      <div className="flex w-full items-stretch gap-4">
        {items.map((item, i) => (
          <LinkComponent key={item.src ?? i} href={item.href} className="group relative h-[576px] flex-1 overflow-hidden">
            <img src={item.src} alt={item.alt} className="absolute inset-0 h-full w-full object-cover" />

            <span className="absolute left-[43px] top-[58px] rotate-90 whitespace-nowrap font-ui text-2xl text-white">
              {collectionLabel}
            </span>
            <span className="absolute bottom-[101px] left-[43px] font-ui text-xs text-white">→ View</span>

            <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 backdrop-blur-[12.5px] transition-opacity duration-200 group-hover:opacity-100">
              <span className="font-ui text-4xl text-white">View</span>
            </div>
          </LinkComponent>
        ))}
      </div>
    </div>
  );
}
