import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-store.ts';
import { ProductType } from '../../types.ts';

import Card from '../UI/Card.tsx';

export default function ProductItem(item: ProductType) {
  const { title, price, description } = item;

  const dispatch = useDispatch();

  function handleAddCart() {
    dispatch(cartActions.addItem(item));
  }

  return (
    <li className="product-item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="product-price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="product-actions">
          <button onClick={handleAddCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
