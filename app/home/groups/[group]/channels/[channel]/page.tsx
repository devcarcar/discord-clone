'use client';
import Navbar from '@/components/Navbar';
import Header from '@/components/header';
import MemberProfileModal from '@/components/modals/memberProfileModal';
import SearchModal from '@/components/modals/searchModal';
import { ModalType, ChannelType } from '@/helper';
import User from '@/schemas/user';

import axios from 'axios';
import { Bell, ChevronDown, Hash, Mic, Search, Settings } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function ExactGroup() {
  // params
  const params = useParams();
  const { group, channel } = params;

  // usestates
  const [selectedMember, setSelectedMember] = useState<any>();
  const [groups, setGroups] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [groupObject, setGrpObj] = useState<any>({ channels: [] });
  const [dms, setDms] = useState<any[]>([]);
  const [userInfo, setuserInfo] = useState<any>();
  const [currentMsg, setcurrentMsg] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isfetchNeeded, setisfetchNeeded] = useState<boolean>(true);
  const [arr, setArr] = useState<any[]>([]);

  //userefs
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const ws = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  //use effect
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onopen = () => {
      console.log('Connected to WebSocket');
      setIsConnected(true);
    };

    socket.onmessage = async (event) => {
      const { timestamp, message, sender } = JSON.parse(event.data);
      setMessages((prev) => [
        ...prev,
        {
          timestamp,
          message,
          sender,
        },
      ]);
      await axios.post('/api/groups/sendMsg', {
        group,
        channel,
        msgObj: {
          timestamp,
          message,
          sender,
        },
      });
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
      setIsConnected(false);
    };

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message: any, timestamp: any, user: any) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      setcurrentMsg('');
      const msgObj = {
        message,
        timestamp: timestamp,
        sender: user,
      };
      ws.current.send(JSON.stringify(msgObj));
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  //random
  let listOfSearches: string[] = [];
  groups.forEach((g: any) => listOfSearches.push(g.name));
  dms.forEach((d: any) => listOfSearches.push(d.name));

  //useeffects
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

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(`/api/users/me`);
        const { data } = res.data;
        const { groups, dms } = data;
        setuserInfo(data);
        setGroups(groups);
        setDms(dms);
        setSearchResults([...dms, ...groups]);
      } catch (e: any) {
        throw new Error('Internal Error');
      } finally {
        setisLoading(false);
      }
    }
    if (isfetchNeeded) getUser();
  }, [isfetchNeeded]);

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

  const theActualChannel = useMemo(
    () => channels.find((c) => c.channelId == channel),
    [channels, channel]
  );

  useEffect(() => {
    if (theActualChannel) {
      setMessages(theActualChannel.messages ?? []);
    }
  }, [theActualChannel]);

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
  const MemberItem = ({
    member,
    onClick,
  }: {
    member: any;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className='flex items-center gap-2 p-2 hover:bg-gray-700/50 rounded-md cursor-pointer transition-colors'
    >
      <div className='w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center'>
        {member.username.charAt(0).toUpperCase()}
      </div>
      <span className='text-sm'>{member.username}</span>
    </button>
  );

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
                      className={`flex items-center gap-2 w-full pl-6 pr-2 py-1.5 hover:bg-gray-700/30 hover:text-gray-200 rounded-md transition-colors duration-150 ${
                        c.channelId === channel
                          ? 'bg-gray-700/50 text-white'
                          : ''
                      }`}
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
                  className={`flex items-center gap-2 w-full px-2 py-1.5 hover:bg-gray-700/30 hover:text-gray-200 rounded-md transition-colors duration-150 ${
                    rc.channelId === channel ? 'bg-gray-700/50 text-white' : ''
                  }`}
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

          <div className='flex-1 flex flex-col bg-gray-700/20'>
            {theActualChannel && (
              <div className='border-b border-gray-700 p-4 bg-gray-800/30'>
                <div className='flex items-center gap-2'>
                  {theActualChannel.type === ChannelType.TEXT ? (
                    <Hash className='h-5 w-5 text-gray-400' />
                  ) : (
                    <Mic className='h-5 w-5 text-gray-400' />
                  )}
                  <h2 className='font-semibold'>{theActualChannel.name}</h2>
                </div>
                <p className='text-sm text-gray-400 mt-1'>
                  {theActualChannel.description || 'No description'}
                </p>
              </div>
            )}
            <div className='flex-1 overflow-hidden flex flex-col'>
              <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                {!isConnected ? (
                  <div className='flex items-center justify-center h-full'>
                    <div className='bg-gray-800/50 p-4 rounded-lg text-center'>
                      <p className='text-gray-300'>Connecting to chat...</p>
                      <p className='text-sm text-gray-500 mt-1'>
                        Please wait while we establish the connection
                      </p>
                    </div>
                  </div>
                ) : messages.length === 0 ? (
                  <div className='flex items-center justify-center h-full'>
                    <div className='bg-gray-800/50 p-4 rounded-lg text-center'>
                      <p className='text-gray-300'>No messages yet</p>
                      <p className='text-sm text-gray-500 mt-1'>
                        Be the first to start the conversation!
                      </p>
                    </div>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={`${msg.timestamp}-${msg.sender.id}`}
                      className='flex gap-3 p-3 hover:bg-gray-800/30 rounded-lg transition-colors'
                    >
                      <button
                        onClick={() => {
                          setSelectedMember(msg.sender);
                          setIsModalOpen(ModalType.MEMBER_PROFILE_MODAL);
                        }}
                      >
                        <div className='flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center'>
                          {msg.sender.username.charAt(0).toUpperCase()}
                        </div>
                      </button>
                      <div className='flex-1'>
                        <div className='flex items-baseline gap-2'>
                          <span className='font-medium text-blue-400'>
                            {msg.sender.username}
                          </span>
                          <span className='text-xs text-gray-500'>
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                        <p className='mt-1 text-gray-100'>{msg.message}</p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className='p-4 border-t border-gray-700 bg-gray-800/30'>
                <div className='flex items-center gap-2'>
                  <input
                    className='flex-1 p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400'
                    placeholder={`Message ${theActualChannel?.name || 'channel'}`}
                    value={currentMsg}
                    onChange={(e) => setcurrentMsg(e.target.value)}
                    disabled={!isConnected}
                    onKeyPress={(e) => {
                      if (
                        e.key === 'Enter' &&
                        currentMsg.trim() &&
                        isConnected
                      ) {
                        sendMessage(currentMsg, Date.now(), userInfo);
                      }
                    }}
                  />
                  <button
                    className='px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                    onClick={() =>
                      sendMessage(currentMsg, Date.now(), userInfo)
                    }
                    disabled={!currentMsg.trim() || !isConnected}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
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
                  <MemberItem
                    key={member.userId}
                    member={member}
                    onClick={() => {
                      setSelectedMember(member);
                      setIsModalOpen(ModalType.MEMBER_PROFILE_MODAL);
                    }}
                  />
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
