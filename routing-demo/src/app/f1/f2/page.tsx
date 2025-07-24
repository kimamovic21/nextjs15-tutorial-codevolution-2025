import Link from 'next/link';

const F2Page = () => {
  return (
    <div>
      <h2>F2 Page</h2>
      <Link href={'/f4'} className='underline'>
        F4 Page
      </Link>
    </div>
  );
};

export default F2Page;