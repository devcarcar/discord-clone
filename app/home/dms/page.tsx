'use client';
import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';
import Header from '@/components/header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function DmsPage() {
  const [dms, setDms] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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
    </div>
  );
}
