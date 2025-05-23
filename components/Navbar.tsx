import { House, User, Users } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({ page }: { page: number }) => {
  return (
    <nav className='sticky top-0 h-screen w-[220px] bg-gray-800 border-r border-gray-700'>
      <div className='flex flex-col h-full p-4'>
        <Link
          href='/home'
          className='flex items-center justify-center p-3 mb-4 text-white rounded-lg hover:bg-gray-700/50 transition-colors'
        >
          <House className='h-5 w-5' />
        </Link>
        <ul className='space-y-2 flex-1'>
          <li>
            <Link
              href='/home/groups'
              className={`flex items-center justify-center gap-2 p-2 rounded-lg transition-colors ${
                page === 1
                  ? 'bg-gray-600 font-medium shadow-inner'
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <Users className='h-5 w-5' />
              <span>Groups</span>
            </Link>
          </li>
          <li>
            <Link
              href='/home/dms'
              className={`flex items-center justify-center gap-2 p-2 rounded-lg transition-colors ${
                page === 2
                  ? 'bg-gray-600 font-medium shadow-inner'
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <User className='h-5 w-5' />
              <span>Direct Messages</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
