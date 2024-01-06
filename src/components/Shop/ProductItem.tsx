import { ProductItemProps } from '../../types.ts';

import Card from '../UI/Card.tsx';

export default function ProductItem(props: ProductItemProps) {
  const { title, price, description } = props;

  return (
    <li className="product-item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="product-price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="product-actions">
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
