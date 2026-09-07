import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowForwardIcon } from '../Icon';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /**
   * Only `primary` is confirmed against the file — it matches the hand-built
   * "Shop Our Collection" CTA on the Home page. The file also contains a
   * `button_default` component, but every instance of it is hidden, so its
   * styling isn't a reliable source — see DESIGN_SYSTEM.md.
   */
  variant?: 'primary';
  /** Shows the trailing arrow used on the Home page CTA. Off by default. */
  withArrow?: boolean;
};

export function Button({ children, variant = 'primary', withArrow = false, className, ...props }: ButtonProps) {
  void variant; // only one variant exists today; kept explicit for when `alt` styling is confirmed
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-[10px]',
        'bg-theme-background text-primary-700',
        'px-4 py-[10px]',
        'font-ui text-ui',
        'transition-opacity hover:opacity-80',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowForwardIcon size={24} />}
    </button>
  );
}
