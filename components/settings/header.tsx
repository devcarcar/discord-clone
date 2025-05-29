import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SettingsHeader() {
  return (
    <div className='border-b border-gray-800 p-4 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10'>
      <div className='flex items-center gap-4'>
        <Link
          href='/home'
          className='p-1 rounded-full hover:bg-gray-800 transition-colors'
        >
          <ArrowLeft className='w-5 h-5' />
        </Link>
        <h1 className='text-xl font-bold'>Settings</h1>
      </div>
    </div>
  );
}
