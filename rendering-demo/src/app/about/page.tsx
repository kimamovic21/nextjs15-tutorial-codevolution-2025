const AboutPage = () => {
  console.log('About server component');

  return (
    <div className='p-2'>
      <h2>About Page</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default AboutPage;