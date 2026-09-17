import { ChevronLeftIcon, ChevronRightIcon } from '../Icon';

export type CarouselButtonProps = {
  direction: 'prev' | 'next';
  onClick: () => void;
  className?: string;
};

/**
 * The circular blurred-glass chevron button used for every carousel in the
 * file (Home hero gallery, Featured Products) — nodes 78:550/78:553,
 * 64:4789/64:4792. `next` has a fully opaque white border; `prev` is
 * dimmed to 50% — a real, if subtle, distinction in the source.
 */
export function CarouselButton({ direction, onClick, className }: CarouselButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      className={[
        'flex h-11 w-[56px] items-center justify-center rounded-full border-2 bg-white/20 text-white backdrop-blur-md sm:h-14 sm:w-[72px]',
        direction === 'prev' ? 'border-white/50' : 'border-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {direction === 'prev' ? <ChevronLeftIcon size={24} /> : <ChevronRightIcon size={24} />}
    </button>
  );
}
