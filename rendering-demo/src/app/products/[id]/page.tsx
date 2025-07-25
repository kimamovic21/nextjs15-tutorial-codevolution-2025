export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
};

const ProductDetailsPage = async ({
  params
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div>
      <h2>Product details page</h2>
      <p>
        Product {id} details rendered at {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default ProductDetailsPage;