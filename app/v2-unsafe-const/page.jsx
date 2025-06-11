import {
    Bell,
    Globe,
    Hash,
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
  
  export default function TemplatePagev2() {
    const friends = [
      {
        id: '111',
        name: 'Carlos',
        last_seen: '2 hours ago',
        status: 'online',
      },
      {
        id: '222',
        name: 'Sophia',
        last_seen: '5 minutes ago',
        status: 'online',
      },
      {
        id: '333',
        name: 'Alex',
        last_seen: '30 minutes ago',
        status: 'idle',
      },
      {
        id: '977',
        name: 'Jamie',
        last_seen: 'yesterday',
        status: 'offline',
      },
      {
        id: '868',
        name: 'Taylor',
        last_seen: '1 hour ago',
        status: 'dnd',
      },
      {
        id: '73',
        name: 'Morgan',
        last_seen: 'just now',
        status: 'online',
      },
    ];
    
    const groups = [
      {
        id: '444',
        name: 'Gaming Squad',
        active: 5,
        last_msg: 'Let\'s play tonight!',
        unread: 3,
      },
      {
        id: '555',
        name: 'Work Team',
        active: 8,
        last_msg: 'Meeting at 3pm',
        unread: 0,
      },
      {
        id: '666',
        name: 'Family Group',
        active: 11,
        last_msg: 'Mom sent a photo',
        unread: 1,
      },
      {
        id: '499',
        name: 'College Friends',
        active: 5,
        last_msg: 'Reunion next month?',
        unread: 0,
      },
      {
        id: '559',
        name: 'Book Club',
        active: 8,
        last_msg: 'Next book selection',
        unread: 5,
      },
      {
        id: '6660',
        name: 'Travel Buddies',
        active: 11,
        last_msg: 'Flight booked!',
        unread: 2,
      },
    ];
    
    const communities = [
      {
        id: '777',
        name: 'Brawl Stars',
        members: 200,
        icon: '🎮',
      },
      {
        id: '888',
        name: 'Clash Of Clans',
        members: 20000,
        icon: '🏰',
      },
      {
        id: '999',
        name: 'Photography',
        members: 30979,
        icon: '📷',
      },
      {
        id: '9999',
        name: 'Cooking',
        members: 15432,
        icon: '🍳',
      },
      {
        id: '99999',
        name: 'Fitness',
        members: 8765,
        icon: '💪',
      },
    ];
  
    const allOnline = [
      {
        id: 'randi',
        name: 'Randy',
        doing: 'Playing Brawl Stars',
        status: 'online',
      },
      {
        id: 'randy',
        name: 'Randi',
        doing: 'Working on project',
        status: 'idle',
      },
      {
        id: 'gray',
        name: 'Shady',
        doing: 'Streaming',
        status: 'dnd',
      },
      {
        id: 'mia',
        name: 'Mia',
        doing: 'Available',
        status: 'online',
      },
      {
        id: 'leo',
        name: 'Leo',
        doing: 'In a meeting',
        status: 'dnd',
      },
    ];
    
    const statusColors = {
      online: 'bg-green-500',
      idle: 'bg-yellow-500',
      dnd: 'bg-red-500',
      offline: 'bg-gray-400',
    };
  
    return (
      <div className='bg-gray-50 w-screen h-screen flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='bg-white shadow-sm'>
          <div className='flex w-full items-center justify-between p-4'>
            <div className='flex items-center space-x-8'>
              <div className='flex items-center text-indigo-600 space-x-2'>
                <MessageCircle className='h-6 w-6' />
                <h1 className='text-xl font-semibold'>Chatter</h1>
              </div>
              <nav className='flex space-x-6'>
                <a href='/' className='text-gray-600 hover:text-indigo-600 transition-colors'>
                  Home
                </a>
                <a href='/' className='text-gray-600 hover:text-indigo-600 transition-colors'>
                  Groups
                </a>
                <a href='/' className='text-gray-600 hover:text-indigo-600 transition-colors'>
                  DMs
                </a>
                <a href='/' className='text-gray-600 hover:text-indigo-600 transition-colors'>
                  Explore
                </a>
                <a href='/' className='text-gray-600 hover:text-indigo-600 transition-colors'>
                  Premium
                </a>
              </nav>
            </div>
            <div className='flex items-center space-x-6'>
              <div className='relative'>
                <Search className='h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2' />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className='pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white'
                />
              </div>
              <div className='flex space-x-5 text-gray-500'>
                <button className='hover:text-indigo-600 transition-colors relative'>
                  <Bell className='h-5 w-5' />
                  <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>3</span>
                </button>
                <button className='hover:text-indigo-600 transition-colors'>
                  <Mail className='h-5 w-5' />
                </button>
              </div>
              <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                <User className='text-indigo-600 h-5 w-5' />
              </div>
            </div>
          </div>
        </header>
  
        {/* Main Content */}
        <div className='flex h-full flex-1 overflow-hidden'>
          {/* Left Sidebar */}
          <div className='flex flex-col border-r h-full overflow-hidden w-64 bg-white'>
            <div className='p-3 overflow-y-auto flex-1'>
              <div className='mb-6'>
                <h1 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2'>
                  DIRECT MESSAGES
                </h1>
                <div className='space-y-1'>
                  {friends.map((friend) => (
                    <div 
                      className='p-2 flex items-center rounded-lg hover:bg-gray-50 cursor-pointer transition-colors' 
                      key={friend.id}
                    >
                      <div className='relative'>
                        <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                          <User className='h-4 w-4 text-indigo-600' />
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusColors[friend.status] || 'bg-gray-400'}`}></div>
                      </div>
                      <div className='ml-3 overflow-hidden'>
                        <h1 className='font-medium text-gray-900 truncate'>{friend.name}</h1>
                        <h2 className='text-xs text-gray-500 truncate'>{friend.last_seen}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className='mb-6'>
                <h1 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2'>
                  GROUPS
                </h1>
                <div className='space-y-1'>
                  {groups.map((group) => (
                    <div 
                      className={`p-2 flex items-center rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${group.unread > 0 ? 'bg-indigo-50 hover:bg-indigo-100' : ''}`} 
                      key={group.id}
                    >
                      <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                        <Users className='h-4 w-4 text-indigo-600' />
                      </div>
                      <div className='ml-3 overflow-hidden'>
                        <h1 className='font-medium text-gray-900 truncate'>{group.name}</h1>
                        <h2 className='text-xs text-gray-500 truncate'>{group.active} online • {group.last_msg}</h2>
                      </div>
                      {group.unread > 0 && (
                        <span className='ml-auto bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                          {group.unread}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className='mb-6'>
                <h1 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2'>
                  COMMUNITIES
                </h1>
                <div className='space-y-1'>
                  {communities.map((community) => (
                    <div 
                      className='p-2 flex items-center rounded-lg hover:bg-gray-50 cursor-pointer transition-colors' 
                      key={community.id}
                    >
                      <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-lg'>
                        {community.icon}
                      </div>
                      <div className='ml-3 overflow-hidden'>
                        <h1 className='font-medium text-gray-900 truncate'>{community.name}</h1>
                        <h2 className='text-xs text-gray-500 truncate'>{community.members.toLocaleString()} members</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* User Profile */}
            <div className='border-t p-3 bg-white'>
              <div className='flex items-center'>
                <div className='relative'>
                  <div className='w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center'>
                    <User className='h-5 w-5 text-indigo-700' />
                  </div>
                  <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white'></div>
                </div>
                <div className='ml-3'>
                  <h1 className='font-medium text-gray-900'>User ABC</h1>
                  <h2 className='text-xs text-gray-500'>@userabc</h2>
                </div>
                <button className='ml-auto text-gray-500 hover:text-gray-700'>
                  <Settings className='h-5 w-5' />
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className='flex-1 flex overflow-hidden'>
            {/* Center Content */}
            <div className='flex-1 overflow-y-auto bg-gray-50'>
              <div className='p-6 max-w-6xl mx-auto'>
                {/* Welcome Card */}
                <div className='rounded-xl bg-white shadow-sm border border-gray-200 mb-6 overflow-hidden'>
                  <div className='p-6'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                      <div>
                        <h1 className='font-bold text-2xl text-gray-900 mb-1'>Welcome Back!</h1>
                        <p className='text-gray-500'>
                          Connect with friends, join communities, and explore new groups.
                        </p>
                      </div>
                      <button className='mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 flex items-center justify-center space-x-2 transition-colors'>
                        <Plus className='h-4 w-4' />
                        <span>Start Chatting</span>
                      </button>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                      <div className='rounded-lg border border-gray-200 p-5 hover:border-indigo-300 transition-colors cursor-pointer'>
                        <div className='rounded-full h-10 w-10 flex items-center justify-center bg-indigo-100 mb-3'>
                          <Users className='h-5 w-5 text-indigo-600' />
                        </div>
                        <h1 className='font-bold text-gray-900 mb-1'>Friends</h1>
                        <p className='text-gray-500 text-sm'>
                          Chat with your friends and see what they're up to
                        </p>
                      </div>
                      
                      <div className='rounded-lg border border-gray-200 p-5 hover:border-purple-300 transition-colors cursor-pointer'>
                        <div className='rounded-full h-10 w-10 flex items-center justify-center bg-purple-100 mb-3'>
                          <Hash className='h-5 w-5 text-purple-600' />
                        </div>
                        <h1 className='font-bold text-gray-900 mb-1'>Channels</h1>
                        <p className='text-gray-500 text-sm'>
                          Join topic-based channels and communities
                        </p>
                      </div>
                      
                      <div className='rounded-lg border border-gray-200 p-5 hover:border-green-300 transition-colors cursor-pointer'>
                        <div className='rounded-full h-10 w-10 flex items-center justify-center bg-green-100 mb-3'>
                          <Globe className='h-5 w-5 text-green-600' />
                        </div>
                        <h1 className='font-bold text-gray-900 mb-1'>Discover</h1>
                        <p className='text-gray-500 text-sm'>
                          Find new communities and make new friends
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                  {/* Recent Conversations */}
                  <div className='rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden'>
                    <div className='p-5 border-b border-gray-200'>
                      <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-gray-900'>Recent Conversations</h1>
                        <button className='text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors'>
                          View all
                        </button>
                      </div>
                    </div>
                    <div className='divide-y divide-gray-200'>
                      {friends.slice(0, 4).map((friend) => (
                        <div key={friend.id} className='p-4 hover:bg-gray-50 cursor-pointer transition-colors'>
                          <div className='flex items-center'>
                            <div className='relative'>
                              <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <User className='h-5 w-5 text-indigo-600' />
                              </div>
                              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusColors[friend.status] || 'bg-gray-400'}`}></div>
                            </div>
                            <div className='ml-3 flex-1 min-w-0'>
                              <div className='flex justify-between'>
                                <h1 className='font-medium text-gray-900 truncate'>{friend.name}</h1>
                                <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>{friend.last_seen}</span>
                              </div>
                              <p className='text-sm text-gray-500 truncate'>
                                Last message preview goes here...
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Your Groups */}
                  <div className='rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden'>
                    <div className='p-5 border-b border-gray-200'>
                      <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-gray-900'>Your Groups</h1>
                        <button className='text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors'>
                          Create Group
                        </button>
                      </div>
                    </div>
                    <div className='divide-y divide-gray-200'>
                      {groups.slice(0, 4).map((group) => (
                        <div 
                          key={group.id} 
                          className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${group.unread > 0 ? 'bg-indigo-50 hover:bg-indigo-100' : ''}`}
                        >
                          <div className='flex items-center'>
                            <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                              <Users className='h-5 w-5 text-indigo-600' />
                            </div>
                            <div className='ml-3 flex-1 min-w-0'>
                              <div className='flex justify-between'>
                                <h1 className='font-medium text-gray-900 truncate'>{group.name}</h1>
                                <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>{group.active} online</span>
                              </div>
                              <p className='text-sm text-gray-500 truncate'>
                                {group.last_msg}
                              </p>
                            </div>
                            {group.unread > 0 && (
                              <span className='ml-4 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                {group.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className='w-80 border-l border-gray-200 bg-white overflow-y-auto hidden lg:block'>
              <div className='p-4 border-b border-gray-200 sticky top-0 bg-white z-10'>
                <h1 className='font-bold text-gray-900'>Online Friends</h1>
              </div>
              
              <div className='p-3 space-y-2'>
                {allOnline.map((friend) => (
                  <div
                    key={friend.id}
                    className='flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors'
                  >
                    <div className='relative'>
                      <div className='h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center'>
                        <User className='h-5 w-5 text-indigo-600' />
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusColors[friend.status] || 'bg-gray-400'}`}></div>
                    </div>
                    <div className='flex justify-between items-center w-full overflow-hidden'>
                      <div className='min-w-0'>
                        <h1 className='text-gray-900 font-medium truncate'>{friend.name}</h1>
                        <span className='text-gray-500 text-sm truncate'>{friend.doing}</span>
                      </div>
                      <div className='flex gap-3 ml-2'>
                        <button className='text-gray-500 hover:text-indigo-600 transition-colors'>
                          <MessageCircle className='w-5 h-5' />
                        </button>
                        <button className='text-gray-500 hover:text-indigo-600 transition-colors'>
                          <Mic className='w-5 h-5' />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className='p-4 border-t border-gray-200'>
                <h1 className='text-gray-900 font-semibold mb-3'>Quick Actions</h1>
                <div className='grid grid-cols-2 gap-3'>
                  <button className='bg-indigo-50 p-3 text-indigo-700 rounded-lg flex flex-col items-center justify-center hover:bg-indigo-100 transition-colors'>
                    <Plus className='h-5 w-5 mb-1' />
                    <span className='text-sm'>New Group</span>
                  </button>
                  <button className='bg-purple-50 p-3 text-purple-700 rounded-lg flex flex-col items-center justify-center hover:bg-purple-100 transition-colors'>
                    <Globe className='h-5 w-5 mb-1' />
                    <span className='text-sm'>Find Community</span>
                  </button>
                  <button className='bg-green-50 p-3 text-green-700 rounded-lg flex flex-col items-center justify-center hover:bg-green-100 transition-colors'>
                    <Star className='h-5 w-5 mb-1' />
                    <span className='text-sm'>Get Premium</span>
                  </button>
                  <button className='bg-yellow-50 p-3 text-yellow-700 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-100 transition-colors'>
                    <Settings className='h-5 w-5 mb-1' />
                    <span className='text-sm'>Settings</span>
                  </button>
                </div>
                
                <div className='mt-4 bg-gray-50 rounded-lg p-4'>
                  <h1 className='text-gray-700 font-medium mb-1'>Need help?</h1>
                  <p className='text-gray-600 text-sm mb-3'>
                    Check out the help center for any guides and support
                  </p>
                  <button className='w-full bg-white border border-gray-200 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition-colors'>
                    Visit Help Center
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }