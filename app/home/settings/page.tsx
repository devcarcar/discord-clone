'use client';
import Navbar from '@/components/Navbar';
import Header from '@/components/header';
import AccountSettings from '@/components/settings/accountSettings';
import SettingsHeader from '@/components/settings/header';
import PrivacySettings from '@/components/settings/privacySettings';
import ProfileCard from '@/components/settings/profileCard';
import { ModalType } from '@/helper';
import axios from 'axios';
import {
  ArrowLeft,
  ChevronRight,
  User,
  Shield,
  Bell,
  TriangleAlert,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function SettingsPage() {
  const [user, setUser] = useState<any>({});
  const [isLoading, setisLoading] = useState(true);
  const [new_un, setNew_un] = useState<string>(user.name);
  const [buttonClicked, setbuttonClicked] = useState(false);
  const [notif, setNotif] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);
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
        <SettingsHeader />

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

            <ProfileCard user={user} />
          </div>

          <div className='flex-1 space-y-6'>
            <AccountSettings
              user={user}
              setNew_un={setNew_un}
              handleClick={handleClick}
            />
            <PrivacySettings />
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
