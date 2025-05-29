'use client';
import { Bell, Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import Navbar from '@/components/Navbar';
import GroupCard from '@/components/groupCard';
import SearchModal from '@/components/modals/searchModal';
import createGroupModal from '@/components/modals/createGroupModal';
import { ModalType } from '@/helper';
import Header from '@/components/header';

type Group = {
  groupId: string;
  name: string;
  description: string;
  icon: string;
  members: any[];
  active: number;
};

export default function GroupPage() {
  const [pic, setPic] = useState<string>();
  const [groups, setGroups] = useState<string[]>([]);
  const [groupData, setGroupData] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [groupName, setGroupName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  const [groupCreated, setgroupCreated] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCreateGroup = async () => {
    try {
      const userRes = await axios.get('/api/users/getUser');
      await axios.post('/api/groups', {
        name: groupName,
        user: userRes.data.data,
        icon: pic,
      });
    } catch (error) {
      console.error('Error creating group:', error);
    } finally {
      setPic('');
      setGroupName('');
      setIsModalOpen(false);
      setgroupCreated(true);
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('/api/users/getUser');
        const { dms, groups } = res.data.data;
        setGroups(groups);
        setSearchResults([...dms, ...groups]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [groupCreated]);

  useEffect(() => {
    const fetchGroupsData = async () => {
      if (groups.length === 0) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const fetchedGroups: Group[] = [];

      for (const groupId of groups) {
        try {
          const res = await axios.get(`/api/groups/${groupId}`);
          if (res.data.data) {
            fetchedGroups.push(res.data.data);
          }
        } catch (error) {
          console.error(`Error fetching group ${groupId}:`, error);
        }
      }

      setGroupData(fetchedGroups);
      setIsLoading(false);
    };

    fetchGroupsData();
  }, [groups]);

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

  return (
    <div className='flex h-screen w-screen'>
      <Navbar page={0} />
      <div className='flex w-screen'>
        <div className='w-full bg-gray-900'>
          <Header setIsModalOpen={setIsModalOpen} title='Groups' />

          <div className='grid grid-cols-3 gap-[50px] p-[50px]'>
            <div className='group relative'>
              <button
                onClick={() => setIsModalOpen(ModalType.CREATE_GROUP_MODAL)}
                className='border-4 border-dashed border-gray-500 w-full h-full rounded-lg hover:border-gray-400 transition-colors duration-300 p-8 text-gray-400 hover:text-white'
              >
                + Create new group
              </button>
            </div>

            {isLoading ? (
              <div className='col-span-2 flex items-center justify-center'>
                Loading groups...
              </div>
            ) : (
              groupData.map(GroupCard)
            )}
          </div>
          {isModalOpen === ModalType.SEARCH_MODAL &&
            SearchModal({
              searchRef,
              inputRef,
              searchQuery,
              setSearchQuery,
              setIsModalOpen,
              searchResults,
            })}
          {isModalOpen === ModalType.CREATE_GROUP_MODAL &&
            createGroupModal({
              searchRef,
              pic,
              setPic,
              groupName,
              setGroupName,
              handleCreateGroup,
              setgroupCreated,
            })}
        </div>
      </div>
    </div>
  );
}
