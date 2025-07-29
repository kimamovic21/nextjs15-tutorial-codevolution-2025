import { getProducts } from '@/prisma-db';
import ProductsDetails from './products-details';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async ({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const { query } = await searchParams;

  const products: Product[] = await getProducts(query);

  return (
    <div>
      <ProductsDetails products={products} />
    </div>
  );
};

export default ProductsDBPage;