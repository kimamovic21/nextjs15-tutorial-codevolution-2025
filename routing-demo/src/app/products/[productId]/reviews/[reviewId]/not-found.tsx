'use client';

import { usePathname } from 'next/navigation';

const NotFoundPage = () => {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];

  return (
    <div>
      <h2>Not Found Page</h2>
      <h3>Review {reviewId} not found for product {productId}</h3>
    </div>
  );
};

export default NotFoundPage;