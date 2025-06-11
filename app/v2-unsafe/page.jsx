// app/page.js
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  MessageCircle,
  Users,
  Hash,
  Bell,
  Settings,
  Search,
  Plus,
  Mail,
  User,
  Lock,
  Globe,
  Star,
  HelpCircle,
  Mic,
  Headphones,
  Menu,
  X,
} from 'lucide-react';

// Reusable Components
function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <a
      href={href}
      className={`pb-1 transition ${
        isActive
          ? 'text-indigo-600 font-medium border-b-2 border-indigo-600'
          : 'text-gray-500 hover:text-gray-800'
      }`}
    >
      {children}
    </a>
  );
}

function SectionContainer({ title, actionText, onAction, children }) {
  return (
    <div className='bg-white rounded-xl shadow-sm p-6 flex flex-col h-full'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-semibold text-lg'>{title}</h3>
        {actionText && (
          <button
            onClick={onAction}
            className='text-indigo-600 text-sm font-medium hover:text-indigo-800'
          >
            {actionText}
          </button>
        )}
      </div>
      <div className='flex-1 overflow-y-auto'>{children}</div>
    </div>
  );
}

function ConversationItem({ id, name, time, message, status, color }) {
  return (
    <div className='flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100 mb-2'>
      <div className={`w-10 h-10 rounded-full ${color} mr-3`}></div>
      <div className='flex-1 min-w-0'>
        <div className='flex justify-between'>
          <h4 className='font-medium truncate'>{name}</h4>
          <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>
            {time}
          </span>
        </div>
        <p className='text-sm text-gray-500 truncate'>{message}</p>
      </div>
      {status === 'online' && (
        <span className='w-2 h-2 rounded-full bg-green-500 ml-2'></span>
      )}
    </div>
  );
}

