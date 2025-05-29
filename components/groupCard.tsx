'use client';
import { redirect } from 'next/navigation';

export default function GroupCard(group: any) {
  return (
    <div className='group relative' key={group.groupId}>
      <button
        onClick={() => redirect(`/home/groups/${group.groupId}`)}
        className='border-4 border-gray-500 w-full h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden text-left hover:-translate-y-2 transform'
      >
        <div className='flex justify-center p-4'>
          <img
            src={group.icon}
            alt={`${group.name} icon`}
            className='w-16 h-16 object-cover rounded-full border-2 border-gray-200 dark:border-gray-600'
          />
        </div>
        <div className='p-4 text-center'>
          <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-1 truncate'>
            {group.name}
          </h2>
          <p className='text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2'>
            {group.description}
          </p>
          <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4'>
            <span>👥 {group.members?.length || 0} members</span>
            <span>🔥 {group.active || 0} active</span>
          </div>
        </div>
      </button>
    </div>
  );
}
