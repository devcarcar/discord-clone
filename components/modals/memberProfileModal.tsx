import { CalendarIcon, Hash } from 'lucide-react';

export default function MemberProfileModal({
  searchRef,
  member,
}: {
  searchRef: any;
  member: any;
}) {
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'>
      <div
        ref={searchRef}
        className='bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 border border-gray-700 overflow-hidden'
      >
        {/* Profile Header */}
        <div className='bg-gray-900 p-6 flex flex-col items-center'>
          <div className='relative'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-4xl font-bold'>
              {member.username.charAt(0).toUpperCase()}
            </div>
            {member.isOnline && (
              <div className='absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900'></div>
            )}
          </div>
          <h1 className='text-xl font-bold mt-4'>{member.username}</h1>
          {member.status && (
            <p className='text-gray-400 text-sm mt-1'>{member.status}</p>
          )}
        </div>

        {/* Profile Details */}
        <div className='p-6 space-y-4'>
          {/* User Information Section */}
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

          {/* Member Since */}
          <div className='flex items-center space-x-3'>
            <CalendarIcon className='h-5 w-5 text-gray-500' />
            <div>
              <p className='text-sm text-gray-400'>Member since</p>
              <p className='text-gray-300'>{member.createdAt}</p>
            </div>
          </div>

          {/* Roles/Badges */}
          {member.roles?.length > 0 && (
            <div className='space-y-2'>
              <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Roles
              </h2>
              <div className='flex flex-wrap gap-2'>
                {member.roles.map((role: string) => (
                  <span
                    key={role}
                    className='px-2 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300'
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Mutual Servers/Groups */}
          {member.mutualGroups?.length > 0 && (
            <div className='space-y-2'>
              <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Mutual Groups
              </h2>
              <div className='space-y-2'>
                {member.mutualGroups.slice(0, 3).map((group: any) => (
                  <div key={group.id} className='flex items-center space-x-2'>
                    <div className='w-8 h-8 rounded bg-gray-700 flex items-center justify-center'>
                      <Hash className='h-4 w-4 text-gray-400' />
                    </div>
                    <span className='text-gray-300'>{group.name}</span>
                  </div>
                ))}
                {member.mutualGroups.length > 3 && (
                  <p className='text-xs text-gray-500'>
                    +{member.mutualGroups.length - 3} more
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className='border-t border-gray-700 p-4 flex space-x-2'>
          <button className='flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors'>
            Message
          </button>
          <button className='flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors'>
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );
}
