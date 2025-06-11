'use client';
import Header from '@/components/header';
import AccountSettings from '@/components/settings/accountSettings';
import DangerZone from '@/components/settings/dangerZone';
import SettingsNavbar from '@/components/settings/navbar';
import PrivacySettings from '@/components/settings/privacySettings';
import { ModalType } from '@/helper';
import { useState } from 'react';

export default function AccountSettingsPage() {
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  return (
    <div className='w-screen bg-gray-900'>
      <Header title='Header Title' setIsModalOpen={setIsModalOpen} />
      <div className='flex'>
        <SettingsNavbar />
        <div className='w-full p-6'>
          <PrivacySettings />
          <DangerZone />
        </div>
      </div>
    </div>
  );
}
