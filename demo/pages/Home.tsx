import { Link } from 'react-router-dom';
import { Button } from '../../src';

export default function Home() {
  return (
    <div className="px-[80px] pb-[112px] pt-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-display max-w-[520px]">
          Some clothes you wear,
          <br />
          Salti you are.
        </h1>
        <Button withArrow>Shop Our Collection</Button>
      </div>
      <Link to="/product" className="font-nav text-nav mt-8 inline-block capitalize underline">
        View a product →
      </Link>
    </div>
  );
}
