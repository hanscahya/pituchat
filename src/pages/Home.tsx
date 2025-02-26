import DefaultLayout from '../components/layout/DefaultLayout';
import ChatList from '../components/features/chat/ChatList';
import ChatBox from '../components/features/chat/ChatBox';

import { ChatProvider } from '../context/ChatContext';
import { useChat } from '../context/ChatContext';
import ChatPane from '../components/features/chat/ChatPane';

const ChatBoxWrapper = () => {
  const { activeChat, isActiveChatPane } = useChat();

  return (
    <DefaultLayout>
      <main className={`grid h-full w-full md:grid-cols-10`}>
        <section
          className={`md:col-span-4 lg:col-span-2 ${activeChat ? 'hidden md:block' : 'block'}`}
        >
          <ChatList />
        </section>
        <section
          className={`${
            isActiveChatPane
              ? 'hidden lg:col-span-6 lg:block'
              : 'md:col-span-6 lg:col-span-8'
          }`}
          style={{ backgroundColor: '#F9F9FA' }}
        >
          <ChatBox />
        </section>
        <aside
          className={`md:col-span-6 lg:col-span-2 ${isActiveChatPane ? 'block' : 'hidden'}`}
        >
          <ChatPane />
        </aside>
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
