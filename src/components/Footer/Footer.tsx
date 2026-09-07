import type { ElementType, ReactNode } from 'react';
import { THEME_CLASSES, type Theme } from '../../theme';

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

/** Minimal shape any router's link component (or the plain `'a'` default) can satisfy — see `linkComponent` on `FooterProps`. */
export type FooterLinkComponent = ElementType<{
  href: string;
  className?: string;
  children?: ReactNode;
}>;

export type FooterProps = {
  logo?: ReactNode;
  columns: FooterColumn[];
  copyright: string;
  /**
   * The file has four differently-named footer frames (Footer 3/4/5/6)
   * duplicated across pages with no documented distinction between them.
   * `default` renders the full column layout seen most often; `compact`
   * drops the columns for a single-row bar. Confirm with design before
   * treating this mapping as final — see DESIGN_SYSTEM.md.
   */
  variant?: 'default' | 'compact';
  /**
   * Which of the 3 real site themes this footer renders on — see
   * `../../theme.ts`. Unlike Nav, no footer was sampled across all 3 theme
   * sections, so this mapping (page bg + text per theme) is inferred, not
   * directly confirmed. Flag to design if it looks wrong on gold/forest.
   */
  theme?: Theme;
  /**
   * Component to render column links with, taking `href` (not `to` — keeps
   * this library router-agnostic). Defaults to a plain `<a>`, which causes
   * a full page reload in a single-page app. Pass an adapter around your
   * router's Link for client-side navigation — see `NavProps.linkComponent`.
   */
  linkComponent?: FooterLinkComponent;
  className?: string;
};

export function Footer({
  logo,
  columns,
  copyright,
  variant = 'default',
  theme = 'dark',
  linkComponent: LinkComponent = 'a',
  className,
}: FooterProps) {
  const t = THEME_CLASSES[theme];

  return (
    <footer className={['px-[80px] py-[56px]', t.bg, t.text, className].filter(Boolean).join(' ')}>
      {variant === 'default' && (
        <div className="mb-10 flex flex-wrap items-start justify-between gap-12">
          <div className="w-[93px]">{logo}</div>
          <div className="flex flex-wrap gap-16">
            {columns.map((col) => (
              <div key={col.title} className="min-w-[120px]">
                <h3 className="font-nav text-nav mb-3 uppercase tracking-wide opacity-60">{col.title}</h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <LinkComponent href={link.href} className="font-ui hover:underline">
                        {link.label}
                      </LinkComponent>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={['flex items-center justify-between border-t pt-6', t.divider].join(' ')}>
        {variant === 'compact' && <div className="w-[93px]">{logo}</div>}
        <p className="font-nav text-nav opacity-60">{copyright}</p>
      </div>
    </footer>
  );
}
