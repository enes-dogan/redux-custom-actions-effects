import Cart from './components/Cart/Cart.tsx';
import Layout from './components/Layout/Layout.tsx';
import Products from './components/Shop/Products.tsx';

export default function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}
