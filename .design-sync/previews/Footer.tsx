import { Footer, THEME_CLASSES, type Theme } from '@salti/design-system';

const Logo = ({ theme }: { theme: Theme }) => (
  <span className={`font-display font-bold ${THEME_CLASSES[theme].text}`}>Salti</span>
);

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'New arrivals', href: '#' },
      { label: 'Collections', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

export function Default() {
  return <Footer logo={<Logo theme="dark" />} columns={columns} copyright="© 2026 Salti. All rights reserved." />;
}

export function Compact() {
  return (
    <Footer
      variant="compact"
      logo={<Logo theme="dark" />}
      columns={columns}
      copyright="© 2026 Salti. All rights reserved."
    />
  );
}

export function GoldTheme() {
  return (
    <Footer
      theme="gold"
      logo={<Logo theme="gold" />}
      columns={columns}
      copyright="© 2026 Salti. All rights reserved."
    />
  );
}

export function ForestTheme() {
  return (
    <Footer
      theme="forest"
      logo={<Logo theme="forest" />}
      columns={columns}
      copyright="© 2026 Salti. All rights reserved."
    />
  );
}
