'use client';
import Navbar from '@/components/Navbar';
import Header from '@/components/header';
import MemberProfileModal from '@/components/modals/memberProfileModal';
import SearchModal from '@/components/modals/searchModal';
import { ModalType } from '@/helper';
import { ChannelType } from '@/helper';
import axios from 'axios';
import { Bell, ChevronDown, Hash, Mic, Search, Settings } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function ExactGroup() {
  const params = useParams();
  const group = params.group;
  const [groups, setGroups] = useState([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  const [selectedMember, setSelectedMember] = useState<any>();
  const [messages, setMessages] = useState<any[]>([]);
  const [userInfo, setuserInfo] = useState<any>();
  const [currentMsg, setcurrentMsg] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isfetchNeeded, setisfetchNeeded] = useState<boolean>(true);
  const [arr, setArr] = useState<any[]>([]);
  interface temp {
    channels: any[];
  }
  const [groupObject, setGrpObj] = useState<any>({ channels: [] });
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [dms, setDms]: any[] = useState([]);

  useEffect(() => {
    async function fetchBoth() {
      try {
        const res = await axios.get('/api/users/me');
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
        const res = await axios.get('/api/users/me');
        setGroups(res.data.data.groups);
      } catch (err: any) {}
    }
    fetchGroups();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('/api/users/me');
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

  useEffect(() => {
    async function getAllMembers() {
      let temp: any[] = [];
      const res = await axios.get(`/api/groups/${group}`);
      const exactGroup = res.data.data;
      const res_2 = await axios.get('/api/users');
      const allUsers = res_2.data;
      exactGroup.members.forEach((m: string) => {
        const found = allUsers.find((u: any) => u.userId === m);
        if (found) temp.push(found);
      });
      setArr(temp);
    }
    getAllMembers();
  }, []);

  const router = useRouter();
  return (
    <div className='flex w-screen h-screen bg-gray-900 text-gray-100'>
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Header setIsModalOpen={setIsModalOpen} title='Groups' />
        <div className='flex flex-1 overflow-hidden'>
          <div className='w-60 border-r border-gray-700 bg-gray-800 flex flex-col'>
            <div className='p-3 flex justify-between border-b border-gray-700'>
              <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                {groupObject.name || 'Group Channels'}
              </h2>
              <button
                onClick={() => router.push(`/home/groups/${group}/settings`)}
              >
                <Settings className='h-5 w-5 text-gray-500' />
              </button>
            </div>
            <div className='flex-1 overflow-y-auto p-2 space-y-1'>
              {categories.map((cat) => (
                <div key={cat.channelId} className='mb-2'>
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
                      className={`flex items-center gap-2 w-full pl-6 pr-2 py-1.5 hover:bg-gray-700/30 hover:text-gray-200 rounded-md transition-colors duration-150 `}
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
                    router.push(
                      `/home/groups/${group}/channels/${rc.channelId}`
                    )
                  }
                  className={`flex items-center gap-2 w-full px-2 py-1.5 hover:bg-gray-700/30 hover:text-gray-200 rounded-md transition-colors duration-150`}
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
          </div>

          <div className='w-full flex-1 flex justify-center items-center'>
            Select a channel
          </div>

          <div className='w-60 border-l border-gray-700 bg-gray-800 flex flex-col'>
            <div className='p-3 border-b border-gray-700'>
              <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Members
              </h2>
            </div>
            <div className='flex-1 overflow-y-auto p-2'>
              {arr.length > 0 ? (
                arr.map((member: any) => (
                  <button
                    onClick={() => {
                      setSelectedMember(member);
                      setIsModalOpen(ModalType.MEMBER_PROFILE_MODAL);
                    }}
                    key={member.userId}
                    className='flex items-center gap-2 p-2 hover:bg-gray-700/50 rounded-md cursor-pointer transition-colors'
                  >
                    <div className='w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center'>
                      {member.username.charAt(0).toUpperCase()}
                    </div>
                    <span className='text-sm'>{member.username}</span>
                  </button>
                ))
              ) : (
                <div className='p-4 text-center text-gray-400 text-sm'>
                  No members found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen === ModalType.SEARCH_MODAL && (
        <SearchModal
          inputRef={inputRef}
          searchRef={searchRef}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsModalOpen={setIsModalOpen}
          searchResults={searchResults}
        />
      )}
      {isModalOpen === ModalType.MEMBER_PROFILE_MODAL && (
        <MemberProfileModal
          currentUser={userInfo}
          searchRef={searchRef}
          member={selectedMember}
        />
      )}
    </div>
  );
}
