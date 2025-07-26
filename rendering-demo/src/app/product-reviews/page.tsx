import { Suspense } from 'react';
import Product from './product';
import Reviews from './reviews';

const ProductReviewsPage = () => {
  return (
    <div>
      <h2>ProductReviewsPage</h2>

      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductReviewsPage;