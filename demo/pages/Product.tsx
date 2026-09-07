import { useState } from 'react';
import { Button, ProductGallery, SizeSelector } from '../../src';

// Temporary — this is the actual sampled photo exported from Figma, but
// Figma's asset URLs expire after ~7 days. Replace with real product
// photography before shipping.
const PRODUCT_PHOTO = 'https://www.figma.com/api/mcp/asset/7a575e1f-b589-45bd-9f50-5000bb04d37e.png';

export default function Product() {
  const [size, setSize] = useState('2XL');

  return (
    <div className="flex items-start gap-10 px-[80px] pb-[55px] pt-[80px]">
      <div className="w-[728px] shrink-0">
        <ProductGallery alt="ORGC Traditions Crewneck, Burgundy" topImage={PRODUCT_PHOTO} leftImage={PRODUCT_PHOTO} rightImage={PRODUCT_PHOTO} />
      </div>

      <div className="flex flex-1 flex-col gap-[56px]">
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between gap-4">
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

        <div className="flex items-end gap-6">
          <SizeSelector sizes={['S', 'M', 'L', 'XL', '2XL']} value={size} onChange={setSize} />
          <Button withArrow className="flex-1">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
