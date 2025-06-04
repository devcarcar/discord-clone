'use client';
import Header from '@/components/header';
import SettingsHeader from '@/components/settings/header';
import { Group, Settings, Shield } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ServerSetting() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className='flex w-screen h-screen bg-gray-900 text-gray-100'>
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Header setIsModalOpen={setIsModalOpen} title='Group Settings' />

        <div className='flex flex-1 overflow-hidden'>
          {/* Sidebar Navigation */}
          <div className='w-60 border-r border-gray-700 bg-gray-800 flex flex-col'>
            <div className='p-4 border-b border-gray-700'>
              <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Server Settings
              </h2>
            </div>

            <nav className='flex-1 p-2 space-y-1'>
              <button
                onClick={() => setActiveTab('general')}
                className={`w-full flex items-center p-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'general'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
              >
                <Settings className='w-5 h-5 mr-3' />
                General Settings
              </button>

              <button
                onClick={() => setActiveTab('roles')}
                className={`w-full flex items-center p-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'roles'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
              >
                <Group className='w-5 h-5 mr-3' />
                Roles
              </button>

              <button
                onClick={() => setActiveTab('moderation')}
                className={`w-full flex items-center p-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'moderation'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
              >
                <Shield className='w-5 h-5 mr-3' />
                Moderation
              </button>
            </nav>

            <div className='p-4 border-t border-gray-700'>
              <button
                className='w-full py-2 px-4 border border-red-600/50 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors'
                onClick={() => setIsModalOpen(true)}
              >
                Delete Server
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className='flex-1 overflow-auto p-6 bg-gray-900'>
            {activeTab === 'general' && (
              <div className='max-w-3xl mx-auto'>
                <h1 className='text-2xl font-bold mb-6'>
                  General Server Settings
                </h1>
                {/* General settings form would go here */}
              </div>
            )}

            {activeTab === 'roles' && (
              <div className='max-w-3xl mx-auto'>
                <h1 className='text-2xl font-bold mb-6'>Role Management</h1>
                {/* Role management UI would go here */}
              </div>
            )}

            {activeTab === 'moderation' && (
              <div className='max-w-3xl mx-auto'>
                <h1 className='text-2xl font-bold mb-6'>Moderation Settings</h1>
                {/* Moderation settings would go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
