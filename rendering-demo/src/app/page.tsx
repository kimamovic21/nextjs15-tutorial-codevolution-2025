import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='p-2'>
      <h2>Home Page</h2>
      <Link href={'/dashboard'} className='underline'>
        Dashboard
      </Link>
    </div>
  );
};

export default HomePage;