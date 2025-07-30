import { auth, currentUser } from '@clerk/nextjs/server';

const DashboardPage = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log(authObj);
  console.log(userObj);

  return (
    <div>DashboardPage</div>
  );
};

export default DashboardPage;