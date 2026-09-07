import { Nav, THEME_CLASSES, type Theme } from '@salti/design-system';

const Logo = ({ theme }: { theme: Theme }) => (
  <span className={`font-display font-bold ${THEME_CLASSES[theme].text}`}>Salti</span>
);

const items = [
  { label: 'home', href: '#', active: true },
  { label: 'about', href: '#' },
  { label: 'contact', href: '#' },
];

function Stage({ theme }: { theme: Theme }) {
  const t = THEME_CLASSES[theme];
  return (
    <div className={`${t.bg} py-6`}>
      <Nav theme={theme} logo={<Logo theme={theme} />} items={items} cartCount={2} />
    </div>
  );
}

export function DarkTheme() {
  return <Stage theme="dark" />;
}

export function GoldTheme() {
  return <Stage theme="gold" />;
}

export function ForestTheme() {
  return <Stage theme="forest" />;
}
