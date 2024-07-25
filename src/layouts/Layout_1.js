import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout_1 = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Sidebar />
      <div className='flex flex-col mt-10'>
        <Outlet />
      </div>


    </div>
  );
}

export default Layout_1;
