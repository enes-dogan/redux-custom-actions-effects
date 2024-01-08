import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartState } from './types.ts';

import Cart from './components/Cart/Cart.tsx';
import Layout from './components/Layout/Layout.tsx';
import Products from './components/Shop/Products.tsx';

export default function App() {
  const [notification, setNotification] = useState({
    status: '',
    title: '',
    message: '',
  });
  const isOpen = useSelector((state: CartState) => state.cart.isOpen);
  const cartItems = useSelector((state: CartState) => state.cart.cartItems);

  useEffect(() => {
    setNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    });

    async function sendCartData() {
      const response = await fetch(
        'https://redux-async-b4ba6-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        return;
      }
    }

    setNotification({
      status: 'success',
      title: 'Successs!',
      message: 'Sent cart data successfully.',
    });

    void sendCartData().catch(() => {
      setNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      });
    });
  }, [cartItems]);

  return (
    <Layout>
      {isOpen && <Cart />}
      <Products />
    </Layout>
  );
}
