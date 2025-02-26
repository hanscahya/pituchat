import moment from 'moment';

import userAvatar1 from '../../../assets/pituchat-avatar-user-1.png';
import userAvatar2 from '../../../assets/pituchat-avatar-user-2.png';
import userAvatar3 from '../../../assets/pituchat-avatar-user-3.png';
import userAvatar4 from '../../../assets/pituchat-avatar-user-4.png';

import { Message } from '../../../types/chat.types';

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

const ChatBubble = ({
  message,
  senderName,
  senderId,
}: {
  message: Message;
  senderName: string;
  senderId: number;
}) => {
  const isSender = message.isSender;

  if (!isSender) {
    const avatar = getAvatar(senderId);

    return (
      <div className="flex flex-col gap-2">
        <div className={`flex items-center gap-2 self-start text-left`}>
          <img
            src={avatar}
            alt={senderName}
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <span className="px-4 text-sm text-gray-600">{senderName}</span>
            <p
              className={`w-fit rounded-xl rounded-bl-none bg-gray-200 px-4 py-2 lg:rounded-full lg:rounded-bl-none`}
            >
              {message.message}
            </p>
            <span className="px-4 text-sm text-gray-600">
              {moment(message.datetime).format('HH:mm')}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className={`flex items-center self-end text-right`}>
        <div className="flex flex-col gap-2">
          <p
            className={`w-fit rounded-xl rounded-br-none bg-blue-700 px-4 py-2 text-white lg:rounded-full lg:rounded-br-none`}
          >
            {message.message}
          </p>
          <span className="px-4 text-sm text-gray-600">
            Sent • {moment(message.datetime).format('HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
