'use client';

type SubmitButtonProps = {
  isPending: boolean;
};

const SubmitButton = ({ isPending }: SubmitButtonProps) => {
  return (
    <button
      type='submit'
      className='block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer'
      disabled={isPending}
    >
      {isPending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;