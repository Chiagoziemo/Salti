import { useNavigate, useOutletContext } from 'react-router-dom';
import { Button, CloseIcon, THEME_CLASSES } from '../../src';
import type { OutletContext } from '../Layout';

function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, '')) || 0;
}

function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}

export default function Cart() {
  const { theme, cart, removeFromCart } = useOutletContext<OutletContext>();
  const navigate = useNavigate();
  const t = THEME_CLASSES[theme];

  const subtotal = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0);

  return (
    <div className="flex flex-col gap-10 px-4 py-8 sm:px-6 md:px-10 lg:px-[80px] lg:py-[80px]">
      <h1 className="font-display text-display">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-start gap-8">
          <p className="font-ui text-body opacity-80">Your cart is empty.</p>
          <Button withArrow onClick={() => navigate('/product')}>
            Shop Our Collection
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start">
          <ul className={['flex min-w-0 flex-1 flex-col divide-y', t.divider].join(' ')}>
            {cart.map((item) => (
              <li key={item.key} className="flex items-center gap-6 py-6 first:pt-0">
                <img src={item.image} alt={item.title} className="h-24 w-24 shrink-0 rounded object-cover" />
                <div className="flex flex-1 flex-col gap-1">
                  <p className="font-ui text-detail">{item.title}</p>
                  <p className="font-ui text-ui opacity-60">
                    Size {item.size} · Qty {item.qty}
                  </p>
                  <p className="font-display text-price-sm">{item.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.key)}
                  aria-label={`Remove ${item.title} from cart`}
                  className={['flex h-9 w-9 shrink-0 items-center justify-center rounded-full border hover:bg-black/5', t.divider].join(' ')}
                >
                  <CloseIcon size={16} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-6 xl:w-[320px] xl:shrink-0">
            <div className={['flex items-center justify-between border-t pt-6', t.divider].join(' ')}>
              <span className="font-ui text-body">Subtotal</span>
              <span className="font-display text-price-sm">{formatNaira(subtotal)}</span>
            </div>
            <Button withArrow>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}
