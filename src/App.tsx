import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData } from './store/cart-store.ts';
import { CartStates, ProductStates } from './types.ts';

import Cart from './components/Cart/Cart.tsx';
import Layout from './components/Layout/Layout.tsx';
import Products from './components/Shop/Products.tsx';
import Notification from './components/UI/Notification.tsx';

let isInital = true;

export default function App() {
  const isOpen = useSelector((state: CartStates) => state.cart.isOpen);
  const cartItems = useSelector((state: CartStates) => state.cart.cartItems);
  const notification = useSelector(
    (state: ProductStates) => state.product.notification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInital) {
      isInital = false;
      return;
    }

    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <>
      {notification.message && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}
