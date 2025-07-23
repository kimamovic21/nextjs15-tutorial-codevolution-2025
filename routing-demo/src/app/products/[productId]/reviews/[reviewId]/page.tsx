import { redirect } from 'next/navigation';

const getRandomInteger = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductReviewPage = async ({
  params
}: {
  params: Promise<{ productId: string; reviewId: string }>
}) => {
  const random = getRandomInteger(2);

  if (random === 1) {
    throw new Error('Error loading review');
  };

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    redirect('/products');
  };

  return (
    <div>
      <h2>Product Review Page</h2>
      <h3>Review {reviewId} for product {productId}</h3>
    </div>
  );
};

export default ProductReviewPage;