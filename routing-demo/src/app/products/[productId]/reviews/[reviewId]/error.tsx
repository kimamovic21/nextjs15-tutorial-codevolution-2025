'use client';

import { startTransition } from 'react';
import { useRouter } from 'next/navigation';

const ErrorBoundary = ({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error?.message}</p>
      <button
        onClick={() => reload()}
        className='bg-blue-500 px-2 py-1 rounded-sm cursor-pointer'
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;