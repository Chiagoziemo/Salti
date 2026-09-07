import { useState } from 'react';
import { ProductStepper } from '@salti/design-system';

export function Size() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [i, setI] = useState(2);
  return (
    <ProductStepper
      label="Size"
      value={sizes[i]}
      onDecrement={() => setI((v) => Math.max(0, v - 1))}
      onIncrement={() => setI((v) => Math.min(sizes.length - 1, v + 1))}
    />
  );
}

export function Quantity() {
  const [qty, setQty] = useState(1);
  return (
    <ProductStepper
      label="Quantity"
      value={qty}
      onDecrement={() => setQty((v) => Math.max(1, v - 1))}
      onIncrement={() => setQty((v) => v + 1)}
    />
  );
}
