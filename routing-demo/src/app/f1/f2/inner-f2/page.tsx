import Link from 'next/link';

const InnerF2Page = () => {
  return (
    <div>
      <h2>Inner F2 Page</h2>
      <div>
        <Link href={'/f5'} className='underline'>
          F5 Page
        </Link>
      </div>
    </div>
  );
};

export default InnerF2Page;