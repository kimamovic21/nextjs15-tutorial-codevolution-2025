import wondersImages, { WonderImage } from '../../wonders';
import Image from 'next/image';
import Modal from '../../modal';

const PhotoModalPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className='w-full object-cover aspect-square'
      />

      <div className='bg-white p-4'>
        <h2 className='text-xl font-semibold'>
          {photo.name}
        </h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
};

export default PhotoModalPage;