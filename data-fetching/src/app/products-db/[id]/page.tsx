import { notFound } from 'next/navigation';
import { getProduct } from '@/prisma-db';
import ProductEditForm from './product-edit-form';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductEditPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  };

  return (
    <div>
      <ProductEditForm product={product} />
    </div>
  );
};

export default ProductEditPage;