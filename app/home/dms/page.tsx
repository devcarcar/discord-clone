import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';

export default function DmsPage() {
  return (
    <div>
      <Navbar page={2} />
      <DmsList />
    </div>
  );
}
