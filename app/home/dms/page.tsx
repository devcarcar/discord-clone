'use client';
import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';
import Header from '@/components/header';
import SearchModal from '@/components/modals/searchModal';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function DmsPage() {
  const [me, setMe] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const [dms, setDms]: any[] = useState([]);

  useEffect(() => {
    async function fetchBoth() {
      try {
        const res = await axios.get('/api/users/me');
        setMe(res.data.data);
        const { dms, groups } = res.data.data;
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
    async function fetchDms() {
      try {
        const res = await axios.get('/api/dms');
        const myDms = res.data.filter((dm: any) => me.dms.includes(dm.dmId));
        setDms(myDms);
      } catch (err: any) {}
    }
    fetchDms();
  }, [me]);

  return (
    <div className='flex h-screen w-screen'>
      <div className='w-full bg-gray-900'>
        <Header title='Direct Messages' setIsModalOpen={setIsModalOpen} />
        <DmsList arr={dms} />
      </div>
      {isModalOpen &&
        SearchModal({
          searchRef,
          inputRef,
          searchQuery,
          setSearchQuery,
          setIsModalOpen,
          searchResults,
        })}
    </div>
  );
}
