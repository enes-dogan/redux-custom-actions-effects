import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions.ts';
import { CartStates, ProductStates } from './types.ts';
import { AppDispatch } from './store/index.ts';

import Cart from './components/Cart/Cart.tsx';
import Layout from './components/Layout/Layout.tsx';
import Products from './components/Shop/Products.tsx';
import Notification from './components/UI/Notification.tsx';

export default function App() {
  const isOpen = useSelector((state: CartStates) => state.cart.isOpen);
  const cartItems = useSelector((state: CartStates) => state.cart.cartItems);
  const changed = useSelector((state: CartStates) => state.cart.changed);

  const notification = useSelector(
    (state: ProductStates) => state.product.notification
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    void dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (changed) {
      void dispatch(sendCartData(cartItems));
    }
  }, [cartItems, changed, dispatch]);

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
