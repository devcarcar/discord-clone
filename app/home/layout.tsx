import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen'>
      <Navbar page={0} /> {/* Persistent across routes */}
      {children} {/* Only this part changes */}
    </div>
  );
}
