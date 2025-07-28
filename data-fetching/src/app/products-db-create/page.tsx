import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';
import SubmitButton from './submit-button';

const AddProductPage = () => {
  const createProduct = async (formData: FormData) => {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    addProduct(title, parseInt(price), description);
    redirect('/products-db');
  };

  return (
    <form action={createProduct} className='p-4 space-y-4 max-w-96'>
      <div>
        <label className='text-white'>
          Title
          <input
            type='text'
            className='block w-full p-2 text-white border border-white rounded'
            name='title'
          />
        </label>
      </div>
      <div>
        <label className='text-white'>
          Price
          <input
            type='number'
            className='block w-full p-2 text-white border border-white rounded'
            name='price'
          />
        </label>
      </div>
      <div>
        <label className='text-white'>
          Description
          <textarea
            className='block w-full p-2 text-white border border-white rounded'
            name='description'
          />
        </label>
      </div>

      <SubmitButton />
    </form>
  );
};

export default AddProductPage;