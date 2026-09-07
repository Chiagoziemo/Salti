import { useState } from 'react';
import { Nav, Button, ProductStepper, Footer } from '../src';

function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`font-display text-xl font-bold ${dark ? 'text-white' : 'text-primary-700'}`}>Salti</span>
  );
}

export default function App() {
  const [size, setSize] = useState(2);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="min-h-screen bg-theme-background">
      <section className="relative overflow-hidden bg-primary-700">
        <Nav
          logo={<LogoMark dark />}
          items={[
            { label: 'home', href: '#', active: true },
            { label: 'about', href: '#' },
            { label: 'contact', href: '#' },
          ]}
          cartCount={0}
        />

        <div className="flex items-center justify-between px-[80px] py-[112px]">
          <h1 className="font-display text-display max-w-[520px] text-white">
            Some clothes you wear,
            <br />
            Salti you are.
          </h1>
          <Button withArrow>Shop Our Collection</Button>
        </div>
      </section>

      <section className="px-[80px] py-[112px]">
        <h2 className="font-display mb-6 text-3xl text-primary-700">Product</h2>
        <ProductStepper label={`Size — ${sizes[size]}`} value={sizes[size]} onDecrement={() => setSize((s) => Math.max(0, s - 1))} onIncrement={() => setSize((s) => Math.min(sizes.length - 1, s + 1))} />
      </section>

      <Footer
        logo={<LogoMark dark />}
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
