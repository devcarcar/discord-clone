'use client';
import axios from 'axios';
import { House, Settings, User, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = ({ page }: { page: number }) => {
  const [user, setUser] = useState<any>();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get('/api/users/getUser');
        setUser(res.data.data);
      } catch (e: any) {
        throw new Error('Some fetching problems', e);
      } finally {
        setisLoading(false);
      }
    }
    getUser();
  }, []);
  const router = useRouter();
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
              className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                page === 1
                  ? 'bg-blue-900/30 text-white shadow-inner'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <Users className='h-5 w-5' />
              <span>Groups</span>
            </Link>
          </li>
          <li>
            <Link
              href='/home/dms'
              className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                page === 2
                  ? 'bg-blue-900/30 text-white shadow-inner'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <Users className='h-5 w-5' />
              <span>Direct Messages</span>
            </Link>
          </li>
        </ul>
        <div className='border-t border-gray-700 pt-3 mt-auto'>
          <div className='flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-gray-700/50 transition-colors'>
            <div className='flex-shrink-0 relative'>
              <img
                src='https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg'
                className='h-8 w-8 rounded-full object-cover border border-gray-600'
                alt='User'
              />
              <span className='absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-gray-800'></span>
            </div>
            <div className='min-w-0 flex-1'>
              <p className='text-sm font-medium truncate'>
                {user?.username || 'Loading...'}
              </p>
              <p className='text-xs text-gray-400 truncate'>Online</p>
            </div>
            <button
              onClick={() => router.push('/home/settings')}
              className='text-gray-400 hover:text-white p-1 rounded-full'
            >
              <Settings className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
