import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../common/Header';
import NavButton from '../common/NavButton';

import { useNav } from '../../context/NavContext';
import { useAuth } from '../../context/AuthContext';

import chatIcon from '../../assets/pituchat-icon-chat.png';
import chatActiveIcon from '../../assets/pituchat-icon-chat-active.png';
import storeIcon from '../../assets/pituchat-icon-store.png';
import storeActiveIcon from '../../assets/pituchat-icon-store-active.png';
import logoutIcon from '../../assets/pituchat-icon-logout.png';
type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { activeNav, setActiveNav } = useNav();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNavClick = (nav: string, path: string) => {
    setActiveNav(nav);
    navigate(path);
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex h-full">
        {/* Sidebar navigation */}
        <aside className="flex h-full w-32 flex-col border-r-2">
          <section className="flex-1">
            <NavButton
              name="Chat"
              icon={activeNav === 'home' ? chatActiveIcon : chatIcon}
              isActive={activeNav === 'home'}
              onClick={() => handleNavClick('home', '/')}
            />
            <NavButton
              name="Toko"
              icon={activeNav === 'settings' ? storeActiveIcon : storeIcon}
              isActive={activeNav === 'settings'}
              onClick={() => handleNavClick('settings', '/settings')}
            />
          </section>
          <NavButton
            name="Keluar"
            icon={logoutIcon}
            isActive={false}
            onClick={logout}
          />
        </aside>

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
