'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Count: {count}</p>
      <div className='flex gap-2'>
        <button
          className='bg-gray-100 text-black rounded-md py-1 px-2'
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className='bg-gray-100 text-black rounded-md py-1 px-2'
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className='bg-gray-100 text-black rounded-md py-1 px-2'
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;