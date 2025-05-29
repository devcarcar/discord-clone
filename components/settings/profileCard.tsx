export default function ProfileCard({ user }: { user: any }) {
  return (
    <div>
      <div className='text-center space-y-1 mb-4'>
        <h2 className='text-lg font-bold'>{user.username}</h2>
        <p className='text-gray-400 text-sm'>Premium Member</p>
        <div className='flex items-center justify-center gap-1 text-xs text-green-400'>
          <span className='w-2 h-2 bg-green-500 rounded-full'></span>
          Online
        </div>
      </div>
      <div className='grid grid-cols-3 divide-x divide-gray-700 text-center text-sm border-t border-gray-700 pt-3'>
        <div className='px-2'>
          <p className='font-semibold'>{user.groups.length}</p>
          <p className='text-gray-400'>Groups</p>
        </div>
        <div className='px-2'>
          <p className='font-semibold'>{user.dms.length}</p>
          <p className='text-gray-400'>Friends</p>
        </div>
        <div className='px-2'>
          <p className='font-semibold'>2y</p>
          <p className='text-gray-400'>Member</p>
        </div>
      </div>
    </div>
  );
}
