import { ModalType } from '@/helper';
import { Bell, Search, Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
  setIsModalOpen: (value: boolean | any) => void;
}

export default function Header({ setIsModalOpen, title }: HeaderProps) {
  return (
    <header className='border-b border-gray-700 p-4 flex justify-between items-center'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => setIsModalOpen(ModalType.SEARCH_MODAL)}
          className='p-2 rounded-full hover:bg-gray-700 transition-colors'
        >
          <Search className='w-5 h-5 text-gray-400' />
        </button>
        <button className='p-2 rounded-full hover:bg-gray-700 transition-colors relative'>
          <Bell className='w-5 h-5 text-gray-400' />
          <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
        </button>
      </div>
    </header>
  );
}
