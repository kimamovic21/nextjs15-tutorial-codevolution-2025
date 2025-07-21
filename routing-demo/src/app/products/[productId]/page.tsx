const ProductDetailsPage = async ({
  params
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;

  return (
    <div>
      <h2>Product Details Page</h2>
      <h3>Product Details Page for product {productId}</h3>
    </div>
  );
};

export default ProductDetailsPage;