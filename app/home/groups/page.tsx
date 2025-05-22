import Navbar from '@/components/Navbar';
import GroupsList from '@/components/groups';

export default function GroupPage() {
  return (
    <div>
      <Navbar page={1} />
      <GroupsList />
    </div>
  );
}
