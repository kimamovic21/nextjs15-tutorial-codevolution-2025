import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='p-2'>
      <h2>Home Page</h2>
      <Link href={'/dashboard'} className='underline mr-2'>
        Dashboard
      </Link>
      <Link href={'/about'} className='underline mr-2'>
        About
      </Link>
      <Link href={'/server-route'} className='underline mr-2'>
        Server route
      </Link>
      <Link href={'/client-route'} className='underline mr-2'>
        Client route
      </Link>
      <Link href={'/interleaving'} className='underline'>
        Interleaving 
      </Link>
    </div>
  );
};

export default HomePage;