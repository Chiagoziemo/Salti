import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav, Footer, ThemeSwitcher, Logo, THEME_CLASSES, type Theme } from '../src';
import { RouterLink } from './RouterLink';

/**
 * Shared page chrome. Nav/Footer are the only theme-aware components, and
 * the page background itself is the current theme's `bg` (confirmed: in
 * Figma the theme is a whole-page canvas color, not just a hero section) —
 * so both live here once, not per-page. `theme` is passed to page content
 * via Outlet context since some Home sections (Collection Grid's logo) are
 * theme-aware too.
 */
export default function Layout() {
  const [theme, setTheme] = useState<Theme>('dark');
  const location = useLocation();
  const t = THEME_CLASSES[theme];

  const items = [
    { label: 'home', href: '/', active: location.pathname === '/' },
    { label: 'about', href: '/about', active: location.pathname === '/about' },
    { label: 'contact', href: '/contact', active: location.pathname === '/contact' },
  ];

  return (
    <div className={`flex min-h-screen flex-col ${t.bg} ${t.text}`}>
      <Nav theme={theme} logo={<Logo theme={theme} />} items={items} cartCount={0} linkComponent={RouterLink} />
      <div className="flex justify-end px-[80px] pb-4">
        <ThemeSwitcher value={theme} onChange={setTheme} />
      </div>

      <main className="flex-1">
        <Outlet context={{ theme } satisfies { theme: Theme }} />
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
              { label: 'New arrivals', href: '/product' },
              { label: 'Collections', href: '/product' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ],
          },
        ]}
      />
    </div>
  );
}
