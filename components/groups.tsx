'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Group {
  groupId: string;
  name: string;
  description: string;
  icon: string;
  members: any[];
  active: number;
}

export default function GroupsList({
  groups,
  setisCreatingGroup,
}: {
  groups: string[];
  setisCreatingGroup: any;
}) {
  const router = useRouter();
  const [groupData, setGroupData] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGroups() {
      setIsLoading(true);
      const fetchedGroups: Group[] = [];

      for (const groupId of groups) {
        try {
          const res = await axios.get(`/api/groups/${groupId}`);
          if (res.data.data) {
            fetchedGroups.push(res.data.data);
          }
        } catch (error) {
          console.error(`Error fetching group ${groupId}:`, error);
        }
      }

      setGroupData(fetchedGroups);
      setIsLoading(false);
    }

    if (groups.length > 0) {
      fetchGroups();
    } else {
      setIsLoading(false);
    }
  }, [groups]);

  if (isLoading) return <div className='p-[50px]'>Loading groups...</div>;
  if (groupData.length === 0)
    return <div className='p-[50px]'>No groups available</div>;

  return (
    <div className='grid grid-cols-3 gap-[50px] p-[50px]'>
      <div className='group relative'>
        <button onClick={() => setisCreatingGroup(true)}>
          Create new group
        </button>
      </div>
      {groupData.map((group) => (
        <div className='group relative' key={group.groupId}>
          <button
            onClick={() => router.push(`/home/groups/${group.groupId}`)}
            className='border-4 border-white w-full h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden text-left hover:-translate-y-2 transform'
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
      ))}
    </div>
  );
}
