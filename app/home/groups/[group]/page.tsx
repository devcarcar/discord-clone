'use client';
import Navbar from '@/components/Navbar';
import GroupsList from '@/components/groups';
import Header from '@/components/header';
import SearchPage from '@/components/search';
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
  enum ChannelType {
    CATEGORY,
    TEXT,
    AUDIO,
  }
  interface Channel {
    channelId: string;
    type: ChannelType;
    parent?: string;
    name: string;
    channelList?: any[];
  }

  const channels: Channel[] = [
    {
      channelId: '384hudsfhdo',
      type: ChannelType.TEXT,
      parent: '384hudsfhdk',
      name: 'general-chat',
    },
    {
      channelId: '384hudsfhdk',
      type: ChannelType.CATEGORY,
      name: 'voice-1',
    },
    {
      channelId: '384hudsfhdi',
      type: ChannelType.TEXT,
      parent: '384hudsfhdk',
      name: 'discussion',
    },
    {
      channelId: '384hudsfhdj',
      type: ChannelType.TEXT,
      name: 'test',
    },
  ];

  const rawChannels = channels.filter((c) => c.type === ChannelType.CATEGORY);
  const categories: Channel[] = channels.filter(
    (c) => c.type === ChannelType.CATEGORY
  );

  categories.map((cat) => (cat.channelList = []));

  channels.forEach((c: Channel) => {
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
  return (
    <div className='flex'>
      <div>
        <Navbar page={1} />
      </div>
      <div className='w-full bg-gray-900'>
        <Header setIsSearching={setIsSearching} title='Groups' />
        <div className='flex'>
          <div className='w-[150px] border-r h-screen text-gray-400 border-gray-700 bg-gray-800'>
            {categories.map((cat) => (
              <div key={cat.channelId} className='p-1'>
                <button className='flex hover:text-white'>
                  <h1>{cat.name}</h1>
                  <ChevronDown />
                </button>
                {cat.channelList!.map((c) => (
                  <div key={c.channelId} className='w-full p-3'>
                    <div className='w-full'>
                      <button
                        onClick={() =>
                          router.push(
                            `/home/groups/${group}/channels/${c.channelId}`
                          )
                        }
                        className='flex w-full hover:bg-gray-500 rounded-lg'
                      >
                        {c.type === ChannelType.TEXT && <Hash />}{' '}
                        {c.type === ChannelType.AUDIO && <Mic />} {c.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {rootChannels.map((rc) => (
              <div key={rc.channelId} className='w-full'>
                <button
                  onClick={() =>
                    router.push(
                      `/home/groups/${group}/channels/${rc.channelId}`
                    )
                  }
                  className='flex w-full hover:bg-gray-500 rounded-lg'
                >
                  {rc.type === ChannelType.TEXT && <Hash />}{' '}
                  {rc.type === ChannelType.AUDIO && <Mic />} {rc.name}
                </button>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center flex-grow'>
            Select a channel
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
