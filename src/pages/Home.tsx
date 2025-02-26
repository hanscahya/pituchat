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
      <section className="flex h-full">
        <main
          className={`grid h-full grid-cols-12 ${
            isActiveChatPane ? 'hidden lg:block' : 'block'
          }`}
        >
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

        {isActiveChatPane && (
          <aside className="mx-auto w-full max-w-[525px] md:w-1/3 lg:w-1/4">
            <ChatPane />
          </aside>
        )}
      </section>
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
