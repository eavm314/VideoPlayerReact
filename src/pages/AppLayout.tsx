import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function AppLayout() {

  return (
    <div>
      <NavBar/>
      <div className='m-5'>
        <Outlet/>
      </div>
    </div>
  );
}