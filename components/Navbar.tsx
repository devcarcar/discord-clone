import { House, User, Users } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({ page }: { page: number }) => {
  return (
    <div className='w-full h-full sticky top-0'>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex flex-col justify-start items-start h-full py-4 gap-y-2'>
          <Link
            className='flex justify-center items-center w-full px-5 py-3 text-lg text-white rounded-lg'
            href='/home'
          >
            <House className='h-5 w-5' />
          </Link>
          <ul className='flex flex-col gap-y-2 text-white w-full'>
            <li className='w-full'>
              <Link
                href='/home/groups'
                className={`w-full px-5 py-2 rounded-lg transition-all duration-200 flex items-center justify-center ${
                  page === 1
                    ? 'bg-gray-600 font-medium shadow-inner'
                    : 'hover:bg-gray-700/50'
                }`}
              >
                <Users className='h-5 w-5' />
                <p>Groups</p>
              </Link>
            </li>
            <li className='w-full'>
              <Link
                href='/home/dms'
                className={`w-full px-5 py-2 rounded-lg transition-all duration-200 flex items-center justify-center ${
                  page === 2
                    ? 'bg-gray-600 font-medium shadow-inner'
                    : 'hover:bg-gray-700/50'
                }`}
              >
                <User className='h-5 w-5' />
                <p>Direct Messages</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
