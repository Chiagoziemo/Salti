import type { ElementType } from 'react';
import { TextLink } from '../TextLink';

export type ProductCardProps = {
  image: string;
  alt: string;
  title: string;
  price: string;
  href: string;
  linkComponent?: ElementType;
  className?: string;
};

/**
 * Featured Products carousel card (node 64:4847 and siblings) — dark tile,
 * garment photo, title, price (the smaller `price-sm` role — Product Page
 * itself uses the larger `price`), and a "View Piece" TextLink.
 */
export function ProductCard({ image, alt, title, price, href, linkComponent, className }: ProductCardProps) {
  return (
    <div className={['flex w-[260px] shrink-0 flex-col gap-6 sm:w-[340px] lg:w-[447px] lg:gap-[41px]', className].filter(Boolean).join(' ')}>
      <div className="flex h-[340px] items-center justify-center bg-product-surface sm:h-[440px] lg:h-[621px]">
        <img src={image} alt={alt} className="h-[70%] w-[70%] object-cover" />
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col gap-2 text-white">
          <p className="font-ui text-detail">{title}</p>
          <p className="font-display text-price-sm">{price}</p>
        </div>
        <TextLink href={href} size="sm" linkComponent={linkComponent}>
          View Piece
        </TextLink>
      </div>
    </div>
  );
}
