import { ReactNode } from 'react';

import backgroundImage from '../../assets/pituchat-login-background.png';

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
      <div
        className="col-span-1 hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="col-span-2 flex items-center justify-center px-10 lg:col-span-1">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
