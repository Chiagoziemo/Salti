import { useState } from 'react';
import { Nav, Button, ProductStepper, Footer, ThemeSwitcher, THEME_CLASSES, type Theme } from '../src';

function LogoMark({ theme }: { theme: Theme }) {
  return <span className={`font-display text-xl font-bold ${THEME_CLASSES[theme].text}`}>Salti</span>;
}

export default function App() {
  const [size, setSize] = useState(2);
  const [theme, setTheme] = useState<Theme>('dark');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const t = THEME_CLASSES[theme];

  return (
    <div className="min-h-screen bg-theme-background">
      <section className={`relative overflow-hidden ${t.bg}`}>
        <Nav
          theme={theme}
          logo={<LogoMark theme={theme} />}
          items={[
            { label: 'home', href: '#', active: true },
            { label: 'about', href: '#' },
            { label: 'contact', href: '#' },
          ]}
          cartCount={0}
        />

        <div className="flex items-center justify-between px-[80px] pb-[112px] pt-4">
          <h1 className={`font-display text-display max-w-[520px] ${t.text}`}>
            Some clothes you wear,
            <br />
            Salti you are.
          </h1>
          <div className="flex flex-col items-end gap-6">
            <ThemeSwitcher value={theme} onChange={setTheme} />
            <Button withArrow>Shop Our Collection</Button>
          </div>
        </div>
      </section>

      <section className="px-[80px] py-[112px]">
        <h2 className="font-display mb-6 text-3xl text-primary-700">Product</h2>
        <ProductStepper
          label={`Size — ${sizes[size]}`}
          value={sizes[size]}
          onDecrement={() => setSize((s) => Math.max(0, s - 1))}
          onIncrement={() => setSize((s) => Math.min(sizes.length - 1, s + 1))}
        />
      </section>

      <Footer
        theme={theme}
        logo={<LogoMark theme={theme} />}
        copyright={`© ${new Date().getFullYear()} Salti. All rights reserved.`}
        columns={[
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
        ]}
      />
    </div>
  );
}
