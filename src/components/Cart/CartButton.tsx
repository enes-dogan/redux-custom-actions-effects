import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-store';
import { CartState } from '../../types.ts';

export default function CartButton() {
  const cartItems = useSelector((state: CartState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const itemAmount = cartItems.length;

  function handleOpenCart() {
    dispatch(cartActions.toggle());
  }

  return (
    <button className="cart-button" onClick={handleOpenCart}>
      <span>My Cart</span>
      <span className="cart-badge">{itemAmount}</span>
    </button>
  );
}
