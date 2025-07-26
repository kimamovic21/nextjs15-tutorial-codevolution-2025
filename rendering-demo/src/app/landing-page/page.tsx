import Navbar from './navbar';

const LandingPage = () => {
  console.log('LandingPage rendered');

  return (
    <>
      <Navbar />
      <main>
        <h2>Landing page heading</h2>
      </main>
    </>
  );
};

export default LandingPage;