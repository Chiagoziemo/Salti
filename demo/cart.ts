export type CartItem = {
  /** `${title}-${color}-${size}` — distinguishes variants of the same product. */
  key: string;
  title: string;
  /** Formatted for display (e.g. "₦40,000") — the demo has no numeric price/currency model. */
  price: string;
  image: string;
  color: string;
  size: string;
  qty: number;
};

export type CartContext = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (key: string) => void;
};

export function cartCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
