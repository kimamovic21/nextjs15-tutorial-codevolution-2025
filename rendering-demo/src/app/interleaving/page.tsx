import ClientComponentOne from './client-component-one';
import ServerComponentOne from './server-component-one';

const InterleavingPage = () => {
  return (
    <div className='m-2'>
      <h2>Interleaving page</h2>
      <ServerComponentOne />
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
};

export default InterleavingPage;