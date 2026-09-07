import { useState } from 'react';
import { MinusIcon } from '../Icon';

export type SizeSelectorProps = {
  sizes: string[];
  value: string;
  onChange: (size: string) => void;
  /** Label on the collapse-toggle bar under the list, e.g. "Size". */
  label?: string;
  className?: string;
};

/**
 * Product Page size picker (node 70:5793): a vertical list of size rows with
 * the selected row highlighted, plus a labeled collapse-toggle bar
 * underneath (node 70:5863, "Frame 427318186"). Previously modeled as a
 * quantity +/- stepper — that was wrong. There's no plus icon anywhere in
 * the file; the minus icon here is a collapse affordance, not a decrement.
 */
export function SizeSelector({ sizes, value, onChange, label = 'Size', className }: SizeSelectorProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={className}>
      {open && (
        <div className="flex w-full flex-col bg-product-surface">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => onChange(size)}
              aria-pressed={value === size}
              className={[
                'px-4 py-2 text-left font-ui text-ui text-white',
                value === size ? 'bg-product-surface-selected' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {size}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-[264.5px] items-center justify-between bg-product-surface px-6 py-[10px] text-white"
      >
        <span className="font-ui text-ui">{label}</span>
        <MinusIcon size={24} />
      </button>
    </div>
  );
}
