const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <div className='p-4'>
      <div className='mb-4'>
        {children}
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col gap-4'>
          <div>
            {users}
          </div>

          <div>
            {revenue}
          </div>
        </div>
        <div className='flex flex-1'>
          {notifications}
        </div>
      </div>
    </div>
  );
};

export default ComplexDashboardLayout;