import Link from 'next/link';

const ProductsPage = () => {
  return (
    <div>
      <h2>
        Products Page
      </h2>
      <Link href={'/products/1'} className='underline'>
        Product 1
      </Link>
      <Link href={'/products/2'} className='underline'>
        Product 2
      </Link>
      <Link href={'/products/3'} className='underline'>
        Product 3
      </Link>
    </div>
  );
};

export default ProductsPage;