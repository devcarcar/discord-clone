'use client';
import Navbar from '@/components/Navbar';
import GroupsList from '@/components/groups';
import Header from '@/components/header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GroupPage() {
  const [groups, setGroups] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const res = await axios.get('/api/users/getUser');
        setGroups(res.data.data.groups);
      } catch (err: any) {}
    }
    fetchGroups();
  }, []);

  return (
    <div className='flex'>
      <div>
        <Navbar page={1} />
      </div>
      <div className='w-full bg-gray-900'>
        <Header setIsSearching={setIsSearching} title='Groups' />
        <GroupsList groups={groups} />
      </div>
    </div>
  );
}
