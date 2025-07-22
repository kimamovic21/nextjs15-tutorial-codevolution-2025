import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='p-2 bg-gray-200 text-black'>
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
    </div>
  );
};

export default HomePage;