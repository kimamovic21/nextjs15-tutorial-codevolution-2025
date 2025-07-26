'use client';

import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

const ClientComponent = ({ serverResult }: any) => {
  const theme = useTheme();

  const clientResult = clientSideFunction();

  return (
    <div className='p-2'>
      <h3 style={{ color: theme.colors.primary }}>
        Client component
      </h3>
      <p>
        {serverResult}
      </p>
      <p>
        {clientResult}
      </p>
    </div>
  );
};

export default ClientComponent;