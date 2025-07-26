'use client';

import { useState } from 'react';

const ClientComponentTwo = () => {
  const [username, setUsername] = useState('Batman');

  return (
    <div>
      <h2>Client Component Two</h2>
    </div>
  );
};

export default ClientComponentTwo;