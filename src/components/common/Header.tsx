import logo from '/pituchat-logo.svg';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between border-b-2 px-6 py-4">
      <img
        src={logo}
        alt="Pituchat"
        className="w-64 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-gray-200 p-2">
          <FaUser className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
