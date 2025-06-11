'use client';
import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';
import Header from '@/components/header';
import CreateModal from '@/components/modals/createModal';
import SearchModal from '@/components/modals/searchModal';
import { ModalType } from '@/helper';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function DmsPage() {
  const [me, setMe] = useState<any>();
  const [groupName, setGroupName] = useState();
  const [pic, setPic] = useState();
  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [isLoading, setIsLoading] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [mode, setMode] = useState(0);
  const [dms, setDms]: any[] = useState([]);
  const router = useRouter();
  const onSuccess = (groupId: string) => {
    router.push(`/home/groups/${groupId}`);
  };
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
  );
}
