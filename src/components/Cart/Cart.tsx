import Card from '../UI/Card.tsx';
import CartItem from './CartItem.tsx';

const DUMMY_ITEM = { title: 'Test Item', quantity: 3, total: 18, price: 6 };

export default function Cart() {
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem item={DUMMY_ITEM} />
      </ul>
    </Card>
  );
}
