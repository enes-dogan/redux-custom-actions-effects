import { useSelector } from 'react-redux';
import { CartState } from './types.ts';

import Cart from './components/Cart/Cart.tsx';
import Layout from './components/Layout/Layout.tsx';
import Products from './components/Shop/Products.tsx';

export default function App() {
  const isOpen = useSelector((state: CartState) => state.cart.isOpen);

  return (
    <Layout>
      {isOpen && <Cart />}
      <Products />
    </Layout>
  );
}
