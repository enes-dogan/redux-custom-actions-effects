import { useSelector } from 'react-redux';
import { CartState } from './types.ts';

import Card from '../UI/Card.tsx';
import CartItem from './CartItem.tsx';

export default function Cart() {
  const cartItems = useSelector((state: CartState) => state.cart.cartItems);

  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
}
