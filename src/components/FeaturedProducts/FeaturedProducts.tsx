import { useRef, type ElementType } from 'react';
import { DiamondIcon } from '../Icon';
import { TextLink } from '../TextLink';
import { CarouselButton } from '../CarouselButton';
import { ProductCard, type ProductCardProps } from '../ProductCard';

export type FeaturedProductsProps = {
  heading: string;
  body: string;
  ctaHref: string;
  ctaLabel?: string;
  eyebrow?: string;
  products: Omit<ProductCardProps, 'linkComponent'>[];
  linkComponent?: ElementType;
  className?: string;
};

/**
 * Home's "Featured Products" section (node 64:4765) — a sidebar (eyebrow,
 * heading, intro copy, CTA) beside a horizontally-scrolling row of
 * `ProductCard`s with prev/next controls. The sampled file shows two real
 * products repeated ("ORGC Traditions Crewneck [Grey]", "The Fur Shirt") —
 * pass real distinct products via `products`, that repetition wasn't a
 * deliberate pattern.
 */
export function FeaturedProducts({
  heading,
  body,
  ctaHref,
  ctaLabel = 'Explore the Collection',
  eyebrow = 'Featured Products',
  products,
  linkComponent,
  className,
}: FeaturedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 463, behavior: 'smooth' }); // 447px card + 16px gap
  };

  return (
    <div className={['flex flex-col gap-[60px] py-[120px] pl-[80px]', className].filter(Boolean).join(' ')}>
      <div className="flex items-center justify-center gap-3">
        <DiamondIcon size={20} className="text-tertiary-200" />
        <span className="font-ui text-cream-tint text-xl font-medium">{eyebrow}</span>
      </div>

      <div className="flex items-start gap-[88px]">
        <div className="flex w-[359px] shrink-0 flex-col gap-14 text-white">
          <div className="flex flex-col gap-12">
            <h2 className="font-display text-heading">{heading}</h2>
            <p className="font-ui text-body">{body}</p>
          </div>
          <TextLink href={ctaHref} linkComponent={linkComponent}>
            {ctaLabel}
          </TextLink>
          <div className="flex gap-6">
            <CarouselButton direction="prev" onClick={() => scrollByCard(-1)} className="border-white/50" />
            <CarouselButton direction="next" onClick={() => scrollByCard(1)} />
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pr-[80px] [scrollbar-width:none]">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} linkComponent={linkComponent} />
          ))}
        </div>
      </div>
    </div>
  );
}
