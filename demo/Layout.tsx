import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav, Footer, AnnouncementBar, ThemeSwitcher, Logo, THEME_CLASSES, type Theme } from '../src';
import { RouterLink } from './RouterLink';
import { cartCount, type CartItem } from './cart';

export type OutletContext = {
  theme: Theme;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (key: string) => void;
};

/**
 * Shared page chrome. Nav/Footer/AnnouncementBar are the only theme-aware
 * components, and the page background itself is the current theme's `bg`
 * (confirmed: in Figma the theme is a whole-page canvas color, not just a
 * hero section) — so all three live here once, not per-page. `theme` (and
 * cart state — see `demo/cart.ts`) is passed to page content via Outlet
 * context since some page sections (Collection Grid's logo, Product
 * Page's gallery, Cart) need them too.
 */
export default function Layout() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [cart, setCart] = useState<CartItem[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const t = THEME_CLASSES[theme];

  const addToCart: OutletContext['addToCart'] = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.key === item.key);
      if (existing) {
        return prev.map((i) => (i.key === item.key ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart: OutletContext['removeFromCart'] = (key) => {
    setCart((prev) => prev.filter((i) => i.key !== key));
  };

  const items = [
    { label: 'home', href: '/', active: location.pathname === '/' },
    { label: 'about', href: '/about', active: location.pathname === '/about' },
    { label: 'contact', href: '/contact', active: location.pathname === '/contact' },
  ];

  return (
    <div className={`flex min-h-screen flex-col ${t.bg} ${t.text}`}>
      <AnnouncementBar theme={theme}>• Free Shipping in Lagos, Nigeria •</AnnouncementBar>
      <Nav
        theme={theme}
        logo={<Logo theme={theme} />}
        items={items}
        cartCount={cartCount(cart)}
        onCartClick={() => navigate('/cart')}
        linkComponent={RouterLink}
      />
      <div className="flex justify-end px-4 pb-4 sm:px-6 md:px-10 lg:px-[80px]">
        <ThemeSwitcher value={theme} onChange={setTheme} />
      </div>

      <main className="flex-1">
        <Outlet context={{ theme, cart, addToCart, removeFromCart } satisfies OutletContext} />
      </main>

      <Footer
        theme={theme}
        logo={<Logo theme={theme} />}
        linkComponent={RouterLink}
        copyright={`© ${new Date().getFullYear()} Salti. All rights reserved.`}
        columns={[
          {
            title: 'Shop',
            links: [
              { label: 'Shop', href: '/product' },
              { label: 'Collection 01', href: '/product' },
              { label: 'All Pieces', href: '/product' },
            ],
          },
          {
            title: 'About',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Our story', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Instagram', href: '#' },
              { label: 'Tiktok', href: '#' },
              { label: 'Email', href: 'mailto:hello@Salti.com' },
            ],
          },
        ]}
      />
    </div>
  );
}
