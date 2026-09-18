import { useNavigate, useOutletContext } from 'react-router-dom';
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

// 4 real colorways were found in the full 100-photo Drive folder (white,
// sage, black, rust — see .design-sync/NOTES.md), so the Hero rotation,
// Collection Grid, and Featured Products below mix colors instead of
// showing white/cream in every single tile.
const HERO_IMAGES = [
  { src: '/images/IMG_0006.jpg', alt: 'Salti campaign — close portrait with a rose, in white' },
  { src: '/images/IMG_0005.jpg', alt: 'Salti campaign — walking the hallway, in white' },
  // Seated shots (subject lower in frame, on a low ottoman/couch) need a
  // lower focus point — object-top alone crops down to empty wall above
  // them at the wide desktop aspect ratio. See HeroGallery's `focus` prop.
  { src: '/images/IMG_0452.jpg', alt: 'Salti campaign — seated portrait, in sage', focus: 'center 65%' },
  { src: '/images/IMG_0201.jpg', alt: 'Salti campaign — standing portrait, in black', focus: 'center 22%' },
  { src: '/images/IMG_0188.jpg', alt: 'Salti campaign — seated portrait, in rust', focus: 'center 25%' },
];

const MARQUEE_ITEMS = ['Different by Design', 'Natural Fabrics Honest Design', 'Not made to fit in', 'Become the Exception'];

const COLLECTION_ITEMS = [
  { src: '/images/collection-01.jpg', alt: 'Collection 01 — braided hair, greenery backdrop, in white', href: '/product' },
  { src: '/images/collection-02.jpg', alt: 'Collection 01 — standing portrait with a rose, in black', href: '/product' },
  { src: '/images/collection-03.jpg', alt: 'Collection 01 — seated portrait, in rust', href: '/product' },
];

const FEATURED_PRODUCTS = [
  {
    image: '/images/IMG_0015.jpg',
    alt: 'Salti campaign — ORGC Traditions Crewneck styling reference, in white',
    title: 'ORGC Traditions Crewneck [White]',
    price: '₦40,000',
    href: '/product',
  },
  {
    image: '/images/IMG_0469.jpg',
    alt: 'Salti campaign — ORGC Traditions Crewneck styling reference, in sage',
    title: 'ORGC Traditions Crewneck [Sage]',
    price: '₦40,000',
    href: '/product',
  },
  {
    image: '/images/IMG_0192.jpg',
    alt: 'Salti campaign — The Fur Shirt styling reference, in black',
    title: 'The Fur Shirt [Black]',
    price: '₦40,000',
    href: '/product',
  },
  {
    image: '/images/IMG_0166.jpg',
    alt: 'Salti campaign — The Fur Shirt styling reference, in rust',
    title: 'The Fur Shirt [Rust]',
    price: '₦40,000',
    href: '/product',
  },
];

export default function Home() {
  const { theme } = useOutletContext<{ theme: Theme }>();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 px-4 pb-16 pt-4 sm:px-6 md:gap-10 md:px-10 md:pb-20 lg:gap-[45px] lg:px-[80px] lg:pb-[112px]">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-display text-display max-w-[520px]">
            Some clothes you wear,
            <br />
            Salti you are.
          </h1>
          <Button withArrow onClick={() => navigate('/product')}>
            Shop Our Collection
          </Button>
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
