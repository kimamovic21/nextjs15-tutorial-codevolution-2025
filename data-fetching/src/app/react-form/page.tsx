'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/react-form/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price, description }),
      });
      if (response.ok) {
        router.push('/products-db');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <form onSubmit={handleSubmit} className='p-4 space-y-4 max-w-96'>
      <label className='text-white'>
        Title
        <input
          type='text'
          className='block w-full p-2 text-white border border-white rounded'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className='text-white'>
        Price
        <input
          type='number'
          className='mt-1 block w-full p-2 text-white border-white border rounded'
          name='price'
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className='text-white'>
        Description
        <textarea
          className='mt-1 block w-full p-2 text-white border border-white rounded'
          name='description'
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button
        type='submit'
        className='mt-2 block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer'
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default CreateProduct;