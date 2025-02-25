import TokopediaLogo from '../../../assets/pituchat-logo-tokopedia.png';
import ShopeeLogo from '../../../assets/pituchat-logo-shopee.png';
import TokopediaIcon from '../../../assets/pituchat-icon-tokopedia.png';
import ShopeeIcon from '../../../assets/pituchat-icon-shopee.png';

import './StoreButton.css';

import { FaCheck, FaSync } from 'react-icons/fa';

type StoreButtonProps = {
  vendor: string;
  storeName: string;
  isConnected: boolean;
};

const StoreButton = ({ vendor, storeName, isConnected }: StoreButtonProps) => {
  if (!vendor) return null;

  let logo = '';
  let icon = '';

  if (vendor === 'tokopedia') {
    logo = TokopediaLogo;
    icon = TokopediaIcon;
  } else if (vendor === 'shopee') {
    logo = ShopeeLogo;
    icon = ShopeeIcon;
  }

  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <img src={logo} alt={vendor} />

      <mark
        className={`${vendor} flex items-center gap-2 rounded-lg px-4 py-2`}
      >
        <img src={icon} alt={vendor} className="h-4" />
        <span className="text-sm">{storeName}</span>
      </mark>

      <button
        disabled={isConnected}
        className={`flex items-center gap-2 rounded-lg px-5 py-4 text-white ${
          isConnected ? 'connected' : 'disconnected'
        }`}
      >
        {isConnected && <FaCheck className="h-4 w-4" />}
        {!isConnected && <FaSync className="h-4 w-4" />}
        <span>{isConnected ? 'Tersambung' : 'Sambungkan'}</span>
      </button>
    </article>
  );
};

export default StoreButton;
