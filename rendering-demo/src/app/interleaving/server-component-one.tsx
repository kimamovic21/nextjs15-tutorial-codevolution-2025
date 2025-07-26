import ServerComponentTwo from './server-component-two';
import ClientComponentOne from './client-component-one';

const ServerComponentOne = () => {
  return (
    <div>
      <h2>Server Component One</h2>
      <ServerComponentTwo />
      <ClientComponentOne />
    </div>
  );
};

export default ServerComponentOne;