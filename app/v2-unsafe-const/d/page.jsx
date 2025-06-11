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
  
  export default function DMsPage() {
    // Sample data for conversations
    const conversations = [
      {
        id: '1',
        name: 'Alex Johnson',
        last_msg: 'Hey, are we still meeting tomorrow?',
        timestamp: '2 hours ago',
        unread: 3,
        online: true
      },
      {
        id: '2',
        name: 'Taylor Swift',
        last_msg: 'Thanks for the feedback!',
        timestamp: '5 hours ago',
        unread: 0,
        online: false
      },
      {
        id: '3',
        name: 'Chris Evans',
        last_msg: 'Check out this new design mockup',
        timestamp: 'Yesterday',
        unread: 1,
        online: true
      },
    ];
  
    const suggestedFriends = [
      { id: 'sf1', name: 'Jamie Smith', mutual: 12 },
      { id: 'sf2', name: 'Morgan Lee', mutual: 8 },
      { id: 'sf3', name: 'Jordan Kim', mutual: 5 },
    ];
  
    const pinnedMessages = [
      {
        id: 'pm1',
        content: 'Meeting link for Friday',
        from: 'Alex Johnson',
        time: '2 days ago'
      },
      {
        id: 'pm2',
        content: 'Project resources folder',
        from: 'Taylor Swift',
        time: '1 week ago'
      },
    ];
  
    // Reuse data from sources
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
    ];
  
    return (
      <div className='bg-white w-screen h-screen flex flex-col overflow-hidden'>
        {/* Header (Same as both sources) */}
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
                <a href='/' className='text-indigo-600 font-medium'> {/* Active state */}
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
          {/* Left Sidebar (Same as both sources) */}
          <div className='flex flex-col border-r h-full overflow-hidden w-64 border-gray-200'>
            <div className='p-4 space-y-1 flex-1 overflow-y-auto'>
              <h1 className='text-gray-500 text-xs p-2 font-semibold'>
                DIRECT MESSAGES
              </h1>
              {/* ... (friends list from sources) */}
              
              <h1 className='text-gray-500 text-xs font-semibold p-2'>GROUPS</h1>
              {/* ... (groups list from sources) */}
              
              <h1 className='text-gray-500 text-xs font-semibold p-2'>
                COMMUNITIES
              </h1>
              {/* ... (communities list from sources) */}
            </div>
            {/* User footer (Same as both sources) */}
            <div className='border-t p-3 flex items-center'>
              {/* ... */}
            </div>
          </div>
  
          {/* Main Content - DM Specific */}
          <div className='flex-1 overflow-auto bg-gray-100'>
            <div className='p-6 '>
              {/* DM Header Card */}
              <div className='rounded-lg shadow-md border border-gray-200 bg-white w-full'>
                <div className='p-6 space-y-2'>
                  <div className='flex w-full items-center justify-between'>
                    <div>
                      <h1 className='font-bold text-black text-2xl'>
                        Direct Messages
                      </h1>
                      <h1 className='text-gray-500'>
                        Chat with your friends and contacts
                      </h1>
                    </div>
                    <button className='bg-indigo-600 rounded-lg p-2 flex text-white items-center'>
                      <Plus className='mr-2' />
                      New Message
                    </button>
                  </div>
                </div>
              </div>
  
              {/* Conversation List */}
              <div className='mt-6 rounded-lg shadow-md border border-gray-200 bg-white'>
                <div className='p-4 flex justify-between items-center border-b border-gray-200'>
                  <h1 className='text-gray-900 font-bold'>All Conversations</h1>
                  <div className='relative'>
                    <Search className='absolute left-3 top-2.5 h-4 w-4 text-gray-400' />
                    <input 
                      type='text' 
                      placeholder='Search messages...' 
                      className='pl-10 pr-4 py-2 border rounded-lg border-gray-200 text-sm'
                    />
                  </div>
                </div>
                <div className='divide-y divide-gray-200'>
                  {conversations.map((convo) => (
                    <div 
                      key={convo.id} 
                      className='p-4 flex items-center hover:bg-gray-50 cursor-pointer'
                    >
                      <div className='relative mr-3'>
                        <div className='w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center'>
                          <User className='h-5 w-5 text-indigo-600' />
                        </div>
                        {convo.online && (
                          <div className='absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500'></div>
                        )}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex justify-between items-baseline'>
                          <h1 className='font-semibold text-gray-900 truncate'>
                            {convo.name}
                          </h1>
                          <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>
                            {convo.timestamp}
                          </span>
                        </div>
                        <p className='text-sm text-gray-500 truncate flex items-center'>
                          {convo.last_msg}
                          {convo.unread > 0 && (
                            <span className='ml-2 bg-indigo-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center'>
                              {convo.unread}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Bottom Section */}
              <div className='mt-6 grid grid-cols-2 gap-6'>
                {/* Pinned Messages */}
                <div className='rounded-lg shadow-md border border-gray-200 bg-white'>
                  <div className='p-4 border-b border-gray-200'>
                    <h1 className='text-gray-900 font-bold'>Pinned Messages</h1>
                  </div>
                  <div className='divide-y divide-gray-200'>
                    {pinnedMessages.map((msg) => (
                      <div key={msg.id} className='p-4'>
                        <p className='text-gray-700'>{msg.content}</p>
                        <div className='flex justify-between mt-2'>
                          <span className='text-xs text-indigo-600'>{msg.from}</span>
                          <span className='text-xs text-gray-500'>{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Friend Suggestions */}
                <div className='rounded-lg shadow-md border border-gray-200 bg-white'>
                  <div className='p-4 flex justify-between items-center border-b border-gray-200'>
                    <h1 className='text-gray-900 font-bold'>Friend Suggestions</h1>
                    <button className='text-indigo-600 text-sm'>See All</button>
                  </div>
                  <div className='divide-y divide-gray-200'>
                    {suggestedFriends.map((friend) => (
                      <div key={friend.id} className='p-4 flex items-center justify-between'>
                        <div className='flex items-center'>
                          <div className='w-10 h-10 rounded-full bg-gray-200 mr-3'></div>
                          <div>
                            <h1 className='font-medium text-gray-900'>{friend.name}</h1>
                            <p className='text-xs text-gray-500'>{friend.mutual} mutual friends</p>
                          </div>
                        </div>
                        <button className='bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm'>
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Sidebar (Same as both sources) */}
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
                  <div className='h-12 w-12 rounded-full bg-gray-200 flex-shrink-0'></div>
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
    );
  }