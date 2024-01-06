import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-store.ts';

import { CartItemProps } from '../../types.ts';

const CartItem = (props: CartItemProps) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(cartActions.addItem(props.item));
  }

  function handleDecrement() {
    dispatch(cartActions.removeItem(props.item));
  }

  return (
    <li className="cart-item">
      <header>
        <h3>{title}</h3>
        <div className="cart-price">
          ${total.toFixed(2)}
          <span className="cart-itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="cart-details">
        <div className="cart-quantity">
          x <span>{quantity}</span>
        </div>
        <div className="cart-actions">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
