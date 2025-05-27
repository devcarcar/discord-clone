'use client';
import { Bell, Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import Navbar from '@/components/Navbar';
import { UploadDropzone } from '@/utils'; // Ensure correct import path

type Group = {
  groupId: string;
  name: string;
  description: string;
  icon: string;
  members: any[];
  active: number;
};

type UserData = {
  dms: any[];
  groups: string[];
};

enum ModalType {
  SEARCH_MODAL = 1,
  CREATE_GROUP_MODAL = 999,
}

export default function GroupPage() {
  const router = useRouter();
  const [pic, setPic] = useState<string>('');
  const [groups, setGroups] = useState<string[]>([]);
  const [groupData, setGroupData] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);

  // Refs
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Data Fetching
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('/api/users/getUser');
        const { dms = [], groups = [] } = res.data.data; // Default empty arrays
        setGroups(groups);
        setSearchResults([...dms, ...groups]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchGroupsData = async () => {
      if (!groups.length) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const fetchedGroups = await Promise.all(
          groups.map(async (groupId) => {
            try {
              const res = await axios.get<{ data: Group }>(
                `/api/groups/${groupId}`
              );
              return res.data.data;
            } catch (error) {
              console.error(`Error fetching group ${groupId}:`, error);
              return null;
            }
          })
        );

        setGroupData(fetchedGroups.filter(Boolean) as Group[]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroupsData();
  }, [groups]);

  const handleCreateGroup = async () => {
    if (!groupName.trim()) {
      alert('Please enter a group name');
      return;
    }

    try {
      setIsCreating(true);
      const userRes = await axios.get('/api/users/getUser');
      await axios.post('/api/groups', {
        name: groupName.trim(),
        icon: pic || null,
        user: userRes.data.data,
      });
      setIsModalOpen(false);
      // Refresh groups after creation
      const refreshRes = await axios.get('/api/users/getUser');
      setGroups(refreshRes.data.data.groups);
    } catch (error) {
      console.error('Error creating group:', error);
      alert('Failed to create group');
    } finally {
      setIsCreating(false);
    }
  };

  // Modal handlers remain the same...

  const renderGroupCard = (group: Group) => (
    <div className='group relative' key={group.groupId}>
      <button
        onClick={() => router.push(`/home/groups/${group.groupId}`)}
        className='border-4 border-white w-full h-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden text-left hover:-translate-y-2 transform bg-gray-800 hover:bg-gray-700'
      >
        <div className='flex justify-center p-4'>
          <img
            src={group.icon || '/default-group-icon.png'} // Fallback image
            alt={`${group.name} icon`}
            className='w-16 h-16 object-cover rounded-full border-2 border-gray-200 dark:border-gray-600'
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/default-group-icon.png';
            }}
          />
        </div>
        <div className='p-4 text-center'>
          <h2 className='text-xl font-semibold text-gray-100 mb-1 truncate'>
            {group.name}
          </h2>
          <p className='text-sm text-gray-300 mb-3 line-clamp-2'>
            {group.description || 'No description'}
          </p>
          <div className='flex justify-between text-xs text-gray-400 mt-4'>
            <span>👥 {group.members?.length || 0} members</span>
            <span>🔥 {group.active || 0} active</span>
          </div>
        </div>
      </button>
    </div>
  );

  const renderCreateGroupModal = () => {
    const defaultImage = '/default-group-icon.png';

    return (
      <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center'>
        <div
          ref={searchRef}
          className='bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 border border-gray-700 overflow-hidden'
        >
          <div className='p-6 space-y-6'>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-bold text-gray-100'>
                Create New Group
              </h1>
              <button
                onClick={() => setIsModalOpen(false)}
                className='text-gray-400 hover:text-white'
              >
                <X className='w-6 h-6' />
              </button>
            </div>

            <div className='flex flex-col items-center space-y-4'>
              <div className='relative group'>
                <img
                  src={pic || defaultImage}
                  alt='Group avatar'
                  className='w-32 h-32 rounded-full object-cover border-4 border-gray-600 group-hover:border-blue-500 transition-colors'
                />
                <div className='absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity'>
                  <span className='text-white text-sm font-medium'>Change</span>
                </div>
              </div>

              <UploadDropzone
                endpoint='imageUploader'
                onClientUploadComplete={(res) => {
                  if (res?.[0]?.url) {
                    setPic(res[0].url);
                  }
                }}
                onUploadError={(error) => {
                  console.error('Upload error:', error);
                  alert('Image upload failed');
                }}
                className='w-full ut-label:text-sm ut-button:bg-blue-600 ut-button:hover:bg-blue-700'
              />

              <div className='w-full space-y-2'>
                <label className='block text-sm font-medium text-gray-300'>
                  Group Name *
                </label>
                <input
                  type='text'
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className='w-full bg-gray-700 rounded px-4 py-2 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition'
                  placeholder='Enter group name'
                  required
                />
              </div>
            </div>

            <div className='flex justify-end space-x-3 pt-4'>
              <button
                onClick={() => setIsModalOpen(false)}
                className='px-4 py-2 rounded border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors'
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={!groupName.trim() || isCreating}
                className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex items-center'
              >
                {isCreating ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  'Create Group'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ... (rest of the component remains the same)
}
