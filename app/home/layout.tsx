'use client';
import Navbar from '@/components/Navbar';
import { Bell, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className='flex w-screen h-screen'>
      <div>
        <Navbar
          page={
            pathname === '/home'
              ? 0
              : pathname.startsWith('/home/groups')
                ? 1
                : pathname.startsWith('/home/dms')
                  ? 2
                  : 3
          }
        />
      </div>
      {children}
    </div>
  );
}
