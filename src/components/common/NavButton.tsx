import './NavButton.css';

type NavButtonProps = {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
};

const NavButton = ({ name, icon, isActive, onClick }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full flex-col items-center justify-center p-4 ${isActive ? 'active' : 'inactive'}`}
    >
      <img src={icon} alt={name} className="h-8 w-8" />
      <label className="mt-4 text-sm font-bold">{name}</label>
    </button>
  );
};

export default NavButton;
