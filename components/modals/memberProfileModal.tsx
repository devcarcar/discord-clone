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
        className='bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 border border-gray-700 p-4'
      >
        <div className='flex flex-col p-6 items-center space-y-4 pb-3'>
          <h1 className='text-xl'>Member Information</h1>

          <div className='w-full'>
            <h1>You are viewing {member.username}'s profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
