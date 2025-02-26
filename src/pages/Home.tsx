import DefaultLayout from '../components/layout/DefaultLayout';
import ChatList from '../components/features/chat/ChatList';
import ChatBox from '../components/features/chat/ChatBox';

import { ChatProvider } from '../context/ChatContext';
import { useChat } from '../context/ChatContext';
import ChatPane from '../components/features/chat/ChatPane';

const ChatBoxWrapper = () => {
  const { isActiveChatPane } = useChat();

  return (
    <DefaultLayout>
      <main className={`grid h-full w-full grid-cols-10`}>
        <section className={`col-span-2`}>
          <ChatList />
        </section>
        <section
          className={`${isActiveChatPane ? 'col-span-6' : 'col-span-8'}`}
          style={{ backgroundColor: '#F9F9FA' }}
        >
          <ChatBox />
        </section>
        <aside
          className={`col-span-2 ${isActiveChatPane ? 'block' : 'hidden'}`}
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
