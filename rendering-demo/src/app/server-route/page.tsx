import { serverSideFunction } from '@/utils/server-utils';

const ServerRoutePage = async () => {
  const result = serverSideFunction();

  return (
    <div className='m-2'>
      <h2>Server Route Page</h2>
      <p>{result}</p>
    </div>
  );
};

export default ServerRoutePage;