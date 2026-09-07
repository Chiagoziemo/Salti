import { Footer } from '@salti/design-system';

const Logo = () => <span style={{ color: 'white', fontWeight: 700, fontFamily: 'serif' }}>Salti</span>;

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
  return <Footer logo={<Logo />} columns={columns} copyright="© 2026 Salti. All rights reserved." />;
}

export function Compact() {
  return (
    <Footer variant="compact" logo={<Logo />} columns={columns} copyright="© 2026 Salti. All rights reserved." />
  );
}
