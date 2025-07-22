'use client';

import { use } from 'react';
import Link from 'next/link';

const ArticleDetailsPage = ({
  params,
  searchParams
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}) => {
  const { articleId } = use(params);
  const { lang = 'en' } = use(searchParams);

  return (
    <div className='p-2 bg-gray-200 text-black'>
      <h2>News article {articleId}</h2>
      <p>Reading in {lang}</p>

      <div className='flex gap-2'>
        <Link
          href={`/articles/${articleId}?lang=en`}
          className='underline text-blue-500'
        >
          Read in english
        </Link>
        <Link
          href={`/articles/${articleId}?lang=es`}
          className='underline text-blue-500'
        >
          Read in spanish
        </Link>
        <Link
          href={`/articles/${articleId}?lang=fr`}
          className='underline text-blue-500'
        >
          Read in french
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;