'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChannelType, ModalType } from '@/helper';
import { ChevronDown, Hash, Mic, Settings } from 'lucide-react';
import Header from '@/components/header';
import axios from 'axios';
import SearchModal from '@/components/modals/searchModal';
import MemberProfileModal from '@/components/modals/memberProfileModal';

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
  // const params = useParams();

  // const { group, channel } = params;
  // const [selectedMember, setSelectedMember] = useState<any>();
  // const [groups, setGroups] = useState<any[]>([]);
  // const [messages, setMessages] = useState<any[]>([]);
  // const [searchResults, setSearchResults] = useState<any[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState<false | ModalType>(false);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [isLoading, setisLoading] = useState(true);
  // const [groupObject, setGrpObj] = useState<any>({ channels: [] });
  // const [dms, setDms] = useState<any[]>([]);
  // const [userInfo, setuserInfo] = useState<any>();
  // const [currentMsg, setcurrentMsg] = useState<string>('');
  // const [isConnected, setIsConnected] = useState<boolean>(false);
  // const [isfetchNeeded, setisfetchNeeded] = useState<boolean>(true);
  // const searchRef = useRef<HTMLDivElement>(null);
  // const inputRef = useRef<HTMLInputElement>(null);
  // const ws = useRef<any>(null);
  // const messagesEndRef = useRef<HTMLDivElement>(null);

  // const [arr, setArr] = useState<any[]>([]);

  // let listOfSearches: string[] = [];
  // groups.forEach((g: any) => listOfSearches.push(g.name));
  // dms.forEach((d: any) => listOfSearches.push(d.name));

  // //useeffects
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       searchRef.current &&
  //       !searchRef.current.contains(event.target as Node)
  //     ) {
  //       setIsModalOpen(false);
  //     }
  //   };

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === 'Escape') {
  //       setIsModalOpen(false);
  //     }
  //   };

  //   if (isModalOpen) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //     document.addEventListener('keydown', handleKeyDown);
  //     inputRef.current?.focus();
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [isModalOpen]);

  // useEffect(() => {
  //   async function fetchThatGroup() {
  //     try {
  //       const res = await axios.get(`/api/groups/${group}`);
  //       setGrpObj(res.data.data);
  //     } catch (e: any) {
  //       throw new Error('Internal Error');
  //     } finally {
  //       setisLoading(false);
  //     }
  //   }
  //   fetchThatGroup();
  // }, [group]);

  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const res = await axios.get(`/api/users/me`);
  //       const { data } = res.data;
  //       const { groups, dms } = data;
  //       setuserInfo(data);
  //       setGroups(groups);
  //       setDms(dms);
  //       setSearchResults([...dms, ...groups]);
  //     } catch (e: any) {
  //       throw new Error('Internal Error');
  //     } finally {
  //       setisLoading(false);
  //     }
  //   }
  //   if (isfetchNeeded) getUser();
  // }, [isfetchNeeded]);

  // const channels: any[] = groupObject.channels;
  // const categories = channels.filter((c) => c.type === ChannelType.CATEGORY);
  // categories.map((cat) => (cat.channelList = []));

  // channels.forEach((c: any) => {
  //   if (c.parent) {
  //     const found = categories.find((cat) => cat.channelId === c.parent);
  //     if (found) {
  //       found.channelList = found.channelList || [];
  //       found.channelList.push(c);
  //     }
  //   }
  // });

  // const rootChannels = channels.filter(
  //   (c) => !c.parent && c.type != ChannelType.CATEGORY
  // );

  // const theActualChannel = useMemo(
  //   () => channels.find((c) => c.channelId == channel),
  //   [channels, channel]
  // );

  // useEffect(() => {
  //   if (theActualChannel) {
  //     setMessages(theActualChannel.messages ?? []);
  //   }
  // }, [theActualChannel]);

  // useEffect(() => {
  //   async function getAllMembers() {
  //     let temp: any[] = [];
  //     const res = await axios.get(`/api/groups/${group}`);
  //     const exactGroup = res.data.data;
  //     const res_2 = await axios.get('/api/users');
  //     const allUsers = res_2.data;
  //     exactGroup.members.forEach((m: string) => {
  //       const found = allUsers.find((u: any) => u.userId === m);
  //       if (found) temp.push(found);
  //     });
  //     setArr(temp);
  //   }
  //   getAllMembers();
  // }, []);

  // const router = useRouter();
  // return <div>LOADING</div>;
}
