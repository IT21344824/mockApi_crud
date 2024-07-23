import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout_1 = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout_1;
