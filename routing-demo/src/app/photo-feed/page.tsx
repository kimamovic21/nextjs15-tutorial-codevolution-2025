import Link from 'next/link';
import wonders from './wonders';
import Image from 'next/image';

const PhotoFeedPage = () => {
  return (
    <main className='container mx-auto'>
      <h2 className='text-center text-3xl font-bold my-4'>
        New Wonders of the World
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {wonders?.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className='w-full object-cover aspect-square'
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PhotoFeedPage;