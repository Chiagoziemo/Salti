import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button, ProductGallery, SizeSelector, type Theme } from '../../src';

// Real Drive campaign photos standing in for product photography — the
// Figma source reuses one flat-lay stock cutout across all 4 gallery
// tiles (a placeholder, not a rule; see DESIGN_SYSTEM.md), so this uses 4
// distinct real campaign shots instead of repeating a single stock image.
const GALLERY_TOP = '/images/IMG_0070.jpg';
const GALLERY_LEFT = '/images/IMG_0025.jpg';
const GALLERY_RIGHT = '/images/IMG_0018.jpg';
const GALLERY_BOTTOM = '/images/IMG_0126.jpg';

export default function Product() {
  const [size, setSize] = useState('2XL');
  const { theme } = useOutletContext<{ theme: Theme }>();

  return (
    <div className="flex flex-col gap-10 px-4 pb-10 pt-8 sm:px-6 md:px-10 lg:px-[80px] lg:pb-[55px] lg:pt-[80px] xl:flex-row">
      <div className="w-full xl:w-[45%] xl:max-w-[728px] xl:shrink-0">
        <ProductGallery
          alt="Salti campaign photography — ORGC Traditions Crewneck styling references"
          topImage={GALLERY_TOP}
          leftImage={GALLERY_LEFT}
          rightImage={GALLERY_RIGHT}
          bottomImage={GALLERY_BOTTOM}
          theme={theme}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-[56px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="font-display text-product-title flex-1">
              ORGC Traditions
              <br />
              Crewneck [Burgundy]
            </h1>
            <p className="font-display text-price whitespace-nowrap">₦40,000</p>
          </div>
          <p className="font-ui text-body">
            An oversized, drop-shoulder crewneck sweatshirt crafted from premium heavyweight cotton fleece. Finished
            with a vintage pigment wash for a worn-in character, subtle embroidered branding, and ribbed trims
            throughout. Designed with a relaxed silhouette that balances comfort, structure, and everyday
            versatility.
          </p>
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
