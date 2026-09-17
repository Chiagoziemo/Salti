import { DiamondIcon } from '../Icon';

export type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * Infinite scrolling ticker (node 78:514 on Home, 81:3899 on Contact —
 * identical content and styling on both). The Project Inspo brief
 * documents this explicitly: "All five brand lines scrolling continuously.
 * Pauses on hover." Scroll speed itself isn't in the file — tuned for
 * readability, not sourced.
 *
 * Renders `items` twice back-to-back and animates a translateX(-50%) loop,
 * the standard seamless-marquee technique — matches what Figma's own
 * duplicated layer content implies.
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={['group overflow-hidden bg-marquee-bg py-4', className].filter(Boolean).join(' ')}>
      <div className="flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 font-ui text-2xl font-medium text-marquee-text">
            {item}
            <DiamondIcon size={20} className="text-tertiary-200" />
          </span>
        ))}
      </div>
    </div>
  );
}
