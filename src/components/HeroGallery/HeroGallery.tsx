import { useState } from 'react';
import { CarouselButton } from '../CarouselButton';

export type HeroGalleryProps = {
  images: {
    src: string;
    alt: string;
    /**
     * CSS `object-position`, defaulting to `top`. Most campaign photos are
     * standing/close-up shots where the subject sits near the top of the
     * frame, so `top` crops correctly; a few are seated with the subject
     * lower in frame (e.g. on a low ottoman) — those need an explicit
     * override (e.g. `"center 30%"`) or `object-top` crops down to empty
     * wall/floor above the subject at the wide desktop aspect ratio.
     */
    focus?: string;
  }[];
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
 *
 * Sized with `aspect-ratio` (not fixed breakpoint heights) so the crop
 * scales continuously with viewport width instead of jumping between a
 * few fixed pixel heights — a taller, more forgiving ratio on narrow
 * screens where the container is also narrow, widening toward the
 * desktop banner ratio, capped by `max-h` so it never grows past the
 * original 576px design height on very wide screens.
 */
export function HeroGallery({ images, collectionLabel = 'Collection 01', viewHref = '#', className }: HeroGalleryProps) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const current = images[index];

  return (
    <div
      className={[
        'relative aspect-[4/5] w-full max-h-[576px] overflow-hidden bg-product-surface sm:aspect-[16/10] lg:aspect-[21/9]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img
        src={current.src}
        alt={current.alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: current.focus ?? 'top' }}
      />

      <div className="absolute left-4 top-5 flex flex-col items-center gap-8 text-white sm:left-[43px] sm:top-[58px] sm:gap-16">
        <span className="rotate-90 whitespace-nowrap font-ui text-base sm:text-2xl">{collectionLabel}</span>
        <a href={viewHref} className="font-ui text-sm">
          → View
        </a>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex w-[calc(100%-32px)] max-w-[1356px] -translate-x-1/2 items-center justify-between">
          <CarouselButton direction="prev" onClick={prev} />
          <CarouselButton direction="next" onClick={next} />
        </div>
      )}
    </div>
  );
}
