import type { ElementType } from 'react';
import { TextLink } from '../TextLink';

export type BrandStoryProps = {
  image: string;
  alt: string;
  heading: string;
  body: string;
  ctaHref: string;
  ctaLabel?: string;
  linkComponent?: ElementType;
  className?: string;
};

/**
 * Home's full-bleed brand-story section (node 64:4870) — background photo
 * under a flat 50%-black overlay, with a left-aligned text block on top.
 */
export function BrandStory({
  image,
  alt,
  heading,
  body,
  ctaHref,
  ctaLabel = 'Explore the Collection',
  linkComponent,
  className,
}: BrandStoryProps) {
  return (
    <div
      className={[
        'relative flex items-center overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-[80px] lg:py-[80px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex w-full max-w-[606px] flex-col gap-8 text-white lg:gap-12">
        <h2 className="font-display text-heading">{heading}</h2>
        <p className="font-ui text-detail">{body}</p>
        <TextLink href={ctaHref} size="sm" linkComponent={linkComponent} className="w-fit backdrop-blur-[5px]">
          {ctaLabel}
        </TextLink>
      </div>
    </div>
  );
}
