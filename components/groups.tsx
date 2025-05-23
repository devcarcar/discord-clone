'use client';
import { redirect } from 'next/navigation';

interface Group {
  id: string;
  name: string;
  description: string;
  icon: string;
  members: number;
  activity: number;
}

const arr: Group[] = [
  {
    id: '3423-124912481904891308',
    name: 'Group 1',
    description: 'Group 1 desc',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    members: 12,
    activity: 2,
  },
  {
    id: '3423-124912481904891309',
    name: 'Group 2',
    description: 'Group 2 desc',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    members: 12,
    activity: 2,
  },
  {
    id: '3423-124912481904891310',
    name: 'Group 3',
    description: 'Group 3 desc',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    members: 12,
    activity: 2,
  },
  {
    id: '3423-124912481904891311',
    name: 'Group 4',
    description: 'Group 4 desc',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    members: 13,
    activity: 2,
  },
];

export default function GroupsList({ groups }: { groups: Group[] }) {
  return (
    <div className='grid grid-cols-3 gap-[100px] p-[50px]'>
      {groups.map((i) => {
        return (
          <div className='group relative' key={i.id}>
            <button
              onClick={() => redirect(`/home/groups/${i.id}`)}
              className='border-4 border-white w-full h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden text-left hover:-translate-y-2 transform'
            >
              <div className='flex justify-center p-4'>
                <img
                  src={i.icon}
                  alt={`${i.name} icon`}
                  className='w-16 h-16 object-cover rounded-full border-2 border-gray-200 dark:border-gray-600'
                />
              </div>
              <div className='p-4 text-center'>
                <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-1 truncate'>
                  {i.name}
                </h2>
                <p className='text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2'>
                  {i.description}
                </p>
                <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4'>
                  <span>👥 {i.members} members</span>
                  <span>🔥 {i.activity} active</span>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
