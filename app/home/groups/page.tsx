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
import RootLayout from '../layout';
import CreateModal from '@/components/modals/createModal';

type Group = {
  groupId: string;
  name: string;
  description: string;
  icon: string;
  members: any[];
  active: number;
};

export default function GroupPage() {
  const [me, setMe] = useState<any>();

  const [pic, setPic] = useState<string>();
  const [groupData, setGroupData] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<number>(0);
  const [groupName, setGroupName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  const [groupCreated, setgroupCreated] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const onSuccess = (groupId: string) => {
    router.push(`/home/groups/${groupId}`);
  };
  useEffect(() => {
    async function fetchUserAndGroups() {
      setIsLoading(true);
      try {
        const userRes = await axios.get('/api/users/me');
        setMe(userRes.data.data);

        const fetchedGroups: Group[] = [];

        for (const group of userRes.data.data.groups) {
          const res = await axios.get(`/api/groups/${group}`);
          fetchedGroups.push(res.data.data);
        }

        setGroupData(fetchedGroups);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserAndGroups();
  }, [groupCreated]);

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

  return (
    <div className='flex w-screen'>
      <div className='w-full bg-gray-900'>
        <Header setIsModalOpen={setIsModalOpen} title='Groups' />

        <div className='grid grid-cols-3 gap-[50px] p-[50px]'>
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
            modalRef,
            inputRef,
            searchQuery,
            setSearchQuery,
            setIsModalOpen,
            searchResults,
          })}

        {isModalOpen === ModalType.CREATE_MODAL &&
          CreateModal({
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
          })}
      </div>
    </div>
  );
}
