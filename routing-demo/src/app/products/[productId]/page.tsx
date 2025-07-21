const ProductDetailsPage = async ({
  params
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  console.log(productId);

  return (
    <div>ProductDetailsPage</div>
  );
};

export default ProductDetailsPage;