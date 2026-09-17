import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Adapts React Router's `Link` (which takes `to`) to the `href`-based shape
 * the design system's `linkComponent` props expect, so internal links do
 * client-side navigation instead of a full page reload. Shared by every
 * page/layout that renders a design-system component with links.
 */
export function RouterLink({
  href,
  children,
  ...props
}: {
  href: string;
  className?: string;
  'aria-current'?: 'page';
  children?: ReactNode;
}) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
