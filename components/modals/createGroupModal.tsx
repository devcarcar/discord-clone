import { UploadDropzone } from '@/utils';

export default function createGroupModal({
  searchRef,
  pic,
  setPic,
  groupName,
  setGroupName,
  handleCreateGroup,
}: {
  searchRef: any;
  pic: any;
  setPic: any;
  groupName: any;
  setGroupName: any;
  handleCreateGroup: any;
}) {
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'>
      <div
        ref={searchRef}
        className='bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 border border-gray-700 p-4'
      >
        <div className='flex flex-col p-6 items-center space-y-4 pb-3'>
          <h1 className='text-2xl'>Create a group</h1>
          <img
            className='w-32 h-32 rounded-full object-cover border-2 border-gray-600'
            alt='Group'
            src={
              pic ||
              'https://wallpapers.com/images/high/black-screen-texture-acimaxbsvtwb9dwq.png'
            }
          ></img>
          <UploadDropzone
            endpoint={'imageUploader'}
            onClientUploadComplete={(res) => {
              console.log('Files: ', res);
              setPic(res[0].ufsUrl);
              alert('Upload Completed');
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
          <div className='w-full'>
            <h1 className='text-left mb-2'>Group Name</h1>
            <input
              type='text'
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className='w-full bg-gray-700 rounded px-3 py-2 text-white'
              placeholder='Set a name'
            />
          </div>
          <button
            onClick={handleCreateGroup}
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
}
