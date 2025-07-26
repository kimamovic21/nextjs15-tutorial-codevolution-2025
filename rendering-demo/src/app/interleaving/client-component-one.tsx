'use client';

import { useState } from 'react';
import ClientComponentTwo from './client-component-two';
// import ServerComponentOne from './server-component-one';

const ClientComponentOne = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  const [username, setUsername] = useState('Batman');

  return (
    <div>
      <h2>Client Component One</h2>
      <ClientComponentTwo />
      {/* <ServerComponentOne /> */}
      {children}
    </div>
  );
};

export default ClientComponentOne;