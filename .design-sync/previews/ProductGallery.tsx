import { ProductGallery } from '@salti/design-system';

// Neutral placeholder — the real product photo is a Figma-exported asset
// that expires; this preview only needs to prove the 4-tile layout works.
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="464" height="464"><rect width="464" height="464" fill="#333"/><path d="M120 320 L200 220 L260 280 L340 180 L400 320 Z" fill="#555"/><circle cx="330" cy="140" r="30" fill="#555"/></svg>',
  );

export function Default() {
  return (
    <ProductGallery
      alt="Sample garment"
      topImage={PLACEHOLDER}
      leftImage={PLACEHOLDER}
      rightImage={PLACEHOLDER}
      bottomImage={PLACEHOLDER}
    />
  );
}
