import { getProducts } from '@/prisma-db';
import ProductsDetails from './products-details';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <div>
      <ProductsDetails products={products} />
    </div>
  );
};

export default ProductsDBPage;