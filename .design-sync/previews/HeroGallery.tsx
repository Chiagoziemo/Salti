import { HeroGallery } from '@salti/design-system';

// Neutral placeholders — the demo app uses real campaign photography from
// public/images/, which isn't available in this isolated capture context.
const swatch = (fill: string) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="576"><rect width="1280" height="576" fill="${fill}"/></svg>`,
  );

export function Default() {
  return (
    <HeroGallery
      images={[
        { src: swatch('#3a5448'), alt: 'Placeholder — slide one' },
        { src: swatch('#21322a'), alt: 'Placeholder — slide two' },
      ]}
    />
  );
}

export function SingleImage() {
  return <HeroGallery images={[{ src: swatch('#524b1f'), alt: 'Placeholder — single slide' }]} />;
}
