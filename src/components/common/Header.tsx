import logo from '/pituchat-logo.svg';
import { useNavigate } from 'react-router-dom';

import avatar from '../../assets/pituchat-avatar-user-logged-in.png';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      id="main-header"
      className="flex items-center justify-between border-b-2 px-6 py-4"
    >
      <img
        src={logo}
        alt="Pituchat"
        className="w-64 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-xl p-2">
          <img src={avatar} alt="avatar" className="h-10 w-10" />
          <FaChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
