import moment from 'moment';
import { BsX } from 'react-icons/bs';

import { useChat } from '../../../context/ChatContext';

import userAvatar1 from '../../../assets/pituchat-avatar-user-1@2x.png';
import userAvatar2 from '../../../assets/pituchat-avatar-user-2@2x.png';
import userAvatar3 from '../../../assets/pituchat-avatar-user-3@2x.png';
import userAvatar4 from '../../../assets/pituchat-avatar-user-4@2x.png';

import TokopediaIcon from '../../../assets/pituchat-icon-tokopedia.png';
import ShopeeIcon from '../../../assets/pituchat-icon-shopee.png';

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

const ChatPane = () => {
  const { activeChat, setIsActiveChatPane } = useChat();

  const avatar = activeChat ? getAvatar(activeChat.id) : '';

  let icon = '';

  if (activeChat?.vendor === 'tokopedia') {
    icon = TokopediaIcon;
  } else if (activeChat?.vendor === 'shopee') {
    icon = ShopeeIcon;
  }

  return (
    <>
      <header className="flex justify-end p-4">
        <button onClick={() => setIsActiveChatPane(false)}>
          <BsX className="h-10 w-10 text-gray-600" />
        </button>
      </header>

      <section className="flex flex-col items-center justify-center gap-4 p-4 text-center">
        <img src={avatar} alt="chat-image" className="h-40 w-40" />
        <h2 className="mt-4 text-lg font-semibold">{activeChat?.name}</h2>
        <p className="text-sm capitalize text-gray-600">{activeChat?.vendor}</p>
        <mark
          className={`${activeChat?.vendor} mt-4 flex items-center gap-2 rounded-lg px-4 py-2`}
        >
          <img src={icon} alt={activeChat?.vendor} className="h-4" />
          <span className="text-sm">{activeChat?.storeName}</span>
        </mark>
      </section>

      <div className="mt-4 p-4">
        <h3 className="font-semibold">Tentang pesan</h3>
        <table className="mt-4 w-full text-sm">
          <tbody>
            <tr>
              <td>
                <strong>Created</strong>
              </td>
              <td>{moment(activeChat?.date).format('DD MMM YYYY HH:mm')}</td>
            </tr>
            <tr>
              <td>
                <strong>Last Seen</strong>
              </td>
              <td>{moment().format('DD MMM YYYY HH:mm')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChatPane;
