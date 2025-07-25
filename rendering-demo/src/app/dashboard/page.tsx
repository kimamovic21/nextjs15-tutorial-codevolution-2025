'use client';

import { useState } from 'react';

const DashboardPage = () => {
  console.log('Dashboard client component');

  const [username, setUsername] = useState('');
  console.log(username);

  return (
    <div className='p-2'>
      <h2>
        Dashboard Page
      </h2>

      <input
        value={username}
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        className='border border-white rounded-sm'
      />

      <p>
        Hello, {username}
      </p>
    </div>
  );
};

export default DashboardPage;