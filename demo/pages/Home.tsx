import { Link } from 'react-router-dom';
import { Button, HeroGallery } from '../../src';

// Real campaign photography (Drive folder "Melody collab", downloaded and
// optimized into public/images/) — same two-model linen-set shoot across
// every frame, so any subset reads as one coherent look.
const HERO_IMAGES = [
  { src: '/images/IMG_0006.jpg', alt: 'Salti campaign — close portrait with a rose' },
  { src: '/images/IMG_0005.jpg', alt: 'Salti campaign — walking the hallway in white linen' },
  { src: '/images/IMG_0075.jpg', alt: 'Salti campaign — seated portrait in cream linen' },
  { src: '/images/IMG_0092.jpg', alt: 'Salti campaign — detail shot, watch and sunglasses' },
  { src: '/images/IMG_0118.jpg', alt: 'Salti campaign — both models together' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-[45px] px-[80px] pb-[112px] pt-4">
      <div className="flex items-start justify-between">
        <h1 className="font-display text-display max-w-[520px]">
          Some clothes you wear,
          <br />
          Salti you are.
        </h1>
        <Button withArrow>Shop Our Collection</Button>
      </div>

      <HeroGallery images={HERO_IMAGES} viewHref="/product" />

      <Link to="/product" className="font-nav text-nav inline-block w-fit capitalize underline">
        View a product →
      </Link>
    </div>
  );
}
