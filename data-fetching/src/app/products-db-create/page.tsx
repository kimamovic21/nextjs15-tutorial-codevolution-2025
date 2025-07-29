'use client';

import { useActionState } from 'react';
import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';
import SubmitButton from './submit-button';

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

type FormState = {
  errors: Errors;
};

const AddProductPage = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  const createProduct = async (formData: FormData) => {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    const errors: Errors = {};

    if (!title) {
      errors.title = 'Title is required';
    };

    if (!price) {
      errors.price = 'Price is required';
    };

    if (!description) {
      errors.description = 'Description is required';
    };

    if (Object.keys(errors).length > 0) {
      return { errors: errors };
    };

    await addProduct(title, parseInt(price), description);
    redirect('/products-db');
  };

  return (
    <form action={formAction} className='p-4 space-y-4 max-w-96'>
      <div>
        <label className='text-white'>
          Title
          <input
            type='text'
            className='block w-full p-2 text-white border border-white rounded'
            name='title'
          />
        </label>
        {state.errors.title && (
          <p className='text-red-500'>
            {state.errors.title}
          </p>
        )}
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
        {state.errors.price && (
          <p className='text-red-500'>
            {state.errors.title}
          </p>
        )}
      </div>
      <div>
        <label className='text-white'>
          Description
          <textarea
            className='block w-full p-2 text-white border border-white rounded'
            name='description'
          />
        </label>
        {state.errors.description && (
          <p className='text-red-500'>
            {state.errors.title}
          </p>
        )}
      </div>

      <SubmitButton isPending={isPending} />
    </form>
  );
};

export default AddProductPage;