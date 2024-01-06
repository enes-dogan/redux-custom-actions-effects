import ProductItem from './ProductItem.tsx';
import products from '../../dummy-products.ts';

export default function Products() {
  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
}
