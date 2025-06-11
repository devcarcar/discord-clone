import {
  Bell,
  Globe,
  Hash,
  IdCard,
  Mail,
  MessageCircle,
  Mic,
  Phone,
  Plus,
  Search,
  Settings,
  Star,
  User,
  Users,
  Video,
  Image,
  Smile,
  Paperclip,
  Send,
  SquareArrowRight,
} from 'lucide-react';

export default function DirectMessagePage() {
  // Sample data for the current conversation
  const friend = {
    id: '977',
    name: 'Carlos Rodriguez',
    username: '@carlos_r',
    last_seen: 'Online now',
    status: 'Active',
    description: 'Software Engineer | React enthusiast',
  };

  const messages = [
    {
      id: '1',
      sender: friend.id,
      text: 'Hey! How are you doing today?',
      time: '10:30 AM',
    },
    {
      id: '2',
      sender: 'me',
      text: "I'm doing great! Just finished that project we discussed.",
      time: '10:31 AM',
    },
    {
      id: '3',
      sender: friend.id,
      text: 'Thats awesome! Can you share the repo? Id love to take a look.',
      time: '10:32 AM',
    },
    {
      id: '4',
      sender: 'me',
      text: 'Sure thing! Here is the link: github.com/my-project',
      time: '10:33 AM',
    },
    {
      id: '5',
      sender: friend.id,
      text: 'Thanks! This looks really impressive. The UI is especially clean.',
      time: '10:35 AM',
    },
    {
      id: '6',
      sender: 'me',
      text: 'Appreciate it! I used that component library we talked about last week.',
      time: '10:36 AM',
    },
  ];

  const friends = [
    {
      id: '111',
      name: 'Alex Johnson',
      last_seen: '2 hours ago',
    },
    {
      id: '222',
      name: 'Taylor Kim',
      last_seen: 'Online now',
    },
    {
      id: '333',
      name: 'Jamie Smith',
      last_seen: '5 minutes ago',
    },
    {
      id: '977',
      name: 'Carlos Rodriguez',
      last_seen: 'Online now',
    },
    {
      id: '868',
      name: 'Morgan Lee',
      last_seen: '1 hour ago',
    },
    {
      id: '73',
      name: 'Jordan Patel',
      last_seen: 'Offline',
    },
  ];

  const groups = [
    {
      id: '499',
      name: 'Design Team',
      active: 5,
      last_msg: 'Hey',
    },
    {
      id: '559',
      name: 'Gaming Group',
      active: 8,
      last_msg: 'Aye',
    },
    {
      id: '6660',
      name: 'Project Alpha',
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
  ];

  const allOnline = [
    {
      id: 'randi',
      name: 'Randy',
      doing: 'Playing COD',
    },
    {
      id: 'randy',
      name: 'Randi',
      doing: 'Working',
    },
    {
      id: 'gray',
      name: 'Shady',
      doing: 'Coding',
    },
  ];

  return (
    <div className='bg-white w-screen h-screen flex flex-col overflow-hidden'>
      <header>
        <div className='flex w-full items-center justify-between p-4 border-b border-gray-200'>
          <div className='flex items-center'>
            <div className='flex items-center text-indigo-600'>
              <MessageCircle className='h-6 w-6' />
              <h1 className='text-xl font-semibold ml-2'>Chat</h1>
            </div>
            <nav className='px-5 space-x-5'>
              <a href='/' className='text-gray-500 hover:text-gray-900'>
                Home
              </a>
              <a href='/' className='text-gray-500 hover:text-gray-900'>
                Groups
              </a>
              <a href='/' className='text-indigo-600 font-medium'>
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
        {/* Left sidebar */}
        <div className='flex flex-col border-r h-full overflow-hidden w-64 border-gray-200'>
          <div className='p-4 space-y-1 flex-1 overflow-y-auto'>
            <h1 className='text-gray-500 text-xs p-2 font-semibold'>
              DIRECT MESSAGES
            </h1>
            <div>
              {friends.map((i) => (
                <div
                  className={`flex items-center p-2 hover:bg-gray-50 rounded-lg ${
                    i.id === friend.id ? 'bg-indigo-50' : ''
                  }`}
                  key={i.id}
                >
                  <div className='relative'>
                    <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center'>
                      <User className='h-4 w-4 text-indigo-600' />
                    </div>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                        i.last_seen === 'Online now'
                          ? 'bg-green-500'
                          : 'bg-gray-400'
                      }`}
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
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white bg-green-500`}
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

        {/* Main content - Conversation */}
        <div className='flex h-full w-full flex-1 flex-col bg-gray-50'>
          {/* Conversation header */}
          <div className='w-full bg-white p-4 flex items-center border-b border-gray-200'>
            <div className='relative'>
              <div className='w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center'>
                <User className='h-6 w-6 text-indigo-600' />
              </div>
              <div className='absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-green-500'></div>
            </div>
            <div className='ml-3'>
              <h1 className='text-gray-900 font-semibold text-lg'>
                {friend.name}
              </h1>
              <h2 className='text-gray-500 text-sm'>{friend.last_seen}</h2>
            </div>
            <div className='ml-auto flex space-x-4'>
              <Phone className='h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer' />
              <Video className='h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer' />
              <Search className='h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer' />
            </div>
          </div>

          {/* Messages area */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-2 ${
                    message.sender === 'me'
                      ? 'bg-indigo-100 rounded-br-none'
                      : 'bg-white rounded-bl-none'
                  }`}
                >
                  <p className='text-gray-800'>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'me'
                        ? 'text-indigo-600'
                        : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className='border-t border-gray-200 p-4 bg-white'>
            <div className='flex items-center'>
              <div className='flex space-x-2 mr-3 text-gray-500'>
                <Plus className='h-5 w-5 hover:text-gray-900 cursor-pointer' />
                <Image className='h-5 w-5 hover:text-gray-900 cursor-pointer' />
                <Paperclip className='h-5 w-5 hover:text-gray-900 cursor-pointer' />
                <Smile className='h-5 w-5 hover:text-gray-900 cursor-pointer' />
              </div>
              <input
                type='text'
                placeholder={`Message ${friend.name}`}
                className='flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300'
              />
              <button className='ml-3 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700'>
                <Send className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className='border-l w-80 border-gray-200 bg-white'>
          <div className='p-4 border-b border-gray-200'>
            <h1 className='font-bold text-gray-900'>Profile</h1>
          </div>

          {/* Friend profile */}
          <div className='p-4 border-b border-gray-200'>
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center'>
                  <User className='h-10 w-10 text-indigo-600' />
                </div>
                <div className='absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full border-2 border-white bg-green-500'></div>
              </div>
            </div>
            <div className='mt-4 text-center'>
              <h1 className='text-xl font-bold text-gray-900'>{friend.name}</h1>
              <p className='text-gray-500'>{friend.username}</p>
              <div className='mt-2'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                  {friend.status}
                </span>
              </div>
              <p className='mt-3 text-gray-600'>{friend.description}</p>
            </div>
          </div>

          {/* Actions */}
          <div className='p-4'>
            <h1 className='text-gray-900 font-semibold mb-3'>Actions</h1>
            <div className='grid grid-cols-2 gap-3'>
              <button className='flex flex-col items-center justify-center p-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg'>
                <Phone className='h-5 w-5 mb-1' />
                <span>Call</span>
              </button>
              <button className='flex flex-col items-center justify-center p-3 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg'>
                <Video className='h-5 w-5 mb-1' />
                <span>Video</span>
              </button>
              <button className='flex flex-col items-center justify-center p-3 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg'>
                <Star className='h-5 w-5 mb-1' />
                <span>Favorite</span>
              </button>
              <button className='flex flex-col items-center justify-center p-3 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg'>
                <SquareArrowRight className='h-5 w-5 mb-1' />
                <span>Block</span>
              </button>
            </div>
          </div>

          {/* Shared media */}
          <div className='p-4 border-t border-gray-200'>
            <h1 className='text-gray-900 font-semibold mb-3'>Shared Media</h1>
            <div className='grid grid-cols-3 gap-2'>
              <div className='aspect-square bg-gray-200 rounded-lg'></div>
              <div className='aspect-square bg-gray-200 rounded-lg'></div>
              <div className='aspect-square bg-gray-200 rounded-lg'></div>
              <div className='aspect-square bg-gray-200 rounded-lg'></div>
              <div className='aspect-square bg-gray-200 rounded-lg'></div>
              <div className='aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500'>
                +3 more
              </div>
            </div>
            <button className='w-full mt-3 text-center text-indigo-600 font-medium'>
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
