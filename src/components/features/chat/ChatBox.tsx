import { useChat } from '../../../context/ChatContext';

import emptyChat from '../../../assets/pituchat-empty-chat.png';

const ChatBox = () => {
  const { activeChat } = useChat();

  if (!activeChat) {
    return (
      <figure className="flex h-full flex-col items-center justify-center">
        <img src={emptyChat} alt="empty chat" className="h-80 w-80" />

        <p className="mt-4 text-center">Tidak ada pesan terpilih</p>
        <strong className="mt-1">Pilih pesan untuk dibaca</strong>
      </figure>
    );
  }

  return <div>ChatBox</div>;
};

export default ChatBox;
