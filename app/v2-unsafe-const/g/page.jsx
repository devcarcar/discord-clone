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
  
  export default function GroupsPage() {
    const groups = [
      {
        id: '499',
        name: 'Design Enthusiasts',
        active: 12,
        total: 120,
        last_msg: 'Check out these new UI trends!',
        iconColor: 'bg-blue-100 text-blue-600'
      },
      {
        id: '559',
        name: 'React Developers',
        active: 25,
        total: 340,
        last_msg: 'New hooks library released',
        iconColor: 'bg-purple-100 text-purple-600'
      },
      {
        id: '6660',
        name: 'Travel Buddies',
        active: 8,
        total: 78,
        last_msg: 'Planning trip to Bali next month',
        iconColor: 'bg-green-100 text-green-600'
      },
      {
        id: '7701',
        name: 'Photography Club',
        active: 15,
        total: 210,
        last_msg: 'Check out these amazing sunset shots',
        iconColor: 'bg-yellow-100 text-yellow-600'
      },
      {
        id: '8802',
        name: 'Fitness Community',
        active: 32,
        total: 480,
        last_msg: 'New workout challenge starting Monday',
        iconColor: 'bg-red-100 text-red-600'
      },
      {
        id: '9903',
        name: 'Book Lovers',
        active: 7,
        total: 95,
        last_msg: 'New fantasy novel recommendations?',
        iconColor: 'bg-indigo-100 text-indigo-600'
      },
    ];
    
    const recommendedGroups = [
      {
        id: 'rec1',
        name: 'Tech Startups',
        members: 1250,
        category: 'Technology'
      },
      {
        id: 'rec2',
        name: 'Digital Artists',
        members: 890,
        category: 'Art & Design'
      },
      {
        id: 'rec3',
        name: 'Crypto Traders',
        members: 3240,
        category: 'Finance'
      },
      {
        id: 'rec4',
        name: 'Language Exchange',
        members: 5670,
        category: 'Education'
      }
    ];
    
    const allOnline = [
      {
        id: 'randi',
        name: 'Randy',
        doing: 'Online',
      },
      {
        id: 'randy',
        name: 'Randi',
        doing: 'In a meeting',
      },
      {
        id: 'gray',
        name: 'Shady',
        doing: 'Gaming',
      },
    ];
  
    return (
      <div className='bg-white w-screen h-screen flex flex-col overflow-hidden'>
        <header>
          <div className='flex w-full items-center justify-between p-4 border-b border-gray-200'>
            <div className='flex items-center'>
              <div className='flex items-center text-indigo-600'>
                <MessageCircle className='h-6 w-6' />
                <h1 className='text-xl ml-2'>Chat Groups</h1>
              </div>
              <nav className='px-5 space-x-5'>
                <a href='/' className='text-gray-500 hover:text-gray-900'>
                  Home
                </a>
                <a href='/groups' className='text-indigo-600 font-medium'>
                  Groups
                </a>
                <a href='/' className='text-gray-500 hover:text-gray-900'>
                  DMs
                </a>
                <a href='/' className='text-gray-500 hover:text-gray-900'>
                  Explore
                </a>
                <a href='/' className='text-gray-500 hover:text-gray-900'>
                  Premium
                </a>
              </nav>
            </div>
            <div className='flex text-gray-600 space-x-5'>
              <Search className='h-6 w-6 hover:text-gray-900 cursor-pointer' />
              <Bell className='h-6 w-6 hover:text-gray-900 cursor-pointer' />
              <Mail className='h-6 w-6 hover:text-gray-900 cursor-pointer' />
            </div>
          </div>
        </header>
  
        <div className='flex h-full flex-1 overflow-hidden'>
          <div className='flex flex-col border-r h-full overflow-hidden w-64 border-gray-200'>
            <div className='p-6 space-y-1 overflow-y-auto'>
              <h1 className='text-gray-500 text-xs font-semibold'>
                DIRECT MESSAGES
              </h1>
              <div>
                {[...Array(3)].map((_, i) => (
                  <div className='flex items-center py-2' key={`friend-${i}`}>
                    <div className='relative'>
                      <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                        <User className='h-4 w-4 text-indigo-600' />
                      </div>
                      <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-gray-400'></div>
                    </div>
                    <div className='px-2'>
                      <h1 className='font-medium text-gray-900'>Friend {i+1}</h1>
                      <h2 className='text-xs text-gray-500'>2 hours ago</h2>
                    </div>
                  </div>
                ))}
              </div>
              <h1 className='text-gray-500 text-xs font-semibold mt-4'>GROUPS</h1>
              <div>
                {groups.slice(0, 3).map((group, i) => (
                  <div className='flex items-center py-2' key={group.id}>
                    <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                      <Users className='h-4 w-4 text-indigo-600' />
                    </div>
                    <div className='px-2'>
                      <h1 className='font-medium text-gray-900'>{group.name}</h1>
                      <h2 className='text-xs text-gray-500'>
                        {group.active} online
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
              <h1 className='text-gray-500 text-xs font-semibold mt-4'>COMMUNITIES</h1>
              <div>
                {[...Array(2)].map((_, i) => (
                  <div className='flex items-center py-2' key={`comm-${i}`}>
                    <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                      <Globe className='h-4 w-4 text-gray-600' />
                    </div>
                    <div className='px-2'>
                      <h1 className='font-medium text-gray-900'>Community {i+1}</h1>
                      <h2 className='text-xs text-gray-500'>
                        200 Members
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border-t p-3 h-full flex flex-1 items-center mt-auto'>
              <div className='relative'>
                <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                  <User className='h-5 w-5 text-indigo-600' />
                </div>
                <div
                  className='absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-gray-400'
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
              <div className='p-6'>
                <div className='rounded-lg border border-gray-200 bg-white w-full p-6'>
                  <div className='flex justify-between items-center mb-6'>
                    <div>
                      <h1 className='font-bold text-gray-900 text-2xl'>Your Groups</h1>
                      <p className='text-gray-500'>Manage and explore groups you've joined</p>
                    </div>
                    <button className='bg-indigo-600 rounded-lg px-4 py-2 flex items-center text-white hover:bg-indigo-700 transition-colors'>
                      <Plus className='mr-2' />
                      Create New Group
                    </button>
                  </div>
                  
                  <div className='grid grid-cols-3 gap-6 mb-8'>
                    {groups.map(group => (
                      <div key={group.id} className='rounded-lg border border-gray-200 bg-white overflow-hidden transition-transform hover:scale-[1.02]'>
                        <div className='p-5'>
                          <div className='flex items-center mb-4'>
                            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${group.iconColor} mr-3`}>
                              <Users className='h-5 w-5' />
                            </div>
                            <div>
                              <h2 className='font-bold text-gray-900'>{group.name}</h2>
                              <p className='text-sm text-gray-500'>{group.active} online • {group.total} members</p>
                            </div>
                          </div>
                          <p className='text-gray-700 text-sm mb-4'>{group.last_msg}</p>
                          <div className='flex gap-2'>
                            <button className='flex-1 bg-indigo-50 text-indigo-700 font-medium py-2 rounded-lg hover:bg-indigo-100 transition-colors'>
                              View Group
                            </button>
                            <button className='w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50'>
                              <Settings className='text-gray-500 h-4 w-4' />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className='border-t border-gray-200 pt-6'>
                    <div className='flex justify-between items-center mb-6'>
                      <div>
                        <h1 className='font-bold text-gray-900 text-xl'>Recommended Groups</h1>
                        <p className='text-gray-500'>Discover groups you might be interested in</p>
                      </div>
                      <button className='text-indigo-600 hover:text-indigo-800 font-medium'>
                        View All
                      </button>
                    </div>
                    
                    <div className='grid grid-cols-4 gap-4'>
                      {recommendedGroups.map(group => (
                        <div key={group.id} className='rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition-shadow'>
                          <div className='bg-gray-100 rounded-lg w-full h-32 mb-3 flex items-center justify-center'>
                            <Users className='h-10 w-10 text-gray-400' />
                          </div>
                          <h3 className='font-semibold text-gray-900'>{group.name}</h3>
                          <p className='text-sm text-gray-500 mb-2'>{group.category}</p>
                          <div className='flex justify-between items-center'>
                            <span className='text-xs text-gray-500'>{group.members.toLocaleString()} members</span>
                            <button className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200'>
                              Join
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className='mt-6 grid grid-cols-2 gap-6'>
                  <div className='rounded-lg shadow-md border border-gray-200 bg-white'>
                    <div className='p-4'>
                      <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-gray-900 font-bold'>Recent Group Activity</h1>
                        <button className='text-indigo-600'>See all</button>
                      </div>
                      <div className='space-y-3'>
                        {[...Array(3)].map((_, i) => (
                          <div key={`activity-${i}`} className='border-t border-gray-200 pt-3 flex items-start'>
                            <div className='bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3'>
                              <User className='h-4 w-4 text-gray-600' />
                            </div>
                            <div>
                              <p className='text-sm text-gray-700'>
                                <span className='font-medium'>User {i+1}</span> posted in <span className='text-indigo-600'>Group {i+1}</span>
                              </p>
                              <p className='text-xs text-gray-500'>2 hours ago</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className='rounded-lg shadow-md border border-gray-200 bg-white'>
                    <div className='p-4'>
                      <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-gray-900 font-bold'>Popular Categories</h1>
                        <button className='text-indigo-600'>Explore</button>
                      </div>
                      <div className='grid grid-cols-2 gap-3'>
                        {['Technology', 'Gaming', 'Art & Design', 'Education'].map((category, i) => (
                          <div key={i} className='border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer'>
                            <div className='flex items-center'>
                              <div className='bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center mr-3'>
                                <Hash className='h-5 w-5 text-gray-600' />
                              </div>
                              <span className='font-medium text-gray-900'>{category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
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
                        <MessageCircle className='text-gray-500 w-5 h-5 hover:text-indigo-600 cursor-pointer' />
                        <Mic className='text-gray-500 w-5 h-5 hover:text-indigo-600 cursor-pointer' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='p-4'>
                <h1 className='text-gray-900 font-semibold'>Quick Actions</h1>
                <div className='grid grid-cols-2 grid-rows-2 py-2 gap-3'>
                  <div className='bg-indigo-50 p-3 text-indigo-700 rounded-lg flex flex-col items-center justify-center hover:bg-indigo-100 cursor-pointer'>
                    <Plus className='mb-1' />
                    New Group
                  </div>
                  <div className='bg-purple-50 text-purple-700 rounded-lg flex flex-col items-center justify-center hover:bg-purple-100 cursor-pointer'>
                    <Globe className='mb-1' />
                    Find Community
                  </div>
                  <div className='bg-green-50 text-green-700 rounded-lg flex flex-col items-center justify-center hover:bg-green-100 cursor-pointer'>
                    <Star className='mb-1' />
                    Get Premium
                  </div>
                  <div className='bg-yellow-50 text-yellow-700 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-100 cursor-pointer'>
                    <Settings className='mb-1' />
                    Settings
                  </div>
                  <div className='col-span-2 bg-gray-50 rounded-lg p-3 space-y-2'>
                    <h1 className='text-gray-700 font-medium'>Need help with groups?</h1>
                    <p className='text-gray-700 text-sm'>
                      Learn how to create, manage, and grow your communities
                    </p>
                    <button className='w-full border rounded-lg border-gray-200 px-4 py-2 hover:bg-gray-100'>
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