import { useSelector } from 'react-redux';
import { ProductState } from '../../types.ts';

import ProductItem from './ProductItem.tsx';

export default function Products() {
  const products = useSelector((state: ProductState) => state.product.products);

  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
}
