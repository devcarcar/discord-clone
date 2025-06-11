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

export default function GroupPage() {
  // Group information
  const groupInfo = {
    id: 'group123',
    name: 'Design Team',
    description: 'Collaborating on product design projects',
    members: 15,
    online: 8,
    channels: ['#general', '#resources', '#feedback'],
  };

  // Group members
  const groupMembers = [
    { id: 'm1', name: 'Alex Johnson', role: 'Admin', online: true },
    { id: 'm2', name: 'Taylor Swift', role: 'Member', online: true },
    { id: 'm3', name: 'Chris Evans', role: 'Member', online: false },
    { id: 'm4', name: 'Jamie Smith', role: 'Member', online: true },
  ];

  // Messages in the group
  const messages = [
    {
      id: 'msg1',
      sender: 'Alex Johnson',
      text: 'Has everyone reviewed the latest mockups?',
      time: '10:30 AM',
      avatarColor: 'bg-blue-100',
      isCurrentUser: false,
    },
    {
      id: 'msg2',
      sender: 'You',
      text: 'Yes, I left comments on Figma',
      time: '10:32 AM',
      avatarColor: 'bg-indigo-100',
      isCurrentUser: true,
    },
    {
      id: 'msg3',
      sender: 'Taylor Swift',
      text: 'Working on the feedback now',
      time: '10:35 AM',
      avatarColor: 'bg-purple-100',
      isCurrentUser: false,
    },
  ];

  // Reuse data from sources
  const allOnline = [
    { id: 'randi', name: 'Randy', doing: 'Something' },
    { id: 'randy', name: 'Randi', doing: 'Something else' },
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
              <a href='/' className='text-gray-500'>
                Home
              </a>
              <a href='/' className='text-indigo-600 font-medium'>
                Groups
              </a>
              <a href='/' className='text-gray-500'>
                DMs
              </a>
              <a href='/' className='text-gray-500'>
                Explore
              </a>
              <a href='/' className='text-gray-500'>
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
            {/* ... (friends list) */}

            <h1 className='text-gray-500 text-xs font-semibold p-2'>GROUPS</h1>
            {/* ... (groups list) */}

            <h1 className='text-gray-500 text-xs font-semibold p-2'>
              COMMUNITIES
            </h1>
            {/* ... (communities list) */}
          </div>
          {/* User footer */}
          <div className='border-t p-3 flex items-center'>
            <div className='relative'>
              <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                <User className='h-5 w-5 text-indigo-600' />
              </div>
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

        {/* Main Group Content */}
        <div className='flex-1 flex flex-col bg-gray-100'>
          {/* Group Header */}
          <div className='bg-white p-4 border-b border-gray-200 flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-3'>
                <Users className='h-6 w-6 text-indigo-600' />
              </div>
              <div>
                <h1 className='font-bold text-xl text-gray-900'>
                  {groupInfo.name}
                </h1>
                <div className='flex items-center text-sm text-gray-500'>
                  <span className='w-2 h-2 rounded-full bg-green-500 mr-1'></span>
                  {groupInfo.online} online • {groupInfo.members} members
                </div>
              </div>
            </div>
            <div className='flex space-x-3'>
              <button className='flex items-center text-gray-500 hover:text-gray-700'>
                <Search className='h-5 w-5 mr-1' /> Search
              </button>
              <button className='flex items-center text-gray-500 hover:text-gray-700'>
                <Bell className='h-5 w-5 mr-1' /> Notifications
              </button>
              <button className='flex items-center text-gray-500 hover:text-gray-700'>
                <Settings className='h-5 w-5 mr-1' /> Settings
              </button>
              <button className='bg-indigo-600 text-white rounded-lg px-4 py-2 flex items-center'>
                <Plus className='h-4 w-4 mr-1' /> Invite
              </button>
            </div>
          </div>

          <div className='flex flex-1 overflow-hidden'>
            {/* Channel List */}
            <div className='w-64 bg-white border-r border-gray-200 flex flex-col'>
              <div className='p-4 border-b border-gray-200'>
                <h1 className='font-semibold text-gray-900'>CHANNELS</h1>
              </div>
              <div className='flex-1 overflow-y-auto p-2'>
                {groupInfo.channels.map((channel, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg flex items-center ${
                      index === 0
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Hash className='h-4 w-4 mr-2' />
                    <span>{channel}</span>
                  </div>
                ))}
              </div>
              <div className='p-3 border-t border-gray-200'>
                <button className='flex items-center text-gray-500 hover:text-gray-700 w-full'>
                  <Plus className='h-4 w-4 mr-2' /> Create Channel
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className='flex-1 flex flex-col'>
              {/* Messages Header */}
              <div className='bg-white p-4 border-b border-gray-200 flex items-center'>
                <div className='flex items-center'>
                  <Hash className='h-5 w-5 text-gray-500 mr-2' />
                  <h1 className='font-bold text-gray-900'>general</h1>
                </div>
                <div className='ml-4 text-sm text-gray-500'>
                  {groupInfo.description}
                </div>
              </div>

              {/* Messages Area */}
              <div className='flex-1 overflow-y-auto p-4 space-y-6'>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isCurrentUser ? 'justify-end' : ''}`}
                  >
                    {!message.isCurrentUser && (
                      <div
                        className={`w-10 h-10 rounded-full ${message.avatarColor} flex items-center justify-center mr-3`}
                      >
                        <User className='h-5 w-5 text-indigo-600' />
                      </div>
                    )}
                    <div
                      className={`max-w-xl ${message.isCurrentUser ? 'bg-indigo-50' : 'bg-white'} rounded-xl p-4`}
                    >
                      <div className='flex items-baseline'>
                        {!message.isCurrentUser && (
                          <h1 className='font-bold text-gray-900 mr-2'>
                            {message.sender}
                          </h1>
                        )}
                        <span className='text-xs text-gray-500'>
                          {message.time}
                        </span>
                      </div>
                      <p className='mt-1 text-gray-800'>{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className='bg-white p-4 border-t border-gray-200'>
                <div className='flex items-center'>
                  <div className='flex-1 bg-gray-100 rounded-lg px-4 py-3 flex items-center'>
                    <input
                      type='text'
                      placeholder={`Message #general`}
                      className='bg-transparent flex-1 focus:outline-none'
                    />
                    <div className='flex space-x-3 text-gray-500'>
                      <Plus className='h-5 w-5' />
                      <Mic className='h-5 w-5' />
                    </div>
                  </div>
                  <button className='ml-3 bg-indigo-600 text-white rounded-lg px-4 py-3'>
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Group Members */}
            <div className='w-80 bg-white border-l border-gray-200 flex flex-col'>
              <div className='p-4 border-b border-gray-200'>
                <h1 className='font-bold text-gray-900'>
                  MEMBERS — {groupInfo.members}
                </h1>
              </div>
              <div className='flex-1 overflow-y-auto p-2'>
                {groupMembers.map((member) => (
                  <div
                    key={member.id}
                    className='flex items-center p-3 hover:bg-gray-50 rounded-lg'
                  >
                    <div className='relative mr-3'>
                      <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>
                        <User className='h-5 w-5 text-indigo-600' />
                      </div>
                      {member.online && (
                        <div className='absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500'></div>
                      )}
                    </div>
                    <div className='flex-1'>
                      <h1 className='font-medium text-gray-900'>
                        {member.name}
                      </h1>
                      <p className='text-xs text-gray-500'>{member.role}</p>
                    </div>
                    <button className='text-gray-500 hover:text-gray-700'>
                      <MessageCircle className='h-5 w-5' />
                    </button>
                  </div>
                ))}
              </div>
              <div className='p-4 border-t border-gray-200'>
                <h1 className='text-gray-900 font-semibold mb-2'>
                  Group Actions
                </h1>
                <div className='grid grid-cols-2 gap-3'>
                  <button className='bg-indigo-50 p-3 text-indigo-700 rounded-lg flex flex-col items-center'>
                    <Plus className='h-5 w-5' />
                    <span className='text-sm mt-1'>Invite</span>
                  </button>
                  <button className='bg-purple-50 p-3 text-purple-700 rounded-lg flex flex-col items-center'>
                    <Hash className='h-5 w-5' />
                    <span className='text-sm mt-1'>Channel</span>
                  </button>
                  <button className='bg-yellow-50 p-3 text-yellow-700 rounded-lg flex flex-col items-center'>
                    <Settings className='h-5 w-5' />
                    <span className='text-sm mt-1'>Settings</span>
                  </button>
                  <button className='bg-red-50 p-3 text-red-700 rounded-lg flex flex-col items-center'>
                    <Star className='h-5 w-5' />
                    <span className='text-sm mt-1'>Leave</span>
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
