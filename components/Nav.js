"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {

  const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };


  return (
    <header className='flex items-center justify-between h-30 p-5 bg-slate-200'>

      {isVisible ? ( 
        <>
        <nav className={'flex justify-around h-full w-1/2 transition-all duration-300 ease-in' + (isVisible ? "h-45" : "h-20]")}>
        
          <a href="/#" className='hover:text-gray-400 transform '>Home</a>
          <a href="/#" className='hover:text-gray-400 transform '>My work</a>
          <a href="/#" className='hover:text-gray-400 transform '>Blog</a>
          <a href="/#" className='hover:text-gray-400 transform '>About me</a>
        </nav> 
        
        </>
      ) : (
        <nav className='flex justify-between items-center w-1/2 h-full '>
          <h3>LOGO</h3>

          <h1>Title</h1>

        </nav>
      )}

      <button 
        className='z-50 hover:text-gray-400 duration-150 hover:rotate-180 bg-transparent border-none outline-none transform' 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaBars />
      </button>

		</header>
  );
}




export default Nav