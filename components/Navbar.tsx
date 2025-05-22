import Link from 'next/link';

const Navbar = ({ page }: { page: number }) => {
  return (
    <div className='w-full h-20 sticky top-0'>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex justify-between items-center h-full'>
          <ul className='hidden md:flex gap-x-6 text-white'>
            <li>
              <Link
                href='/home/dms'
                className={`px-5 py-2 rounded-lg transition-all duration-200 flex items-center ${
                  page === 2
                    ? 'bg-gray-600 font-medium shadow-inner'
                    : 'hover:bg-gray-700/50'
                }`}
              >
                <p>Dms</p>
              </Link>
            </li>
            <li>
              <Link
                href='/home/groups'
                className={`px-5 py-2 rounded-lg transition-all duration-200 flex items-center ${
                  page === 1
                    ? 'bg-gray-600 font-medium shadow-inner'
                    : 'hover:bg-gray-700/50'
                }`}
              >
                <p>Groups</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
