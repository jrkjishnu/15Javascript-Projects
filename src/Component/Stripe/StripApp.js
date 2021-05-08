import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { useGlobalContext } from './context';

function StripApp() {
  const {closeSubmenu} = useGlobalContext();

  const display = (e)=>
  {
    closeSubmenu();
  }
  return (
    <>
          <Navbar />
    <div onMouseOver={display}>
      <Sidebar />
      <Hero />
    </div>
    <Submenu />

    </>
  );
}

export default StripApp;
