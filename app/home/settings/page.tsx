'use client';
import { UserPatchType } from '@/app/api/users/[userId]/route';
import Navbar from '@/components/Navbar';
import Header from '@/components/header';
import AccountSettings from '@/components/settings/accountSettings';
import DangerZone from '@/components/settings/dangerZone';
import ExperimentalFeatures from '@/components/settings/experimentalFeatures';
import SettingsHeader from '@/components/settings/header';
import SettingsNavbar from '@/components/settings/navbar';
import NotificationSettings from '@/components/settings/notificationSettings';
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
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  const [mode, setMode] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    setbuttonClicked(true);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get('/api/users/me');
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
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
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
        const res = await axios.patch(`/api/users/${user.userId}`, {
          type: UserPatchType.USERNAME,
          method: 'set',
          newValue: new_un,
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
    <div className='flex w-screen'>
      <div className='w-full bg-gray-900'>
        <Header setIsModalOpen={setIsModalOpen} title='Groups' />
        <div className='flex'>
          <SettingsNavbar />
          <div className=' p-6 flex flex-grow md:flex-row gap-6 w-full'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
