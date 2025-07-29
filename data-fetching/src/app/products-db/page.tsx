import { getProducts } from '@/prisma-db';
import { removeProduct } from '@/actions/products';
import Link from 'next/link';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <ul className='space-y-4 p-4'>
      <Link href={`/products-db-create`} className='underline'>
        Create product
      </Link>

      {products?.map((product) => (
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
          <form action={removeProduct.bind(null, product.id)}>
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

export default ProductsDBPage;