import { useProductsByCategory } from '@/shared/hooks/useProductsByCategory';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Miniatures.module.scss';


export const Miniatures = () => {
  const { products, loading, error } = useProductsByCategory('miniatures');

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }


  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Miniatures</h1>
          <p>Discover our collection of highly detailed miniatures</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                onFavoriteClick={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miniatures;