const ReviewsPage = async ({
  params
}: {
  params: Promise<{ productId: string; }>
}) => {
  const { productId } = await params;

  return (
    <div>
      <h2>Reviews Page</h2>
      <h3>Reviews Page for product {productId}</h3>
      <h4>Review 1</h4>
      <h4>Review 2</h4>
      <h4>Review 3</h4>
    </div>
  );
};

export default ReviewsPage;