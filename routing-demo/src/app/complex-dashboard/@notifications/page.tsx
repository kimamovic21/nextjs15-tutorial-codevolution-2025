import Card from '../card';
import Link from 'next/link';

const NotificationsPage = () => {
  return (
    <Card>
      <div>NotificationsPage</div>
      <div>
        <Link href={'/complex-dashboard/archived'} className='underline'>
          Archived
        </Link>
      </div>
    </Card>
  );
};

export default NotificationsPage;