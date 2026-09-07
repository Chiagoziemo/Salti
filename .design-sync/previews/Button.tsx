import { Button } from '@salti/design-system';

// Real usage context: the CTA sits on the dark hero, never on a plain page.
const Stage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: '#0a130f', padding: 32, display: 'inline-flex' }}>{children}</div>
);

export function Default() {
  return (
    <Stage>
      <Button>Shop Our Collection</Button>
    </Stage>
  );
}

export function WithArrow() {
  return (
    <Stage>
      <Button withArrow>Shop Our Collection</Button>
    </Stage>
  );
}
