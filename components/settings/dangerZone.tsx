import { ChevronRight, TriangleAlert } from 'lucide-react';

export default function DangerZone() {
  return (
    <div className='border border-red-400/30 rounded-lg p-6 bg-gray-800/50'>
      <h2 className='text-lg font-semibold mb-6 flex items-center gap-2'>
        <TriangleAlert className='text-red-500 w-5 h-5 ' />
        Danger Zone
      </h2>
      <div className='grid gap-y-2'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Delete Account</p>
            <p className='text-sm text-gray-400'>
              Permanently delete your Chat account
            </p>
          </div>
          <button>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
