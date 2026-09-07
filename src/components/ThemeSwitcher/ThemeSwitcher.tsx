import { THEME_ORDER, THEME_LABELS, THEME_SWATCH_CLASS, type Theme } from '../../theme';

export type ThemeSwitcherProps = {
  value: Theme;
  onChange: (theme: Theme) => void;
  className?: string;
};

/**
 * Matches the 3-dot theme control found in the Home page nav (Figma nodes
 * 79:2080 / 79:1902 cluster) — one swatch dot per real site theme, with a
 * ring on the active dot. Order is gold, dark, forest, matching the source.
 */
export function ThemeSwitcher({ value, onChange, className }: ThemeSwitcherProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Site theme"
      className={['flex items-center gap-2 rounded-[5px] border border-[#242222] bg-white p-1', className]
        .filter(Boolean)
        .join(' ')}
    >
      {THEME_ORDER.map((theme) => (
        <button
          key={theme}
          type="button"
          role="radio"
          aria-checked={value === theme}
          aria-label={THEME_LABELS[theme]}
          onClick={() => onChange(theme)}
          className={[
            'h-6 w-6 rounded-full border border-black/10',
            THEME_SWATCH_CLASS[theme],
            value === theme ? 'ring-2 ring-offset-1 ring-[#141414]' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      ))}
    </div>
  );
}
