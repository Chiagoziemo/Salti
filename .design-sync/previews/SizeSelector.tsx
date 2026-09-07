import { useState } from 'react';
import { SizeSelector } from '@salti/design-system';

export function Default() {
  const [size, setSize] = useState('M');
  return <SizeSelector sizes={['S', 'M', 'L', 'XL', '2XL']} value={size} onChange={setSize} />;
}

export function LargeSelected() {
  const [size, setSize] = useState('2XL');
  return <SizeSelector sizes={['S', 'M', 'L', 'XL', '2XL']} value={size} onChange={setSize} label="Size" />;
}
