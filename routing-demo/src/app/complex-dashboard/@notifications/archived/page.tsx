import Link from 'next/link';
import Card from '../../card';

const ArchivedNotificationsPage = () => {
  return (
    <Card>
      <div>NotificationsPage</div>
      <div>
        <Link href={'/complex-dashboard'} className='underline'>
          Default
        </Link>
      </div>
    </Card>
  );
};

export default ArchivedNotificationsPage;