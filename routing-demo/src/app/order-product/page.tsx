'use client';

import { useRouter } from 'next/navigation';

const OrderProductPage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    alert('Placing your order...');
    router.push('/');
  };

  return (
    <div className='p-2 bg-gray-200 text-black'>
      <h2>Order product</h2>

      <button 
        className='bg-blue-500 text-white rounded-md px-2 py-1 cursor-pointer'
        onClick={handleNavigate}
      >
        Place order
      </button>
    </div>
  );
};

export default OrderProductPage;