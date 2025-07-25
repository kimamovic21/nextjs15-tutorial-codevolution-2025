import { cookies } from 'next/headers';

const AboutPage = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);

  return (
    <div className='p-2'>
      <h2>About Page</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default AboutPage;