import React from 'react';
import { useDentistContext } from '../Components/Context/GlobalContext';

const Layout = ({ children }) => {
  const { theme } = useDentistContext();
  
  return (
    <div className={`app-container ${theme}`}>
      {children}
    </div>
  );
};

export default Layout;