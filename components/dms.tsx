'use client';
import { redirect } from 'next/navigation';

interface Dm {
  id: string;
  name: string;
  icon: string;
  status: Status;
  active: boolean;
}

enum Status {
  ONLINE = 'ONLINE',
  DND = 'DND',
  OFFLINE = 'OFFLINE',
}
const arr: Dm[] = [
  {
    id: '3423-124912481904891308',
    name: 'user1',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    status: Status.ONLINE,
    active: true,
  },
  {
    id: '3423-124912481904891309',
    name: 'user2',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    status: Status.DND,
    active: true,
  },
  {
    id: '3423-124912481904891310',
    name: 'user3',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    status: Status.ONLINE,
    active: false,
  },
  {
    id: '3423-124912481904891311',
    name: 'user4',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    status: Status.OFFLINE,
    active: false,
  },
  {
    id: '3423-124912481904891312',
    name: 'user5',
    icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
    status: Status.DND,
    active: false,
  },
];

enum StatusIcon {
  ONLINE = '🟢',
  DND = '🔴',
  OFFLINE = '⚪',
}

export default function DmsList({ arr }: { arr: Dm[] }) {
  return (
    <div className='grid grid-cols-5 gap-[100px] p-[50px]'>
      {arr.map((i) => {
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

                <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4'>
                  <span>{StatusIcon[i.status] + ' ' + i.status}</span>
                  {i.active && <span>🔥 active</span>}
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
