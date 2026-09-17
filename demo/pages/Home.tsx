import { useOutletContext } from 'react-router-dom';
import {
  Button,
  HeroGallery,
  Marquee,
  CollectionGrid,
  FeaturedProducts,
  BrandStory,
  type Theme,
} from '../../src';
import { RouterLink } from '../RouterLink';

const HERO_IMAGES = [
  { src: '/images/IMG_0006.jpg', alt: 'Salti campaign — close portrait with a rose' },
  { src: '/images/IMG_0005.jpg', alt: 'Salti campaign — walking the hallway in white linen' },
  { src: '/images/IMG_0075.jpg', alt: 'Salti campaign — seated portrait in cream linen' },
  { src: '/images/IMG_0092.jpg', alt: 'Salti campaign — detail shot, watch and sunglasses' },
  { src: '/images/IMG_0118.jpg', alt: 'Salti campaign — both models together' },
];

const MARQUEE_ITEMS = ['Different by Design', 'Natural Fabrics Honest Design', 'Not made to fit in', 'Become the Exception'];

const COLLECTION_ITEMS = [
  { src: '/images/collection-01.jpg', alt: 'Collection 01 — braided hair, greenery backdrop', href: '/product' },
  { src: '/images/collection-02.jpg', alt: 'Collection 01 — seated portrait in cream linen, sunglasses in hand', href: '/product' },
  { src: '/images/collection-03.jpg', alt: 'Collection 01 — walking a marble hallway in white linen', href: '/product' },
];

const FEATURED_PRODUCTS = [
  {
    image: '/images/product-crewneck.png',
    alt: 'ORGC Traditions Crewneck, Grey',
    title: 'ORGC Traditions Crewneck [Grey]',
    price: '₦40,000',
    href: '/product',
  },
  {
    image: '/images/product-crewneck.png',
    alt: 'ORGC Traditions Crewneck, Grey',
    title: 'ORGC Traditions Crewneck [Grey]',
    price: '₦40,000',
    href: '/product',
  },
  {
    image: '/images/product-crewneck.png',
    alt: 'The Fur Shirt',
    title: 'The Fur Shirt',
    price: '₦40,000',
    href: '/product',
  },
  {
    image: '/images/product-crewneck.png',
    alt: 'The Fur Shirt',
    title: 'The Fur Shirt',
    price: '₦40,000',
    href: '/product',
  },
];

export default function Home() {
  const { theme } = useOutletContext<{ theme: Theme }>();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 px-4 pb-16 pt-4 sm:px-6 md:gap-10 md:px-10 md:pb-20 lg:gap-[45px] lg:px-[80px] lg:pb-[112px]">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-display text-display max-w-[520px]">
            Some clothes you wear,
            <br />
            Salti you are.
          </h1>
          <Button withArrow>Shop Our Collection</Button>
        </div>

        <HeroGallery images={HERO_IMAGES} viewHref="/product" />
      </div>

      <Marquee items={MARQUEE_ITEMS} />

      <CollectionGrid
        theme={theme}
        statement="Some clothes complete an outfit. The right ones become part of who you are. At SALTí, we craft timeless pieces from natural fabrics with intention, care, and uncompromising attention to detail."
        items={COLLECTION_ITEMS}
        linkComponent={RouterLink}
      />

      <FeaturedProducts
        heading="Every Piece begins with intention."
        body="How should clothing feel when nothing is forced? Collection 01 is our first answer- a study in natural fabrics, quiet confidence, and thoughtful construction"
        ctaHref="/product"
        products={FEATURED_PRODUCTS}
        linkComponent={RouterLink}
      />

      <BrandStory
        image="/images/brand-story.jpg"
        alt="Salti campaign — seated portrait in linen, hand raised to sunglasses"
        heading="Crafted with intention."
        body="At SALTí, every piece begins long before it is worn. From carefully selected natural fabrics to considered silhouettes, we believe the smallest details create the greatest difference."
        ctaHref="/product"
        linkComponent={RouterLink}
      />
    </div>
  );
}
