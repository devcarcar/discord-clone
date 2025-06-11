import { Users } from 'lucide-react';
import Link from 'next/link';

export default function SettingsNavbar() {
  return (
    <nav className='sticky top-0 h-screen w-72 bg-gray-800 border-r border-gray-700 p-4'>
      <ul className='space-y-2'>
        <li>
          <Link
            href='/home/settings/profile'
            className='flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-700 text-gray-300 hover:text-white'
          >
            <Users className='h-5 w-5' />
            <span>Profile Settings</span>
          </Link>
        </li>
        <li>
          <Link
            href='/home/settings/account'
            className='flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-700 text-gray-300 hover:text-white'
          >
            <Users className='h-5 w-5' />
            <span>Account Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
