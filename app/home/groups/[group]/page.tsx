'use client';
import Navbar from '@/components/Navbar';
import Header from '@/components/header';
import SearchModal from '@/components/modals/searchModal';
import { ModalType } from '@/helper';
import { ChannelType } from '@/utils';
import axios from 'axios';
import { Bell, ChevronDown, Hash, Mic, Search } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function ExactGroup() {
  const params = useParams();
  const group = params.group;
  const [groups, setGroups] = useState([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  interface temp {
    channels: any[];
  }
  const [groupObject, setGrpObj] = useState<temp>({ channels: [] });
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [dms, setDms]: any[] = useState([]);

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
    async function fetchGroups() {
      try {
        const res = await axios.get('/api/users/getUser');
        setGroups(res.data.data.groups);
      } catch (err: any) {}
    }
    fetchGroups();
  }, []);

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
  }, []);
  useEffect(() => {
    async function fetchThatGroup() {
      try {
        const res = await axios.get(`/api/groups/${group}`);
        setGrpObj(res.data.data);
      } catch (e: any) {
        throw new Error('Internal Error');
      } finally {
        setisLoading(false);
      }
    }
    fetchThatGroup();
  }, [group]);
  const channels: any[] = groupObject.channels;

  const categories = channels.filter((c) => c.type === ChannelType.CATEGORY);

  categories.map((cat) => (cat.channelList = []));

  channels.forEach((c: any) => {
    if (c.parent) {
      const found = categories.find((cat) => cat.channelId === c.parent);
      if (found) {
        found.channelList = found.channelList || [];
        found.channelList.push(c);
      }
    }
  });
  const rootChannels = channels.filter(
    (c) => !c.parent && c.type != ChannelType.CATEGORY
  );
  const router = useRouter();
  if (isLoading) return <div>Loading</div>;
  return (
    <div className='flex'>
      <div className='w-screen bg-gray-900'>
        <Header setIsModalOpen={setIsModalOpen} title='Groups' />
        <div className='flex'>
          <div className='w-[220px] border-r h-screen text-gray-400 border-gray-700 bg-gray-800'>
            {categories.map((cat) => (
              <div key={cat.channelId} className='mb-1'>
                <button className='flex items-center gap-1 w-full px-2 py-1.5 hover:bg-gray-700/50 hover:text-gray-200 rounded-md transition-colors duration-150'>
                  <ChevronDown className='h-4 w-4 text-gray-500' />
                  <span className='text-sm font-medium'>{cat.name}</span>
                </button>
                {cat.channelList!.map((c: any) => (
                  <button
                    key={c.channelId}
                    onClick={() =>
                      router.push(
                        `/home/groups/${group}/channels/${c.channelId}`
                      )
                    }
                    className='flex items-center gap-2 w-full pl-6 pr-2 py-1.5 hover:bg-gray-700/30 hover:text-gray-200 rounded-md transition-colors duration-150'
                  >
                    {c.type === ChannelType.TEXT ? (
                      <Hash className='h-4 w-4 text-gray-500' />
                    ) : (
                      <Mic className='h-4 w-4 text-gray-500' />
                    )}
                    <span className='text-sm'>{c.name}</span>
                  </button>
                ))}
              </div>
            ))}
            {rootChannels.map((rc) => (
              <button
                key={rc.channelId}
                onClick={() =>
                  router.push(`/home/groups/${group}/channels/${rc.channelId}`)
                }
                className='flex items-center gap-2 w-full px-2 py-1.5 hover:bg-gray-700/30 hover:text-gray-200 rounded-md transition-colors duration-150'
              >
                {rc.type === ChannelType.TEXT ? (
                  <Hash className='h-4 w-4 text-gray-500' />
                ) : (
                  <Mic className='h-4 w-4 text-gray-500' />
                )}
                <span className='text-sm'>{rc.name}</span>
              </button>
            ))}
          </div>
          <div className='flex items-center justify-center flex-grow'>
            Select a channel
          </div>
        </div>
      </div>
      {isModalOpen === ModalType.SEARCH_MODAL && (
        <SearchModal
          searchRef={searchRef}
          inputRef={inputRef}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsModalOpen={setIsModalOpen}
          searchResults={searchResults}
        />
      )}
    </div>
  );
}
