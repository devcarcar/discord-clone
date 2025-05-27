'use client';
import Navbar from '@/components/Navbar';
import GroupsList from '@/components/groups';
import Header from '@/components/header';
import SearchPage from '@/components/search';
import axios from 'axios';
import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
enum ModalType {
  SEARCH_MODAL,
  CREATE_GROUP_MODAL,
}

export default function GroupPage() {
  const [groups, setGroups] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreatingGroup, setisCreatingGroup] = useState(false);
  const [listOfSearches, setlistOfSearches] = useState<any[]>([]);
  const [isModalOpen, setisModalOpen] = useState<false | ModalType>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [dms, setDms]: any[] = useState([]);

  useEffect(() => {
    async function fetchBoth() {
      try {
        const res = await axios.get('/api/users/getUser');
        setDms(res.data.data.dms);
        setGroups(res.data.data.groups);
        const { dms, groups }: { dms: any[]; groups: any[] } = res.data.data;
        setlistOfSearches(dms.concat(groups));
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
        setisModalOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setisModalOpen(false);
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
    <div className='flex'>
      <div>
        <Navbar page={1} />
      </div>
      <div className='w-full bg-gray-900'>
        <Header setIsSearching={setIsSearching} title='Groups' />
        <GroupsList setisCreatingGroup={setisCreatingGroup} groups={groups} />
      </div>
      {isSearching && (
        <SearchPage
          inputRef={inputRef}
          searchRef={searchRef}
          searchQuery={searchQuery}
          setIsSearching={setIsSearching}
          setSearchQuery={setSearchQuery}
          listOfSearches={listOfSearches}
        />
      )}
      {isModalOpen && (
        <div className='mt-4'>
          <p className='px-2 pb-2 text-gray-400 text-sm'>
            Results for <span className='text-white'>"{searchQuery}"</span>
          </p>
          <div className='space-y-1'>
            {listOfSearches
              .filter((i) =>
                i.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((i) => (
                <button
                  key={i}
                  className='w-full text-left p-3 rounded-md hover:bg-gray-700/50 transition-colors flex items-center gap-2'
                >
                  <Search className='w-4 h-4 text-gray-400 flex-shrink-0' />
                  <span className='truncate'>{i}</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
