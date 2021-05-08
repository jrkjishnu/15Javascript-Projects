import React from 'react';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
      <div className='submenu show'>
      <h2>kjhb</h2>
      </div>
  );
};

export default Hero;
