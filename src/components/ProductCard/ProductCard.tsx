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
    <div className={['flex w-[447px] shrink-0 flex-col gap-[41px]', className].filter(Boolean).join(' ')}>
      <div className="flex h-[621px] items-center justify-center bg-product-surface">
        <img src={image} alt={alt} className="h-[464px] w-[464px] object-cover" />
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
