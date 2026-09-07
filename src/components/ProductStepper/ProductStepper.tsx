import { MinusIcon, PlusIcon } from '../Icon';

export type ProductStepperProps = {
  /** e.g. "Size" — the file shows this pattern used for a size selector; it works equally for quantity. */
  label: string;
  value: number | string;
  onDecrement?: () => void;
  onIncrement?: () => void;
  className?: string;
};

/**
 * From "Frame 427318186" (variant Variant2) on the Product Page — a dark
 * row pairing a label with a stepper control. Only the decrement
 * (`minus-sign`) instance was found bound in the file; the increment control
 * is inferred as symmetric — confirm with design if an increment icon exists
 * that differs from this.
 */
export function ProductStepper({ label, value, onDecrement, onIncrement, className }: ProductStepperProps) {
  return (
    <div
      className={[
        'flex w-[264.5px] items-center justify-between bg-[#141414] px-6 py-[10px] text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="font-ui text-ui">{label}</span>
      <div className="flex items-center gap-4">
        <button type="button" onClick={onDecrement} aria-label={`Decrease ${label.toLowerCase()}`}>
          <MinusIcon size={24} />
        </button>
        <span className="font-ui text-ui min-w-[1.5ch] text-center">{value}</span>
        <button type="button" onClick={onIncrement} aria-label={`Increase ${label.toLowerCase()}`}>
          <PlusIcon size={24} />
        </button>
      </div>
    </div>
  );
}
