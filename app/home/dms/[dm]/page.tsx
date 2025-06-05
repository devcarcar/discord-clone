'use client';

import { useParams } from 'next/navigation';

export default function DmPage() {
  const { dm } = useParams();
  return (
    <div className='flex h-screen w-screen'>
      <div className='w-full bg-gray-900'>
        <h1>{dm}</h1>
      </div>
    </div>
  );
}
