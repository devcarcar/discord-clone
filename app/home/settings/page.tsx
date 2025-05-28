'use client';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import {
  ArrowLeft,
  ChevronRight,
  User,
  Shield,
  Bell,
  TriangleAlert,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const [user, setUser] = useState<any>({});
  const [isLoading, setisLoading] = useState(true);
  const [new_un, setNew_un] = useState<string>(user.name);
  const [buttonClicked, setbuttonClicked] = useState(false);
  const [notif, setNotif] = useState(false);
  function handleClick() {
    setbuttonClicked(true);
  }
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get('/api/users/getUser');
        setUser(res.data.data);
      } catch (err: any) {
        throw new Error('Some fetching problems', err);
      } finally {
        setisLoading(false);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function changeUsername() {
      try {
        const res = await axios.patch('/api/users/changeUser', {
          userId: user.userId,
          new_un: new_un,
        });
        console.log(res);
      } catch (e: any) {
        throw new Error('Some fetching problems', e);
      } finally {
        setbuttonClicked(false);
        setNotif(true);
      }
    }
    if (buttonClicked) changeUsername();
  }, [buttonClicked]);

  if (isLoading)
    return <div className='h-screen w-screen bg-gray-900'>Loading...</div>;
  return (
    <div className='bg-gray-900 flex min-h-screen w-screen'>
      <main className='flex-1 overflow-y-auto'>
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

        <div className='p-6 flex flex-col md:flex-row gap-6'>
          <div className='border border-gray-700 rounded-lg p-6 bg-gray-800/30 w-full md:max-w-xs h-fit'>
            <div className='relative mx-auto w-24 h-24 mb-4 group'>
              <img
                src='https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg'
                className='w-full h-full rounded-full border-2 border-blue-500 object-cover'
                alt='Profile'
              />
              <button className='absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                <User className='w-5 h-5 text-white' />
              </button>
            </div>

            <div className='text-center space-y-1 mb-4'>
              <h2 className='text-lg font-bold'>{user.username}</h2>
              <p className='text-gray-400 text-sm'>Premium Member</p>
              <div className='flex items-center justify-center gap-1 text-xs text-green-400'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                Online
              </div>
            </div>

            <div className='grid grid-cols-3 divide-x divide-gray-700 text-center text-sm border-t border-gray-700 pt-3'>
              <div className='px-2'>
                <p className='font-semibold'>{user.groups.length}</p>
                <p className='text-gray-400'>Groups</p>
              </div>
              <div className='px-2'>
                <p className='font-semibold'>{user.dms.length}</p>
                <p className='text-gray-400'>Friends</p>
              </div>
              <div className='px-2'>
                <p className='font-semibold'>2y</p>
                <p className='text-gray-400'>Member</p>
              </div>
            </div>
          </div>

          <div className='flex-1 space-y-6'>
            <div className='border border-gray-700 rounded-lg p-6 bg-gray-800/50'>
              <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
                <User className='w-5 h-5 text-blue-400' />
                Account Settings
              </h2>

              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-1'>
                    Username
                  </label>
                  <div className='flex gap-2'>
                    <input
                      className='flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Enter new username'
                      onChange={(e) => setNew_un(e.target.value)}
                      defaultValue={user.username}
                    />
                    <button
                      onClick={handleClick}
                      className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors'
                    >
                      Save
                    </button>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-1'>
                    Email
                  </label>
                  <div className='flex gap-2'>
                    <input
                      type='email'
                      className='flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white'
                      defaultValue={user.email}
                      disabled
                    />
                    <button className='px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors'>
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-gray-700 rounded-lg p-6 bg-gray-800/50'>
              <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
                <Shield className='text-purple-400 w-5 h-5 ' />
                Privacy Settings
              </h2>
              <div className='grid gap-y-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium'>Profile Visibility</p>
                    <p className='text-sm text-gray-400'>
                      Who can see your profile
                    </p>
                  </div>
                  <select className='bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-sm'>
                    <option>Public</option>
                    <option>Friends Only</option>
                    <option>Private</option>
                  </select>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium'>Activity Status</p>
                    <p className='text-sm text-gray-400'>
                      Show when you're online
                    </p>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      className='sr-only peer'
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className='border border-gray-700 rounded-lg p-6 bg-gray-800/50'>
              <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
                <Bell className='text-yellow-300 w-5 h-5 ' />
                Notification Settings
              </h2>
              <div className='grid gap-y-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium'>Push Notifications</p>
                    <p className='text-sm text-gray-400'>
                      Receive alerts on your device
                    </p>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      className='sr-only peer'
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className='border border-red-400/30 rounded-lg p-6 bg-gray-800/50'>
              <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
                <TriangleAlert className='text-red-500 w-5 h-5 ' />
                Danger Zone
              </h2>
              <div className='grid gap-y-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium'>Delete Account</p>
                    <p className='text-sm text-gray-400'>
                      Permanently delete your Chat account
                    </p>
                  </div>
                  <button>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
