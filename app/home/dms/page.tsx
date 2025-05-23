'use client';
import Navbar from '@/components/Navbar';
import DmsList from '@/components/dms';
import axios from 'axios';
import { useState } from 'react';

export default function DmsPage() {
  let userId;
  async function validate() {
    const res = await axios.get('/api/users/getDms');
    userId = res.data.data.userId;
  }
  validate();
  return (
    <div>
      <Navbar page={2} />
      <DmsList />
    </div>
  );
}
