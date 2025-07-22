import { type Metadata } from 'next';

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

const ProductDetailsPage = async ({ params }: Props) => {
  const productId = (await params).productId;

  return (
    <div>
      <h2>Product Details Page</h2>
      <h3>Product Details Page for product {productId}</h3>
    </div>
  );
};

export default ProductDetailsPage;