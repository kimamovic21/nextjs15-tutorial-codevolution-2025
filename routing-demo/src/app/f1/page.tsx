import Link from 'next/link';

const F1Page = () => {
  return (
    <div>
      <h2>F1 Page</h2>
      <div>
        <Link href={'/f1/f2'} className='underline'>
          F2 Page
        </Link>
        <Link href={'/f3'} className='underline'>
          F3 Page
        </Link>
      </div>
    </div>
  );
};

export default F1Page;