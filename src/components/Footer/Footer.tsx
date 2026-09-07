import type { ReactNode } from 'react';

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

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
  className?: string;
};

export function Footer({ logo, columns, copyright, variant = 'default', className }: FooterProps) {
  return (
    <footer className={['bg-primary-700 px-[80px] py-[56px]', className].filter(Boolean).join(' ')}>
      {variant === 'default' && (
        <div className="mb-10 flex flex-wrap items-start justify-between gap-12">
          <div className="w-[93px]">{logo}</div>
          <div className="flex flex-wrap gap-16">
            {columns.map((col) => (
              <div key={col.title} className="min-w-[120px]">
                <h3 className="font-nav text-nav mb-3 uppercase tracking-wide text-grey-400">{col.title}</h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="font-ui text-white/80 hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-white/10 pt-6">
        {variant === 'compact' && <div className="w-[93px]">{logo}</div>}
        <p className="font-nav text-nav text-grey-400">{copyright}</p>
      </div>
    </footer>
  );
}
