import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='p-2 bg-gray-200 text-black flex gap-2'>
      <Link
        href={'/blog'}
        className='underline text-blue-500'
      >
        Blog
      </Link>
      <Link
        href={'/products'}
        className='underline text-blue-500'
      >
        Products
      </Link>
      <Link
        href={'/articles'}
        className='underline text-blue-500'
      >
        Articles
      </Link>
      <Link
        href={'/order-product'}
        className='underline text-blue-500'
      >
        Order product
      </Link>
    </div>
  );
};

export default HomePage;