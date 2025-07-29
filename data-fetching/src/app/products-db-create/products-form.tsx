'use client';

import { useActionState } from 'react';
import { FormState, createProduct } from '@/actions/products';
import SubmitButton from './submit-button';

const ProductsForm = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

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
            {state.errors.price}
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
            {state.errors.description}
          </p>
        )}
      </div>

      <SubmitButton isPending={isPending} />
    </form>
  );
};

export default ProductsForm;