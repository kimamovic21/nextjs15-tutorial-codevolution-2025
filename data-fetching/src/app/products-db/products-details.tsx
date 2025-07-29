'use client';

import { useOptimistic } from 'react';
import { removeProduct } from '@/actions/products';
import Link from 'next/link';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDetails = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <ul className='space-y-4 p-4'>
      <Link href={`/products-db-create`} className='underline'>
        Create product
      </Link>

      {optimisticProducts?.map((product) => (
        <li
          key={product.id}
          className='mt-2 p-4 bg-white shadow-md rounded-lg text-gray-700'
        >
          <h2 className='text-xl font-semibold'>
            <span>{product.title}</span>
            <Link
              href={`/products-db/${product.id}`}
              className='ml-2 underline text-sm'
            >
              See product
            </Link>
          </h2>
          <p>
            {product.description}
          </p>
          <p className='text-lg font-medium'>
            ${product.price}
          </p>
          <form action={removeProductById.bind(null, product.id)}>
            <button
              type='submit'
              className='px-4 pz-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 cursor-pointer'
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default ProductsDetails;