import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../store/cart-store';
import { CartState } from './types.ts';

export default function CartButton() {
  const cartItems = useSelector((state: CartState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const itemAmount = cartItems.length;

  function handleOpenCart() {
    dispatch(toggle());
  }

  return (
    <button className="cart-button" onClick={handleOpenCart}>
      <span>My Cart</span>
      <span className="cart-badge">{itemAmount}</span>
    </button>
  );
}
