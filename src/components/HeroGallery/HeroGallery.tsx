import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icon';

export type HeroGalleryProps = {
  images: { src: string; alt: string }[];
  collectionLabel?: string;
  viewHref?: string;
  className?: string;
};

/**
 * Home hero's lifestyle photo panel (node 78:535 / 79:3806) — full-bleed
 * image, a rotated "Collection 01" label, a "→ View" link, and circular
 * prev/next controls. Source photography is portrait-oriented (campaign
 * shoot) against a wide landscape slot, so it crops with `object-top` to
 * favor faces over cropping tight on the torso — a deliberate compromise,
 * not a Figma spec.
 */
export function HeroGallery({ images, collectionLabel = 'Collection 01', viewHref = '#', className }: HeroGalleryProps) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const current = images[index];

  return (
    <div className={['relative h-[576px] w-full overflow-hidden bg-product-surface', className].filter(Boolean).join(' ')}>
      <img src={current.src} alt={current.alt} className="absolute inset-0 h-full w-full object-cover object-top" />

      <div className="absolute left-[43px] top-[58px] flex flex-col items-center gap-16 text-white">
        <span className="rotate-90 whitespace-nowrap font-ui text-2xl">{collectionLabel}</span>
        <a href={viewHref} className="font-ui text-sm">
          → View
        </a>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex w-[calc(100%-32px)] max-w-[1356px] -translate-x-1/2 items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex h-14 w-[72px] items-center justify-center rounded-full border-2 border-white/50 bg-white/20 text-white backdrop-blur-md"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex h-14 w-[72px] items-center justify-center rounded-full border-2 border-white bg-white/20 text-white backdrop-blur-md"
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
