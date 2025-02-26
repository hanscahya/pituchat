import { useEffect, useState } from 'react';
import {
  FaSearch,
  FaInfoCircle,
  FaPaperclip,
  FaPaperPlane,
  FaChevronLeft,
} from 'react-icons/fa';

import './ChatBox.css';

import { useChat } from '../../../context/ChatContext';

import emptyChat from '../../../assets/pituchat-empty-chat.png';

import ChatBubble from './ChatBubble';

import { Message } from '../../../types/chat.types';

const ChatBox = () => {
  const { activeChat, setActiveChat, isActiveChatPane, setIsActiveChatPane } =
    useChat();

  // calculate max height of the chatbox
  const [reservedHeight, setReservedHeight] = useState<number>(0);
  useEffect(() => {
    let mainHeaderHeight = 0;

    const mainHeaderEl = document.querySelector('#main-header');
    if (mainHeaderEl) {
      const { height } = mainHeaderEl.getBoundingClientRect();
      mainHeaderHeight += height;
    }
    const chatHeaderEl = document.querySelector('#chat-header');
    if (chatHeaderEl) {
      const { height } = chatHeaderEl.getBoundingClientRect();
      mainHeaderHeight += height;
    }
    const chatFooterEl = document.querySelector('#chat-footer');
    if (chatFooterEl) {
      const { height } = chatFooterEl.getBoundingClientRect();
      mainHeaderHeight += height;
    }

    setReservedHeight(mainHeaderHeight);

    // scroll to bottom of the chatbox
    setTimeout(() => {
      const element = document.querySelector('#chat-anchor');
      element?.lastElementChild?.scrollIntoView(true);
    }, 1);
  }, [activeChat]);

  if (!activeChat) {
    return (
      <figure className="hidden h-full flex-col items-center justify-center md:flex">
        <img src={emptyChat} alt="empty chat" className="h-80 w-80" />

        <p className="mt-4 text-center">Tidak ada pesan terpilih</p>
        <strong className="mt-1">Pilih pesan untuk dibaca</strong>
      </figure>
    );
  }

  return (
    <section className="flex h-full flex-col">
      <header
        id="chat-header"
        className="flex items-center justify-between border-b border-gray-200 p-6"
      >
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <FaChevronLeft
            className="block h-5 w-5 cursor-pointer text-gray-800 md:hidden"
            onClick={() => {
              setActiveChat(null);
            }}
          />
          {activeChat.name}
        </h1>

        <div className="flex items-center gap-6">
          <button>
            <FaSearch className="h-5 w-5 text-gray-800" />
          </button>

          <button
            onClick={() => {
              setIsActiveChatPane(!isActiveChatPane);
            }}
          >
            <FaInfoCircle className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </header>

      <main className="flex h-full flex-col">
        <section
          className="chatbox flex-1 content-end overflow-x-scroll p-8"
          style={{ maxHeight: `calc(100vh - ${reservedHeight}px)` }}
        >
          <ul id="chat-anchor" className="flex flex-col justify-end gap-4">
            {activeChat.messages.map(message => (
              <li key={message.id}>
                <ChatBubble
                  message={message as Message}
                  senderName={activeChat.name}
                  senderId={activeChat.id}
                />
              </li>
            ))}
          </ul>
        </section>

        <footer id="chat-footer" className="px-6 py-4">
          <div className="flex items-center gap-4">
            <button>
              <FaPaperclip className="h-6 w-6 text-gray-600" />
            </button>

            <input
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              type="text"
              placeholder="Ketik pesan..."
            />

            <button>
              <FaPaperPlane className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default ChatBox;
