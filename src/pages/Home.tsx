import DefaultLayout from '../components/layout/DefaultLayout';
import ChatList from '../components/features/chat/ChatList';
import ChatBox from '../components/features/chat/ChatBox';

import { ChatProvider } from '../context/ChatContext';

export default function Home() {
  return (
    <ChatProvider>
      <DefaultLayout>
        <main className="grid h-full grid-cols-12">
          <section className="col-span-12 md:col-span-5 lg:col-span-3">
            <ChatList />
          </section>
          <section
            className="col-span-12 hidden md:col-span-7 md:block lg:col-span-9"
            style={{ backgroundColor: '#F9F9FA' }}
          >
            <ChatBox />
          </section>
        </main>
      </DefaultLayout>
    </ChatProvider>
  );
}
