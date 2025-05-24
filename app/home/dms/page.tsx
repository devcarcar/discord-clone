'use client';
import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';
import Header from '@/components/header';
import SearchPage from '@/components/search';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function DmsPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [dms, setDms]: any[] = useState([]);
  const [groups, setGroups]: any[] = useState([]);

  useEffect(() => {
    async function fetchBoth() {
      try {
        const res = await axios.get('/api/users/getUser');
        setDms(res.data.data.dms);
        setGroups(res.data.data.groups);
      } catch (err: any) {}
    }
    fetchBoth();
  }, []);

  let listOfSearches: string[] = [];
  groups.forEach((g: any) => listOfSearches.push(g.name));
  dms.forEach((d: any) => listOfSearches.push(d.name));

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
  useEffect(() => {
    async function fetchDms() {
      try {
        const res = await axios.get('/api/users/getUser');
        setDms(res.data.data.dms);
      } catch (err: any) {}
    }
    fetchDms();
  }, []);

  return (
    <div className='flex'>
      <div>
        <Navbar page={2} />
      </div>
      <div className='w-full bg-gray-900'>
        <Header setIsSearching={setIsSearching} title='Direct Messages' />
        <DmsList arr={dms} />
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
    </div>
  );
}
