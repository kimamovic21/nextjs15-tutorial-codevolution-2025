import Link from 'next/link';

const ArticlesPage = () => {
  return (
    <div className='p-2 bg-gray-200 flex gap-2'>
      <Link
        href={'/articles/breaking-news-123?lang=en'}
        className='underline text-blue-500'
      >
        Read in english
      </Link>
      <Link
        href={'/articles/breaking-news-123?lang=fr'}
        className='underline text-blue-500'
      >
        Read in french
      </Link>
      <Link
        href={'/articles/breaking-news-123?lang=es'}
        className='underline text-blue-500'
      >
        Read in spanish
      </Link>
    </div>
  );
};

export default ArticlesPage;