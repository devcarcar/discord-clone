import { User } from 'lucide-react';

export default function AccountSettings({
  user,
  setNew_un,
  handleClick,
}: {
  user: any;
  setNew_un: any;
  handleClick: any;
}) {
  return (
    <div className='border border-gray-700 rounded-lg p-6 bg-gray-800/50'>
      <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
        <User className='w-5 h-5 text-blue-400' />
        Account Settings
      </h2>

      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Username
          </label>
          <div className='flex gap-2'>
            <input
              className='flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              placeholder='Enter new username'
              onChange={(e) => setNew_un(e.target.value)}
              defaultValue={user.username}
            />
            <button
              onClick={handleClick}
              className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors'
            >
              Save
            </button>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Email
          </label>
          <div className='flex gap-2'>
            <input
              type='email'
              className='flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white'
              defaultValue={user.email}
              disabled
            />
            <button className='px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors'>
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
