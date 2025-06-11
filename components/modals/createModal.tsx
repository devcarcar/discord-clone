'use client';
import { UploadDropzone } from '@/utils';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function CreateModal({
  me,
  modalRef,
  setIsModalOpen,
  groupName,
  setGroupName,
  mode,
  setMode,
  pic,
  setPic,
  onSuccess,
}: {
  me: any;
  modalRef: any;
  setIsModalOpen: any;
  groupName: any;
  setGroupName: any;
  mode: any;
  setMode: any;
  pic: any;
  setPic: any;
  onSuccess: any;
}) {
  const handleCreateGroup = async () => {
    try {
      const res = await axios.post('/api/groups', {
        name: groupName,
        user: me,
        icon: pic,
      });
      onSuccess(res.data.groupId);
    } catch (error) {
      console.error('Error creating group:', error);
    } finally {
      setPic('');
      setGroupName('');
      setIsModalOpen(false);
    }
  };
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'>
      <div
        ref={modalRef}
        className='bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 border border-gray-700 overflow-hidden'
      >
        {mode === 0 && (
          <div className='flex flex-col p-6 space-y-4'>
            <h1 className='text-2xl font-semibold text-center'>
              What would you like to create?
            </h1>

            <div className='space-y-3'>
              <button className='w-full p-5 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-700/40 transition-all flex justify-between items-center'>
                <div className='text-left'>
                  <h2 className='font-medium'>Join Group</h2>
                  <p className='text-sm text-gray-400'>With an invite link</p>
                </div>
                <ChevronRight className='text-gray-400' />
              </button>

              <button
                onClick={() => setMode(1)}
                className='w-full p-5 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-700/40 transition-all flex justify-between items-center'
              >
                <div className='text-left'>
                  <h2 className='font-medium'>Create Group</h2>
                  <p className='text-sm text-gray-400'>Create a new group</p>
                </div>
                <ChevronRight className='text-gray-400' />
              </button>

              <button className='w-full p-5 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-700/40 transition-all flex justify-between items-center'>
                <div className='text-left'>
                  <h2 className='font-medium'>New DM</h2>
                  <p className='text-sm text-gray-400'>Private conversation</p>
                </div>
                <ChevronRight className='text-gray-400' />
              </button>
            </div>
          </div>
        )}

        {mode === 1 && (
          <div className='flex flex-col p-6 space-y-6'>
            <div className='flex justify-between'>
              <button
                className='hover:bg-gray-700 rounded-lg'
                onClick={() => setMode(0)}
              >
                <ChevronLeft />
              </button>
              <h1 className='text-2xl font-semibold text-center'>
                Create New Group
              </h1>
              <div></div>
            </div>

            <div className='flex flex-col items-center space-y-4'>
              <div className='relative group'>
                <img
                  className='w-32 h-32 rounded-full object-cover border-2 border-gray-600 group-hover:border-blue-500 transition-colors'
                  alt='Group avatar'
                  src={
                    pic ||
                    'https://wallpapers.com/images/high/black-screen-texture-acimaxbsvtwb9dwq.png'
                  }
                />
                <div className='absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                  <span className='text-white text-sm font-medium'>Change</span>
                </div>
              </div>

              <UploadDropzone
                endpoint={'imageUploader'}
                onClientUploadComplete={(res) => {
                  setPic(res[0].ufsUrl);
                  alert('Image uploaded successfully');
                }}
                onUploadError={(error: Error) => {
                  alert(`Upload failed: ${error.message}`);
                }}
                className='border-gray-600 ut-button:bg-blue-600 ut-button:hover:bg-blue-700 ut-button:ut-readying:bg-blue-600/50 ut-label:text-sm ut-label:hover:text-blue-400'
              />

              <div className='w-full space-y-2'>
                <label className='block text-sm font-medium text-gray-300'>
                  Group Name
                </label>
                <input
                  type='text'
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className='w-full bg-gray-700 rounded-lg px-4 py-3 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition'
                  placeholder='Enter group name'
                />
              </div>

              <button
                onClick={handleCreateGroup}
                disabled={!groupName.trim()}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  !groupName.trim()
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                Create Group
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
