import { FaUserCircle } from 'react-icons/fa';
import moment from 'moment';

import userAvatar1 from '../../../assets/pituchat-avatar-user-1.png';
import userAvatar2 from '../../../assets/pituchat-avatar-user-2.png';
import userAvatar3 from '../../../assets/pituchat-avatar-user-3.png';
import userAvatar4 from '../../../assets/pituchat-avatar-user-4.png';

import TokopediaIcon from '../../../assets/pituchat-icon-tokopedia.png';
import ShopeeIcon from '../../../assets/pituchat-icon-shopee.png';

type Chat = {
  id: number;
  name: string;
  message: string;
  unreadCount: number;
  date: string;
  vendor: string;
  storeName: string;
};

const getAvatar = (id: number) => {
  switch (id) {
    case 1:
      return userAvatar1;
    case 2:
      return userAvatar2;
    case 3:
      return userAvatar3;
    case 4:
      return userAvatar4;
    default:
      return '';
  }
};

const getIcon = (vendor: string) => {
  switch (vendor) {
    case 'tokopedia':
      return TokopediaIcon;
    case 'shopee':
      return ShopeeIcon;
    default:
      return '';
  }
};

const ChatListItem = ({ chat }: { chat: Chat }) => {
  const avatar = getAvatar(chat.id);
  const icon = getIcon(chat.vendor);

  const chatDate = moment(chat.date);
  const isToday = chatDate.isSame(moment(), 'day');

  const formattedDate = isToday ? 'Hari ini' : chatDate.format('DD MMM YYYY');

  return (
    <article className="flex items-center gap-4 p-4">
      {avatar ? (
        <img src={avatar} alt={chat.name} className="h-12 w-12 rounded-full" />
      ) : (
        <FaUserCircle className="h-14 w-14" />
      )}

      <section className="flex w-full items-center justify-between">
        <div>
          <h2 className="font-bold">{chat.name}</h2>
          <p className="mt-1 text-sm text-gray-700">{chat.message}</p>
          <mark
            className={`${chat.vendor} mt-2 flex w-fit items-center gap-2 rounded-lg p-2`}
          >
            <img src={icon} alt={chat.vendor} className="h-4" />
            <span className="text-sm">{chat.storeName}</span>
          </mark>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-700">{formattedDate}</span>
          {chat.unreadCount > 0 && (
            <p className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-white">
              {chat.unreadCount}
            </p>
          )}
        </div>
      </section>
    </article>
  );
};

export default ChatListItem;
