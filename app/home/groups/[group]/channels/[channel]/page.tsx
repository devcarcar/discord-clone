'use client';
import Navbar from '@/components/Navbar';
import GroupsList from '@/components/groups';
import Header from '@/components/header';
import SearchPage from '@/components/search';
import { ChannelType } from '@/utils';
import axios from 'axios';
import { ChevronDown, Hash, Mic } from 'lucide-react';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function ExactGroup() {
  const params = useParams();
  const group = params.group;
  const [groups, setGroups] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setisLoading] = useState(true);
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
    async function fetchGroups() {
      try {
        const res = await axios.get('/api/users/getUser');
        setGroups(res.data.data.groups);
      } catch (err: any) {}
    }
    fetchGroups();
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
      <div>
        <Navbar page={1} />
      </div>
      <div className='w-full bg-gray-900'>
        <Header setIsSearching={setIsSearching} title='Groups' />
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
          <div className='flex flex-grow'>
            {/* left hand side for messages & message bar */}
            <div>
              <div className='h-[600px]'>
                <h1>Messages</h1>
              </div>
              <div className='flex justify-center'>
                <input
                  className='p-6 bg-gray-400 rounded-lg'
                  placeholder='Type a message'
                />
              </div>
            </div>
            {/* Members bar in the right */}
            <div>{}</div>
          </div>
        </div>
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
