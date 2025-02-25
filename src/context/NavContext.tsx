import { createContext, useContext, useState, ReactNode } from 'react';

type NavContextType = {
  activeNav: string; // Currently active menu
  setActiveNav: (menu: string) => void; // Function to set the active menu
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeNav, setActiveNav] = useState<string>('chat'); // Default active menu

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
};
