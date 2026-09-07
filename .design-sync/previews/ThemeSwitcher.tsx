import { useState } from 'react';
import { ThemeSwitcher, type Theme } from '@salti/design-system';

export function Interactive() {
  const [theme, setTheme] = useState<Theme>('dark');
  return (
    <div style={{ padding: 24 }}>
      <ThemeSwitcher value={theme} onChange={setTheme} />
    </div>
  );
}

export function GoldSelected() {
  return (
    <div style={{ padding: 24 }}>
      <ThemeSwitcher value="gold" onChange={() => {}} />
    </div>
  );
}

export function ForestSelected() {
  return (
    <div style={{ padding: 24 }}>
      <ThemeSwitcher value="forest" onChange={() => {}} />
    </div>
  );
}
