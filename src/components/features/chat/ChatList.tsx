import { useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';

import { chats } from '../../../services/chat';

import ChatListItem from './ChatListItem';

const ChatList = () => {
  const [activeTab, setActiveTab] = useState('need-reply');

  const [filteredChats, setFilteredChats] = useState(chats);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredChats(chats);
    } else if (activeTab === 'need-reply') {
      setFilteredChats(chats.filter(chat => chat.unreadCount > 0));
    } else if (activeTab === 'replied') {
      setFilteredChats(chats.filter(chat => chat.unreadCount === 0));
    }
  }, [activeTab]);

  return (
    <>
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold">Chat</h1>

        <div className="flex items-center gap-6">
          <button>
            <FaSearch className="h-5 w-5 text-gray-800" />
          </button>

          <button>
            <FaFilter className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </header>

      <nav>
        <ul className="grid w-full grid-cols-3 items-center gap-y-4">
          <li
            className={`flex items-center justify-center border-b-4 p-4 ${
              activeTab === 'need-reply' ? 'border-blue-800' : ''
            }`}
          >
            <button onClick={() => setActiveTab('need-reply')}>
              Perlu Balas
            </button>
          </li>
          <li
            className={`flex items-center justify-center border-b-4 p-4 ${
              activeTab === 'replied' ? 'border-blue-600' : ''
            }`}
          >
            <button onClick={() => setActiveTab('replied')}>Terbalas</button>
          </li>
          <li
            className={`flex items-center justify-center border-b-4 p-4 ${
              activeTab === 'all' ? 'border-blue-800' : ''
            }`}
          >
            <button onClick={() => setActiveTab('all')}>Semua Chat</button>
          </li>
        </ul>
      </nav>

      <main>
        <ul>
          {filteredChats.map(v => (
            <ChatListItem key={v.id} chat={v} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default ChatList;
