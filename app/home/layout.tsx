import Navbar from '@/components/Navbar';
import { Bell, Search } from 'lucide-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      <div>
        <Navbar page={1} />
      </div>
      {children}
    </div>
  );
}
