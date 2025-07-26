import { serverSideFunction } from '@/utils/server-utils';
// import { clientSideFunction } from '@/utils/client-utils';
import ClientComponent from './client-component';
import ImageSlider from './image-slider';

const ClientRoutePage = async () => {
  const serverResult = serverSideFunction();
  // const clientResult = clientSideFunction();

  return (
    <div className='m-2'>
      <h2>Client Route Page</h2>
      <ClientComponent
        serverResult={serverResult} />
      <ImageSlider />
      {/* <p>{clientResult}</p> */}
    </div>
  );
};

export default ClientRoutePage;