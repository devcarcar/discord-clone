import { CalendarIcon, Hash, Mail, UserPlus } from 'lucide-react';
import { ParseStatus } from '../dms';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';

export default function MemberProfileModal({
  me,
  modalRef,
  member,
}: {
  me: any;
  modalRef: any;
  member: any;
}) {
  async function makeNewDm(u1: string, u2: string) {
    await axios.post('/api/dms', {
      user1: u1,
      user2: u2,
    });
  }
  const searcher = [...me.dms, ...member.dms];
  function findThatElement(searcher: any[]) {
    const arr: any[] = [];
    let found = null;
    searcher.forEach((i) => {
      console.log(i, arr, searcher);
      if (arr.includes(i)) {
        found = i;
      } else {
        arr.push(i);
      }
    });
    return found;
  }
  const router = useRouter();
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'>
      <div
        ref={modalRef}
        className='bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 border border-gray-700 overflow-hidden'
      >
        <div className='bg-gray-900 p-6 flex flex-col items-center'>
          <div className='relative'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-4xl font-bold'>
              {member.username.charAt(0).toUpperCase()}
            </div>
            {member.status === 0 && (
              <div className='absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900'></div>
            )}
          </div>
          <h1 className='text-xl font-bold mt-4'>{member.username}</h1>
          {member.status && (
            <p className='text-gray-400 text-sm mt-1'>
              {ParseStatus[member.status]}
            </p>
          )}
        </div>

        <div className='p-6 space-y-4'>
          <div className='space-y-3'>
            <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
              About
            </h2>
            <div className='bg-gray-700/50 rounded-lg p-4 space-y-2'>
              {member.bio ? (
                <p className='text-gray-300'>{member.bio}</p>
              ) : (
                <p className='text-gray-500 italic'>No bio provided</p>
              )}
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <CalendarIcon className='h-5 w-5 text-gray-500' />
            <div>
              <p className='text-sm text-gray-400'>Member since</p>
              <p className='text-gray-300'>
                {new Date(member.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <CalendarIcon className='h-5 w-5 text-gray-500' />
            <div>
              <p className='text-sm text-gray-400'>Last seen</p>
              <p className='text-gray-300'>
                {new Date(member.last_seen).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 p-4 flex justify-around space-x-2'>
          <button
            onClick={() =>
              router.push(`/home/dms/${findThatElement(searcher)}`)
            }
            className='flex-1 flex items-center justify-center py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors'
          >
            Message
          </button>
          <button
            onClick={() => makeNewDm(me.userId, member.userId)}
            className='py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors'
          >
            <UserPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
