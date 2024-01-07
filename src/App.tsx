import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CartState } from './types.ts';

import Cart from './components/Cart/Cart.tsx';
import Layout from './components/Layout/Layout.tsx';
import Products from './components/Shop/Products.tsx';

export default function App() {
  const isOpen = useSelector((state: CartState) => state.cart.isOpen);
  const cartItems = useSelector((state: CartState) => state.cart.cartItems);

  useEffect(() => {
    async function sendCartData() {
      const response = await fetch(
        'https://redux-async-b4ba6-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartItems),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }
    void sendCartData();
  }, [cartItems]);

  return (
    <Layout>
      {isOpen && <Cart />}
      <Products />
    </Layout>
  );
}
