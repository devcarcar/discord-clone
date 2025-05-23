'use client';
import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function DmsPage() {
  const [dms, setDms] = useState([]);

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
      <div className='w-[250px]'>
        <Navbar page={2} />
      </div>
      <div className='w-full'>
        <DmsList arr={dms} />
      </div>
    </div>
  );
}
