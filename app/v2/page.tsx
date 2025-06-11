import {
  Bell,
  Globe,
  Hash,
  IdCard,
  Mail,
  MessageCircle,
  MessageSquare,
  Mic,
  Plus,
  Search,
  Settings,
  Star,
  User,
  Users,
} from 'lucide-react';

export default function HomePage() {
  const friends = [
    // {
    //   id: '111',
    //   name: 'Carlos',
    //   last_seen: '2 hours ago',
    // },
    // {
    //   id: '222',
    //   name: 'Carlos',
    //   last_seen: '2 hours ago',
    // },
    // {
    //   id: '333',
    //   name: 'Carlos',
    //   last_seen: '2 hours ago',
    // },
    {
      id: '977',
      name: 'Carlos',
      last_seen: '2 hours ago',
    },
    {
      id: '868',
      name: 'Carlos',
      last_seen: '2 hours ago',
    },
    {
      id: '73',
      name: 'Carlos',
      last_seen: '2 hours ago',
    },
  ];
  const groups = [
    // {
    //   id: '444',
    //   name: 'Group 1',
    //   active: 5,
    //   last_msg: 'Hey',
    // },
    // {
    //   id: '555',
    //   name: 'Group 2',
    //   active: 8,
    //   last_msg: 'Aye',
    // },
    // {
    //   id: '666',
    //   name: 'Group 3',
    //   active: 111,
    //   last_msg: 'Bae',
    // },
    {
      id: '499',
      name: 'Group 1',
      active: 5,
      last_msg: 'Hey',
    },
    {
      id: '559',
      name: 'Group 2',
      active: 8,
      last_msg: 'Aye',
    },
    {
      id: '6660',
      name: 'Group 3',
      active: 111,
      last_msg: 'Bae',
    },
  ];
  const communities = [
    {
      id: '777',
      name: 'Brawl Stars',
      members: 200,
    },
    {
      id: '888',
      name: 'Clash Of Clans',
      members: 20000,
    },
    // {
    //   id: '999',
    //   name: 'Carlos',
    //   members: 30979,
    // },
    // {
    //   id: '9999',
    //   name: 'Carlos',
    //   members: 30979,
    // },
    // {
    //   id: '99999',
    //   name: 'Carlos',
    //   members: 30979,
    // },
  ];

  const allOnline = [
    {
      id: 'randi',
      name: 'Randy',
      doing: 'Something',
    },
    {
      id: 'randy',
      name: 'Randi',
      doing: 'Something else',
    },
    {
      id: 'gray',
      name: 'Shady',
      doing: 'TP',
    },
  ];
  return (
    <div className='bg-white w-screen h-screen flex flex-col overflow-hidden'>
      <header>
        <div className='flex w-full items-center justify-between p-4 border-b border-gray-200'>
          <div className='flex items-center'>
            <div className='flex items-center text-indigo-600'>
              <MessageCircle className='h-6 w-6' />
              <h1 className='text-xl'>Chat</h1>
            </div>
            <nav className='px-5 space-x-5'>
              <a href='/' className=' text-gray-500'>
                Home
              </a>
              <a href='/' className=' text-gray-500'>
                Groups
              </a>
              <a href='/' className=' text-gray-500'>
                DMs
              </a>
              <a href='/' className=' text-gray-500'>
                Explore
              </a>
              <a href='/' className=' text-gray-500'>
                Premium
              </a>
            </nav>
          </div>
          <div className='flex text-gray-600 space-x-5'>
            <Search className='h-6 w-6' />
            <Bell className='h-6 w-6' />
            <Mail className='h-6 w-6' />
          </div>
        </div>
      </header>

      <div className='flex h-full flex-1 overflow-hidden'>
        <div className='flex flex-col border-r h-full overflow-hidden w-64 border-gray-200'>
          <div className='p-4 space-y-1 flex-1 overflow-y-auto'>
            <h1 className='text-gray-500 text-xs p-2 font-semibold'>
              DIRECT MESSAGES
            </h1>
            <div>
              {friends.map((i) => (
                <div
                  className='flex items-center p-2 hover:bg-gray-50 rounded-lg'
                  key={i.id}
                >
                  <div className='relative'>
                    <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                      <User className='h-4 w-4 text-indigo-600' />
                    </div>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-gray-400`}
                    ></div>
                  </div>
                  <div className='px-2'>
                    <h1 className='font-medium text-gray-900'>{i.name}</h1>
                    <h2 className='text-xs text-gray-500'>{i.last_seen}</h2>
                  </div>
                </div>
              ))}
            </div>
            <h1 className='text-gray-500 text-xs font-semibold p-2'>GROUPS</h1>
            <div>
              {groups.map((i) => (
                <div
                  className='flex items-center p-2 rounded-lg hover:bg-gray-50'
                  key={i.id}
                >
                  <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                    <Users className='h-4 w-4 text-indigo-600' />
                  </div>
                  <div className='px-2'>
                    <h1 className='font-medium text-gray-900'>{i.name}</h1>
                    <h2 className='text-xs text-gray-500'>
                      {i.active} Members online
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <h1 className='text-gray-500 text-xs font-semibold p-2'>
              COMMUNITIES
            </h1>
            <div>
              {communities.map((i) => (
                <div
                  className='flex items-center p-2 hover:bg-gray-50 rounded-lg'
                  key={i.id}
                >
                  <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                    <Globe className='h-6 w-6 text-gray-600' />
                  </div>
                  <div className='px-2'>
                    <h1 className='font-medium text-gray-900'>{i.name}</h1>
                    <h2 className='text-xs text-gray-500'>
                      {i.members} Members
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='border-t p-3 flex items-center'>
            <div className='relative'>
              <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                <User className='h-5 w-5 text-indigo-600' />
              </div>
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-gray-400`}
              ></div>
            </div>
            <div className='flex flex-1 justify-between items-center'>
              <div className='px-2'>
                <h1 className='text-gray-900 font-medium'>User ABC</h1>
                <h1 className='text-gray-500 text-xs'>@userabc</h1>
              </div>
              <div>
                <IdCard className='text-gray-500' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-full w-full flex-1 '>
          <div className='flex-1 overflow-auto bg-gray-100'>
            <div className='p-6 '>
              <div className='rounded-lg shadow-md border border-gray-200 bg-white w-full'>
                <div className='p-4 space-y-2'>
                  <div className='flex w-full justify-between'>
                    <h1 className='font-bold text-black text-2xl'>
                      Welcome Back!
                    </h1>
                    <button className='bg-indigo-600 rounded-lg p-2 flex'>
                      <Plus />
                      Start Chatting
                    </button>
                  </div>
                  <h1 className='text-gray-500'>
                    Connect with friends, ..., and ...
                  </h1>
                  <div className='w-full grid grid-cols-3 gap-x-2'>
                    <div className='rounded-lg border p-6'>
                      <div className='rounded-full h-8 w-8 flex items-center justify-center bg-indigo-100'>
                        <Users className='text-indigo-600' />
                      </div>
                      <h1 className='font-bold text-gray-900'>Friends</h1>
                      <h2 className='text-gray-500'>
                        Connect with your friends
                      </h2>
                    </div>
                    <div className='rounded-lg border p-6'>
                      <div className='rounded-full h-8 w-8 flex items-center justify-center bg-purple-100'>
                        <Hash className='text-purple-600' />
                      </div>
                      <h1 className='font-bold text-gray-900'>Channels</h1>
                      <h2 className='text-gray-500'>Join channels</h2>
                    </div>
                    <div className='rounded-lg border p-6'>
                      <div className='rounded-full h-8 w-8 flex items-center justify-center bg-green-100'>
                        <Globe className='text-green-600' />
                      </div>
                      <h1 className='font-bold text-gray-900'>Discover</h1>
                      <h2 className='text-gray-500'>
                        Connect with your friends
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6 grid grid-cols-2 gap-6'>
              <div className='rounded-lg shadow-md border border-gray-200 bg-white'>
                <div className=''>
                  <div className='flex justify-between p-4'>
                    <h1 className='text-gray-900 font-bold'>
                      Recent Conversations
                    </h1>
                    <button className='text-indigo-600'>View all</button>
                  </div>
                  <div className='grid grid-rows-3'>
                    {friends.map((i) => (
                      <div
                        key={i.id}
                        className='border-t border-gray-200 p-3 flex'
                      >
                        <div className='flex items-center w-full'>
                          <div className='relative'>
                            <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                              <User className='h-5 w-5 text-indigo-600' />
                            </div>
                            <div
                              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-gray-400`}
                            ></div>
                          </div>
                          <div className='ml-3 flex-1 w-full'>
                            <div className='flex justify-between'>
                              <h1 className='font-medium text-gray-900 truncate'>
                                {i.name}
                              </h1>
                              <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>
                                {i.last_seen}
                              </span>
                            </div>
                            <p className='text-sm text-gray-500 truncate'>
                              some msg
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='rounded-lg shadow-md border border-gray-200 bg-white'>
                <div className=''>
                  <div className='flex justify-between p-4'>
                    <h1 className='text-gray-900 font-bold'>Your Groups</h1>
                    <button className='text-indigo-600'>Create Group</button>
                  </div>
                  <div className='grid grid-rows-3'>
                    {friends.map((i) => (
                      <div
                        key={i.id}
                        className='border-t border-gray-200 p-3 flex'
                      >
                        <div className='flex items-center w-full'>
                          <div className='relative'>
                            <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                              <User className='h-5 w-5 text-indigo-600' />
                            </div>
                            <div
                              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-gray-400`}
                            ></div>
                          </div>
                          <div className='ml-3 flex-1 min-w-0'>
                            <div className='flex justify-between'>
                              <h1 className='font-medium text-gray-900 truncate'>
                                {i.name}
                              </h1>
                              <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>
                                {i.last_seen}
                              </span>
                            </div>
                            <p className='text-sm text-gray-500 truncate'>
                              some msg
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-l w-80 border-gray-200'>
            <div className='p-4 border-b border-gray-200'>
              <h1 className='font-bold text-gray-900'>Online Friends</h1>
            </div>
            <div className='p-2 border-b border-gray-200'>
              {allOnline.map((i) => (
                <div
                  key={i.id}
                  className='flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg'
                >
                  <div className='h-12 w-12 rounded-full bg-gray-200 flex-shrink-0'></div>{' '}
                  <div className='flex justify-between items-center w-full'>
                    <div className='space-y-1'>
                      <h1 className='text-gray-900 font-medium'>{i.name}</h1>
                      <span className='text-gray-500 text-sm'>{i.doing}</span>
                    </div>
                    <div className='flex gap-3'>
                      <MessageCircle className='text-gray-500 w-5 h-5' />
                      <Mic className='text-gray-500 w-5 h-5' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='p-4'>
              <h1 className='text-gray-900 font-semibold'>Quick Actions</h1>
              <div className='grid grid-cols-2 grid-rows-2 py-2 gap-3'>
                <div className='bg-indigo-50 p-3 text-indigo-700 hover:bg-indigo-100 rounded-lg flex flex-col items-center justify-center'>
                  <Plus />
                  New Group
                </div>
                <div className='bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg flex flex-col items-center justify-center'>
                  <Globe />
                  Find Community
                </div>
                <div className='bg-green-50 text-green-700 hover:bg-green-100 rounded-lg flex flex-col items-center justify-center'>
                  <Star />
                  Get Premium
                </div>
                <div className='bg-yellow-50 text-yellow-700 hover:bg-yellow-100 rounded-lg flex flex-col items-center justify-center'>
                  <Settings />
                  Settings
                </div>
                <div className='col-span-2 bg-gray-50 rounded-lg p-3 space-y-2'>
                  <h1 className='text-gray-700'>Need help?</h1>
                  <p className='text-gray-700 text-sm'>
                    Check out the help centre for any guides and support
                  </p>
                  <button className='w-full border rounded-lg border-gray-200 px-4 py-2'>
                    <h1 className='text-gray-900'> Visit help center </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
