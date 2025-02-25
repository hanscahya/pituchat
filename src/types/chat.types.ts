export type Chat = {
  id: number;
  name: string;
  message: string;
  messages: Message[];
  vendor: string;
  storeName: string;
  unreadCount: number;
  userId: number;
  date: string;
};

export type Message = {
  id: number;
  message: string;
  datetime: string;
  isSender: boolean;
};
