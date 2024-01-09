import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-store';
import { CartStates } from '../../types.ts';

export default function CartButton() {
  const cartItems = useSelector((state: CartStates) => state.cart.cartItems);
  const dispatch = useDispatch();

  let itemAmount = 0;
  if (cartItems) {
    itemAmount = cartItems.length;
  }

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
