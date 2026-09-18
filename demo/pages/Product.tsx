import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button, ColorSwatch, ProductGallery, SizeSelector, type Theme } from '../../src';

// Real Drive campaign photos standing in for product photography — the
// Figma source reuses one flat-lay stock cutout across all 4 gallery
// tiles (a placeholder, not a rule; see DESIGN_SYSTEM.md). The full Drive
// folder turned out to have 4 real colorways of the same co-ord (white,
// sage, black, rust — see .design-sync/NOTES.md), so each is wired up as
// a real, photographed color variant instead of one static gallery.
const PRODUCT_COLORS = [
  {
    key: 'white',
    label: 'White',
    swatch: '#efece4',
    gallery: {
      top: '/images/IMG_0070.jpg',
      left: '/images/IMG_0025.jpg',
      right: '/images/IMG_0018.jpg',
      bottom: '/images/IMG_0126.jpg',
    },
  },
  {
    key: 'sage',
    label: 'Sage',
    swatch: '#a7ad97',
    gallery: {
      top: '/images/IMG_0451.jpg',
      left: '/images/IMG_0469.jpg',
      right: '/images/IMG_0481.jpg',
      bottom: '/images/IMG_0452.jpg',
    },
  },
  {
    key: 'black',
    label: 'Black',
    swatch: '#1a1a1a',
    gallery: {
      top: '/images/IMG_0209.jpg',
      left: '/images/IMG_0201.jpg',
      right: '/images/IMG_0224.jpg',
      bottom: '/images/IMG_0242.jpg',
    },
  },
  {
    key: 'rust',
    label: 'Rust',
    swatch: '#a3672f',
    gallery: {
      top: '/images/IMG_0188.jpg',
      left: '/images/IMG_0182.jpg',
      right: '/images/IMG_0166.jpg',
      bottom: '/images/IMG_0186.jpg',
    },
  },
];

export default function Product() {
  const [size, setSize] = useState('2XL');
  const [colorKey, setColorKey] = useState(PRODUCT_COLORS[0].key);
  const { theme } = useOutletContext<{ theme: Theme }>();

  const color = PRODUCT_COLORS.find((c) => c.key === colorKey) ?? PRODUCT_COLORS[0];

  return (
    <div className="flex flex-col gap-10 px-4 pb-10 pt-8 sm:px-6 md:px-10 lg:px-[80px] lg:pb-[55px] lg:pt-[80px] xl:flex-row">
      <div className="w-full xl:w-[45%] xl:max-w-[728px] xl:shrink-0">
        <ProductGallery
          alt={`Salti campaign photography — ORGC Traditions Crewneck in ${color.label}`}
          topImage={color.gallery.top}
          leftImage={color.gallery.left}
          rightImage={color.gallery.right}
          bottomImage={color.gallery.bottom}
          theme={theme}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-[56px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="font-display text-product-title flex-1">
              ORGC Traditions
              <br />
              Crewneck [{color.label}]
            </h1>
            <p className="font-display text-price whitespace-nowrap">₦40,000</p>
          </div>
          <p className="font-ui text-body">
            An oversized, drop-shoulder crewneck sweatshirt crafted from premium heavyweight cotton fleece. Finished
            with a vintage pigment wash for a worn-in character, subtle embroidered branding, and ribbed trims
            throughout. Designed with a relaxed silhouette that balances comfort, structure, and everyday
            versatility.
          </p>
          <ColorSwatch options={PRODUCT_COLORS} value={colorKey} onChange={setColorKey} />
        </div>

        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-end sm:gap-6">
          <SizeSelector sizes={['S', 'M', 'L', 'XL', '2XL']} value={size} onChange={setSize} />
          <Button withArrow className="flex-1">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
