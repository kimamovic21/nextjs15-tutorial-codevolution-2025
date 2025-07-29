'use client';

import { useActionState } from 'react';
import { FormState, editProduct } from '@/actions/products';
import SubmitButton from './submit-button';

type ProductProp = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductEditForm = ({ product }: { product: ProductProp }) => {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
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
            defaultValue={product.title}
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
            defaultValue={product.price}
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
            defaultValue={product.description ?? ''}
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

export default ProductEditForm;