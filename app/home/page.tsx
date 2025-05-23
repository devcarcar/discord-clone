import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='flex'>
      <div className='w-[250px]'>
        <Navbar page={0} />
      </div>
    </div>
  );
}
