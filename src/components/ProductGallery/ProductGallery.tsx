import { THEME_CLASSES, type Theme } from '../../theme';

export type ProductGalleryProps = {
  alt: string;
  /** Full-width hero tile. */
  topImage: string;
  /** Left tile in the middle two-up row. */
  leftImage: string;
  /** Right tile in the middle two-up row. */
  rightImage: string;
  /** Closing full-width tile — defaults to `topImage` if omitted. */
  bottomImage?: string;
  /**
   * Confirmed the tile ground changes per theme (dark `#141414`, gold
   * `#ffd58b` — matching gold's accent stripe exactly). Forest is inferred
   * to match its own accent stripe, not directly sampled — see
   * DESIGN_SYSTEM.md. Defaults to `dark`.
   */
  theme?: Theme;
  className?: string;
};

/**
 * Product Page image gallery (node 70:5927, 79:1355 on gold): a fixed
 * 4-tile masonry — large / two-medium-row / large — with the photo
 * centered and cropped square. Every tile used the same photo in the
 * sampled file; treat that as placeholder repetition, not a rule — the
 * demo now passes 4 distinct real campaign shots (see `demo/pages/Product.tsx`)
 * instead of repeating one stock cutout.
 */
export function ProductGallery({ alt, topImage, leftImage, rightImage, bottomImage, theme = 'dark', className }: ProductGalleryProps) {
  const surface = THEME_CLASSES[theme].gallerySurface;

  return (
    <div className={['flex flex-col gap-4', className].filter(Boolean).join(' ')}>
      <div className={['flex h-[360px] items-center justify-center sm:h-[520px] lg:h-[795px]', surface].join(' ')}>
        <img src={topImage} alt={alt} className="h-[58%] w-[58%] object-cover" />
      </div>
      <div className="flex items-center gap-4">
        <div className={['flex h-[180px] flex-1 items-center justify-center sm:h-[260px] lg:h-[397.5px]', surface].join(' ')}>
          <img src={leftImage} alt="" className="h-[58%] w-[58%] object-cover" />
        </div>
        <div className={['flex h-[180px] flex-1 items-center justify-center sm:h-[260px] lg:h-[397.5px]', surface].join(' ')}>
          <img src={rightImage} alt="" className="h-[58%] w-[58%] object-cover" />
        </div>
      </div>
      <div className={['flex h-[360px] items-center justify-center sm:h-[520px] lg:h-[795px]', surface].join(' ')}>
        <img src={bottomImage ?? topImage} alt="" className="h-[58%] w-[58%] object-cover" />
      </div>
    </div>
  );
}
