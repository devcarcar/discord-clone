import { Shield } from 'lucide-react';

export default function PrivacySettings() {
  return (
    <div className='border border-gray-700 rounded-lg p-6 bg-gray-800/50'>
      <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
        <Shield className='text-purple-400 w-5 h-5 ' />
        Privacy Settings
      </h2>
      <div className='grid gap-y-2'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Profile Visibility</p>
            <p className='text-sm text-gray-400'>Who can see your profile</p>
          </div>
          <select className='bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-sm'>
            <option>Public</option>
            <option>Friends Only</option>
            <option>Private</option>
          </select>
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Activity Status</p>
            <p className='text-sm text-gray-400'>Show when you're online</p>
          </div>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' className='sr-only peer' defaultChecked />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
