import DefaultLayout from '../components/layout/DefaultLayout';
import ChatList from '../components/features/chat/ChatList';
import ChatBox from '../components/features/chat/ChatBox';

import { ChatProvider } from '../context/ChatContext';
import { useChat } from '../context/ChatContext';

const ChatBoxWrapper = () => {
  const { activeChat } = useChat();

  return (
    <DefaultLayout>
      <main className="grid h-full grid-cols-12">
        <section
          className={`col-span-12 md:col-span-5 lg:col-span-3 ${
            activeChat ? 'hidden md:block' : 'block'
          }`}
        >
          <ChatList />
        </section>
        <section
          className={`col-span-12 md:col-span-7 lg:col-span-9 ${
            activeChat ? 'block' : 'hidden md:block'
          }`}
          style={{ backgroundColor: '#F9F9FA' }}
        >
          <ChatBox />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default function Home() {
  return (
    <ChatProvider>
      <ChatBoxWrapper />
    </ChatProvider>
  );
}
