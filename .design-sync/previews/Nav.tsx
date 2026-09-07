import { Nav } from '@salti/design-system';

const Logo = () => <span style={{ color: 'white', fontWeight: 700, fontFamily: 'serif' }}>Salti</span>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: '#0a130f', padding: '24px 0' }}>{children}</div>
);

export function Default() {
  return (
    <Stage>
      <Nav
        logo={<Logo />}
        items={[
          { label: 'home', href: '#', active: true },
          { label: 'about', href: '#' },
          { label: 'contact', href: '#' },
        ]}
        cartCount={2}
      />
    </Stage>
  );
}

export function AboutActive() {
  return (
    <Stage>
      <Nav
        logo={<Logo />}
        items={[
          { label: 'home', href: '#' },
          { label: 'about', href: '#', active: true },
          { label: 'contact', href: '#' },
        ]}
      />
    </Stage>
  );
}
