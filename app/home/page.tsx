'use client';
import Navbar from '@/components/Navbar';
import Header from '@/components/header';
import SearchModal from '@/components/modals/searchModal';
import { ModalType } from '@/helper';
import axios from 'axios';
import { Bell, Search, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const recentActivity = [
    {
      id: 1,
      group: 'Design Team',
      message: 'Alice: "Let\'s review the mockups"',
      time: '2h ago',
    },
    {
      id: 2,
      group: 'Gaming',
      message: 'Bob: "Who\'s online tonight?"',
      time: '4h ago',
    },
  ];
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [dms, setDms]: any[] = useState([]);
  const [groups, setGroups]: any[] = useState([]);

  useEffect(() => {
    async function fetchBoth() {
      try {
        const res = await axios.get('/api/users/me');
        const { dms, groups } = res.data.data;
        setDms(dms);
        setGroups(groups);
        setSearchResults([...dms, ...groups]);
      } catch (err: any) {}
    }
    fetchBoth();
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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearching(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearching(false);
      }
    };

    if (isSearching) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearching]);

  return (
    <div className='flex min-h-screen w-screen bg-gray-900 text-gray-100'>
      <div className='flex-1 overflow-hidden'>
        <Header setIsModalOpen={setIsModalOpen} title='Home' />

        <div className='p-6'>
          <div className='border h-[100px] border-gray-700 bg-transparent flex items-center p-6 rounded-lg'>
            <div className='p-3 rounded-full bg-blue-600/20'>
              <Sparkles className='w-6 h-6 text-blue-400' />
            </div>
            <div className='p-3'>
              <h2 className='text-lg font-medium'>Welcome back!</h2>
              <p className='text-gray-400 text-sm'>
                You have 3 unread messages
              </p>
            </div>
          </div>
        </div>
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <p className='text-lg font-semibold'>Recent Activities</p>
            <button className='text-sm hover:bg-gray-700 rounded-lg px-3 py-1 transition-colors'>
              View all
            </button>
          </div>
          <div className='space-y-4'>
            {recentActivity.map((i) => (
              <div
                key={i.id}
                className='border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition-colors'
              >
                <div className='flex justify-between items-center'>
                  <div className='flex-1 min-w-0'>
                    <p className='truncate'>{i.message}</p>
                  </div>
                  <div className='ml-4'>
                    <p className='text-gray-400 text-sm whitespace-nowrap'>
                      {i.time}
                    </p>
                  </div>
                </div>
                <div className='mt-2'>
                  <span className='text-sm text-blue-400 bg-blue-900/30 px-2 py-1 rounded'>
                    {i.group}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
}
