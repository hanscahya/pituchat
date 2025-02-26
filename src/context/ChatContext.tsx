import { createContext, useContext, useState, ReactNode } from 'react';

import { Chat } from '../types/chat.types';

type ChatContextType = {
  activeChat: Chat | null | undefined;
  setActiveChat: (chat: Chat | null) => void;
  isActiveChatPane: boolean;
  setIsActiveChatPane: (isActive: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [isActiveChatPane, setIsActiveChatPane] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        activeChat,
        setActiveChat,
        isActiveChatPane,
        setIsActiveChatPane,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
