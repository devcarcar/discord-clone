'use client';

import { Search, X } from 'lucide-react';

export default function SearchModal({
  searchRef,
  inputRef,
  searchQuery,
  setSearchQuery,
  setIsModalOpen,
  searchResults,
}: {
  searchRef: any;
  inputRef: any;
  searchQuery: any;
  setSearchQuery: any;
  setIsModalOpen: any;
  searchResults: any;
}) {
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'>
      <div
        ref={searchRef}
        className='bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 border border-gray-700 p-4'
      >
        <div className='flex items-center border-b border-gray-700 pb-3'>
          <Search className='w-5 h-5 text-gray-400 mr-3' />
          <input
            ref={inputRef}
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='bg-transparent border-none outline-none text-white flex-1 placeholder-gray-500'
            placeholder='Search messages, groups, or people...'
            autoFocus
          />
          <button
            onClick={() => setIsModalOpen(false)}
            className='p-1 rounded-full hover:bg-gray-700 ml-2'
          >
            <X className='w-5 h-5 text-gray-400' />
          </button>
        </div>

        {searchQuery && (
          <div className='mt-4'>
            <p className='px-2 pb-2 text-gray-400 text-sm'>
              Results for <span className='text-white'>"{searchQuery}"</span>
            </p>
            <div className='space-y-1'>
              {searchResults
                .filter((item: any) =>
                  item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item: any) => (
                  <button
                    key={item.name}
                    className='w-full text-left p-3 rounded-md hover:bg-gray-700/50 transition-colors flex items-center gap-2'
                  >
                    <Search className='w-4 h-4 text-gray-400 flex-shrink-0' />
                    <span className='truncate'>{item.name}</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