function CommunityCard({ id, name, description, members, color, iconColor }) {
  return (
    <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition h-full flex flex-col'>
      <div className={`h-20 ${color}`}></div>
      <div className='p-4 flex-1 flex flex-col'>
        <div className='flex items-center -mt-10 mb-2'>
          <div className='w-14 h-14 rounded-full bg-white border-4 border-white flex items-center justify-center'>
            <Globe className={iconColor} size={24} />
          </div>
          <div className='ml-2'>
            <h4 className='font-bold'>{name}</h4>
            <div className='flex items-center text-xs text-gray-500'>
              <span className='w-2 h-2 rounded-full bg-green-500 mr-1'></span>
              {members} online
            </div>
          </div>
        </div>
        <p className='text-sm text-gray-600 mb-3 flex-1'>{description}</p>
        <button className='w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded text-sm font-medium transition'>
          Join Community
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Sample data
  const conversations = [
    {
      id: 1,
      name: 'Friend 1',
      time: '10:12 AM',
      message: 'Hey, how are you doing today?',
      status: 'online',
      color: 'bg-green-300',
    },
    {
      id: 2,
      name: 'Friend 2',
      time: '9:30 AM',
      message: 'Did you see the latest update?',
      status: 'offline',
      color: 'bg-purple-300',
    },
    {
      id: 3,
      name: 'Friend 3',
      time: 'Yesterday',
      message: 'Let me know when you are free',
      status: 'offline',
      color: 'bg-yellow-300',
    },
  ];

  const groups = [
    {
      id: 1,
      name: 'Gaming Squad',
      members: '12 online',
      message: 'Anyone up for some games tonight?',
    },
    {
      id: 2,
      name: 'Study Group',
      members: '3 online',
      message: 'Meeting tomorrow at 10 AM',
    },
  ];

  const communities = [
    {
      id: 1,
      name: 'Tech Enthusiasts',
      members: '12.4k',
      description: 'Discuss the latest in technology and programming',
      color: 'bg-indigo-500',
      iconColor: 'text-indigo-500',
    },
    {
      id: 2,
      name: 'Art Community',
      members: '8.3k',
      description: 'Share and discuss artwork from around the world',
      color: 'bg-green-500',
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      name: 'Music Lovers',
      members: '15.7k',
      description: 'All genres, all eras - share your favorite music',
      color: 'bg-purple-500',
      iconColor: 'text-purple-500',
    },
  ];

  const onlineFriends = [
    { id: 1, name: 'Friend 1', status: 'Playing Game', color: 'bg-green-300' },
    {
      id: 2,
      name: 'Friend 2',
      status: 'Listening to Spotify',
      color: 'bg-purple-300',
    },
    { id: 3, name: 'Friend 3', status: 'Online', color: 'bg-yellow-300' },
    { id: 4, name: 'Friend 4', status: 'In a call', color: 'bg-red-300' },
  ];

  return (
    <div className='flex flex-col h-screen bg-gray-50'>
      {/* Top Navigation */}
      <header className='flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm relative'>
        <div className='flex items-center space-x-3'>
          <div className='flex items-center text-indigo-600'>
            <MessageCircle className='mr-2' size={24} />
            <h1 className='text-xl font-bold'>ChatApp</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6 ml-6'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/dms'>DMs</NavLink>
            <NavLink href='/groups'>Groups</NavLink>
            <NavLink href='/explore'>Explore</NavLink>
            <NavLink href='/nitro'>Nitro</NavLink>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 rounded-lg hover:bg-gray-100'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Search and User Controls */}
        <div className='flex items-center space-x-4'>
          <div className='relative hidden sm:block'>
            <Search
              className='absolute left-3 top-2.5 text-gray-400'
              size={18}
            />
            <input
              type='text'
              placeholder='Search'
              className='pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 w-52'
            />
          </div>
          <div className='flex items-center space-x-3'>
            <button className='p-2 rounded-full hover:bg-gray-100'>
              <Bell className='text-gray-600' size={20} />
            </button>
            <button className='p-2 rounded-full hover:bg-gray-100'>
              <Mail className='text-gray-600' size={20} />
            </button>
            <div className='w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center'>
              <User className='text-indigo-700' size={18} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10 p-4'>
            <div className='flex flex-col space-y-3'>
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/dms'>DMs</NavLink>
              <NavLink href='/groups'>Groups</NavLink>
              <NavLink href='/explore'>Explore</NavLink>
              <NavLink href='/nitro'>Nitro</NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Left Sidebar */}
        <aside className='w-16 md:w-60 bg-white border-r border-gray-200 flex flex-col'>
          <div className='p-4 border-b border-gray-200'>
            <button className='flex items-center w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
              <Plus className='mr-2' size={18} />
              <span className='hidden md:inline'>Create or Join</span>
            </button>
          </div>

          <div className='flex-1 overflow-hidden flex flex-col'>
            {/* Direct Messages Section */}
            <div className='flex-shrink-0'>
              <h3 className='text-xs uppercase text-gray-500 font-semibold px-2 py-1 hidden md:block'>
                Direct Messages
              </h3>
            </div>
            <div className='flex-1 min-h-0 overflow-y-auto'>
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className='flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer'
                >
                  <div
                    className={`w-8 h-8 rounded-full ${
                      i % 4 === 0
                        ? 'bg-green-300'
                        : i % 4 === 1
                          ? 'bg-purple-300'
                          : i % 4 === 2
                            ? 'bg-yellow-300'
                            : 'bg-red-300'
                    } mr-2`}
                  ></div>
                  <div className='hidden md:block'>
                    <p className='font-medium'>Friend {i + 1}</p>
                    <p className='text-xs text-gray-500'>
                      {i % 3 === 0
                        ? 'Online now'
                        : i % 3 === 1
                          ? 'Active 2h ago'
                          : 'Offline'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Your Groups Section */}
            <div className='flex-shrink-0'>
              <h3 className='text-xs uppercase text-gray-500 font-semibold px-2 py-1 mt-4 hidden md:block'>
                Your Groups
              </h3>
            </div>
            <div className='flex-1 min-h-0 overflow-y-auto'>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className='flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer'
                >
                  <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2'>
                    <Users className='text-indigo-600' size={18} />
                  </div>
                  <div className='hidden md:block'>
                    <p className='font-medium'>Group {i + 1}</p>
                    <p className='text-xs text-gray-500'>
                      {i % 2 === 0 ? '5 members online' : '3 members online'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Public Servers Section */}
            <div className='flex-shrink-0'>
              <h3 className='text-xs uppercase text-gray-500 font-semibold px-2 py-1 mt-4 hidden md:block'>
                Public Servers
              </h3>
            </div>
            <div className='flex-1 min-h-0 overflow-y-auto'>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className='flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer'
                >
                  <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2'>
                    <Globe className='text-gray-600' size={18} />
                  </div>
                  <div className='hidden md:block'>
                    <p className='font-medium'>Community {i + 1}</p>
                    <p className='text-xs text-gray-500'>
                      {i % 2 === 0 ? '12k members' : '8.5k members'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div className='p-2 border-t border-gray-200'>
            <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
              <div className='w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center mr-2'>
                <User className='text-indigo-700' size={16} />
              </div>
              <div className='hidden md:block'>
                <p className='font-medium'>Your Profile</p>
                <p className='text-xs text-gray-500'>#user1234</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className='flex-1 bg-gray-100 flex flex-col overflow-hidden'>
          <div className='flex-1 overflow-y-auto p-6 max-w-4xl mx-auto w-full'>
            {/* Welcome Section */}
            <div className='bg-white rounded-xl shadow-sm p-6 mb-6'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Welcome to ChatApp!
                </h2>
                <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition'>
                  <Plus className='mr-2' size={16} />
                  <span>Start Chatting</span>
                </button>
              </div>

              <p className='text-gray-600 mb-6'>
                Connect with friends, join communities, and chat with people
                around the world. Everything is just one click away.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition'>
                  <div className='w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3'>
                    <Users className='text-indigo-600' size={20} />
                  </div>
                  <h3 className='font-semibold text-lg mb-1'>Friends</h3>
                  <p className='text-gray-600 text-sm'>
                    Connect with your friends and start private conversations
                  </p>
                </div>

                <div className='border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition'>
                  <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3'>
                    <Hash className='text-purple-600' size={20} />
                  </div>
                  <h3 className='font-semibold text-lg mb-1'>Groups</h3>
                  <p className='text-gray-600 text-sm'>
                    Create or join group conversations with multiple people
                  </p>
                </div>

                <div className='border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition'>
                  <div className='w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3'>
                    <Globe className='text-green-600' size={20} />
                  </div>
                  <h3 className='font-semibold text-lg mb-1'>Communities</h3>
                  <p className='text-gray-600 text-sm'>
                    Discover and join public communities of interest
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Conversations and Groups */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Recent Conversations */}
              <SectionContainer
                title='Recent Conversations'
                actionText='View All'
                onAction={() => console.log('View all conversations')}
              >
                {conversations.map((conv) => (
                  <ConversationItem key={conv.id} {...conv} />
                ))}
              </SectionContainer>

              {/* Your Groups */}
              <SectionContainer
                title='Your Groups'
                actionText='Create Group'
                onAction={() => console.log('Create new group')}
              >
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className='flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100 mb-2'
                  >
                    <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3'>
                      <Users className='text-indigo-600' size={18} />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='flex justify-between'>
                        <h4 className='font-medium truncate'>{group.name}</h4>
                        <span className='text-xs text-gray-500 whitespace-nowrap ml-2'>
                          {group.members}
                        </span>
                      </div>
                      <p className='text-sm text-gray-500 truncate'>
                        {group.message}
                      </p>
                    </div>
                  </div>
                ))}
                <div className='p-3 rounded-lg border border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50'>
                  <Plus className='text-gray-400 mr-2' />
                  <span className='text-gray-500'>Create new group</span>
                </div>
              </SectionContainer>
            </div>

            {/* Public Communities */}
            <SectionContainer
              title='Popular Communities'
              actionText='Explore All'
              onAction={() => console.log('Explore all communities')}
              className='mt-6'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {communities.map((community) => (
                  <CommunityCard key={community.id} {...community} />
                ))}
              </div>
            </SectionContainer>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className=' lg:block w-80 bg-white border-l border-gray-200 overflow-hidden flex flex-col'>
          {/* Online Friends */}
          <div className='p-4 flex-shrink-0 border-b border-gray-200'>
            <h3 className='font-semibold text-lg'>Online Friends</h3>
          </div>
          <div className='flex-1 overflow-y-auto'>
            {onlineFriends.map((friend) => (
              <div
                key={friend.id}
                className='flex items-center p-3 hover:bg-gray-100 cursor-pointer'
              >
                <div className='relative'>
                  <div
                    className={`w-10 h-10 rounded-full ${friend.color}`}
                  ></div>
                  <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
                </div>
                <div className='ml-3 min-w-0'>
                  <p className='font-medium truncate'>{friend.name}</p>
                  <p className='text-xs text-gray-500 truncate'>
                    {friend.status}
                  </p>
                </div>
                <div className='ml-auto flex space-x-2'>
                  <button className='p-1.5 rounded-full hover:bg-gray-200'>
                    <MessageCircle className='text-gray-500' size={18} />
                  </button>
                  <button className='p-1.5 rounded-full hover:bg-gray-200'>
                    {friend.id === 4 ? (
                      <Headphones className='text-gray-500' size={18} />
                    ) : (
                      <Mic className='text-gray-500' size={18} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className='p-4 border-t border-gray-200'>
            <h3 className='font-semibold text-lg mb-4'>Quick Actions</h3>
            <div className='grid grid-cols-2 gap-3'>
              <button className='bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg p-3 flex flex-col items-center transition'>
                <Plus className='mb-2' size={20} />
                <span>New Group</span>
              </button>
              <button className='bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg p-3 flex flex-col items-center transition'>
                <Globe className='mb-2' size={20} />
                <span>Find Community</span>
              </button>
              <button className='bg-green-50 hover:bg-green-100 text-green-700 rounded-lg p-3 flex flex-col items-center transition'>
                <Star className='mb-2' size={20} />
                <span>Get Premium</span>
              </button>
              <button className='bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg p-3 flex flex-col items-center transition'>
                <Settings className='mb-2' size={20} />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div className='p-4 bg-gray-50 rounded-lg m-4 mt-0'>
            <h3 className='font-semibold mb-2'>Need Help?</h3>
            <p className='text-sm text-gray-600 mb-3'>
              Check out our help center for guides and support
            </p>
            <button className='w-full bg-white border border-gray-300 hover:bg-gray-100 py-2 rounded text-sm font-medium transition flex items-center justify-center'>
              <HelpCircle className='mr-2' size={16} />
              Help Center
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
