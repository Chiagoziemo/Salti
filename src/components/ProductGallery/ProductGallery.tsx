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
  className?: string;
};

/**
 * Product Page image gallery (node 70:5927): a fixed 4-tile masonry —
 * large / two-medium-row / large — each tile on a dark `product-surface`
 * ground with the photo centered and cropped square. Every tile used the
 * same photo in the sampled file; treat that as placeholder repetition, not
 * a rule — pass distinct images once real product photography exists.
 */
export function ProductGallery({ alt, topImage, leftImage, rightImage, bottomImage, className }: ProductGalleryProps) {
  return (
    <div className={['flex flex-col gap-4', className].filter(Boolean).join(' ')}>
      <div className="flex h-[795px] items-center justify-center bg-product-surface">
        <img src={topImage} alt={alt} className="h-[464px] w-[464px] object-cover" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-[397.5px] flex-1 items-center justify-center bg-product-surface">
          <img src={leftImage} alt="" className="h-[232px] w-[232px] object-cover" />
        </div>
        <div className="flex h-[397.5px] flex-1 items-center justify-center bg-product-surface">
          <img src={rightImage} alt="" className="h-[232px] w-[232px] object-cover" />
        </div>
      </div>
      <div className="flex h-[795px] items-center justify-center bg-product-surface">
        <img src={bottomImage ?? topImage} alt="" className="h-[464px] w-[464px] object-cover" />
      </div>
    </div>
  );
}
