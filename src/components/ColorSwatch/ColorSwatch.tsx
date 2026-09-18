export type ColorSwatchOption = {
  /** Stable key, not shown — used for the selected-value comparison. */
  key: string;
  /** Shown as the accessible label and in a tooltip-like `title`. */
  label: string;
  /** CSS color for the dot — an approximate sample from the product photo, not a design token (see `ColorSwatch` docs). */
  swatch: string;
};

export type ColorSwatchProps = {
  options: ColorSwatchOption[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
};

/**
 * A row of selectable color dots for product color variants. Modeled on
 * `ThemeSwitcher`'s dot-button pattern (the closest Figma-sourced
 * precedent in this file), but this component itself isn't sourced from
 * Figma — the source file has no product color-variant UI anywhere. Add
 * one where a product genuinely has multiple photographed colorways
 * (see `demo/pages/Product.tsx`).
 */
export function ColorSwatch({ options, value, onChange, className }: ColorSwatchProps) {
  return (
    <div role="radiogroup" aria-label="Color" className={['flex items-center gap-3', className].filter(Boolean).join(' ')}>
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          role="radio"
          aria-checked={value === option.key}
          aria-label={option.label}
          title={option.label}
          onClick={() => onChange(option.key)}
          className={[
            'h-7 w-7 rounded-full border border-black/20',
            // `border-current` picks up the theme's own text color (white on
            // dark/forest, near-black on gold) so the selection ring reads
            // on every theme without hardcoding a color here.
            value === option.key ? 'ring-2 ring-offset-2 ring-offset-transparent ring-current' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ backgroundColor: option.swatch }}
        />
      ))}
    </div>
  );
}
