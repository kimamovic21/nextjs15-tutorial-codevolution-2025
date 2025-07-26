'use client';

import { useTheme } from '@/components/theme-provider';

const ClientComponent = ({ result }: any) => {
  const theme = useTheme();

  return (
    <div className='p-2'>
      <h3 style={{ color: theme.colors.primary }}>
        Client component
      </h3>
      <p>
        {result}
      </p>
    </div>
  );
};

export default ClientComponent;