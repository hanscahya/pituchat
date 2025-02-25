import { createContext, useContext, useState, ReactNode } from 'react';

type ChatContextType = {
  activeChat: string;
  setActiveChat: (chat: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [activeChat, setActiveChat] = useState<string>('');

  return (
    <ChatContext.Provider value={{ activeChat, setActiveChat }}>
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
