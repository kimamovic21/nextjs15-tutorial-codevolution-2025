import wondersImages, { WonderImage } from '../wonders';
import Image from 'next/image';

const PhotoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div className='container mx-auto my-10'>
      <div className='w-1/2 mx-auto'>
        <div>
          <h2 className='text-center text-3xl font-bold my-4'>
            {photo.name}
          </h2>
        </div>

        <Image
          alt={photo.name}
          src={photo.src}
          className='w-full object-cover aspect-square '
        />

        <div className='bg-white py-4 text-black'>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;