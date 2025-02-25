import moment from 'moment';

import { Message } from '../../../types/chat.types';

const ChatBubble = ({ message }: { message: Message }) => {
  const isSender = message.isSender;

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`${isSender ? 'self-end text-right' : 'self-start text-left'} flex flex-col gap-2`}
      >
        <p
          className={`${isSender ? 'bg-blue-700 text-white' : 'bg-gray-200'} w-fit rounded-full px-4 py-2`}
        >
          {message.message}
        </p>
        <span className="px-4 text-sm text-gray-600">
          {moment(message.datetime).format('HH:mm')}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
