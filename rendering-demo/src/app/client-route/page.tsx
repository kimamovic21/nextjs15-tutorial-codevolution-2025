import { serverSideFunction } from '@/utils/server-utils';
import ClientComponent from './client-component';

const ClientRoutePage = async () => {
  const result = serverSideFunction();

  return (
    <div>
      <h2>Client Route Page</h2>
      <ClientComponent result={result} />
    </div>
  );
};

export default ClientRoutePage;