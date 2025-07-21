import { notFound } from 'next/navigation';

const ProductReviewPage = async ({
  params
}: {
  params: Promise<{ productId: string; reviewId: string }>
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  };

  return (
    <div>
      <h2>Product Review Page</h2>
      <h3>Review {reviewId} for product {productId}</h3>
    </div>
  );
};

export default ProductReviewPage;