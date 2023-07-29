"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <header className='flex items-center justify-between h-30 p-5 bg-slate-200'>

      {isVisible ? ( 
        <>
        <nav className={'flex justify-around h-full w-full      transition-all duration-300 ease-in ${isVisible ? "top-0" : "top-[-40]"}'}>
        
          <a href="/#" className='hover:text-gray-400 transform '>Home</a>
          <a href="/#" className='hover:text-gray-400 transform '>My work</a>
          <a href="/#" className='hover:text-gray-400 transform '>Blog</a>
          <a href="/#" className='hover:text-gray-400 transform '>About me</a>
        </nav> 
        <button className=' hover:text-gray-400 bg-transparent border-none outline-none transform hover:opacity-70' onClick={toggleVisibility}>
          <FaTimes />
        </button>
        </>
      ) : (
        <nav className='flex justify-between items-center w-full h-full       '>
          <h3>LOGO</h3>

          <h1>Title</h1>

          <button className=' hover:text-gray-400 bg-transparent border-none outline-none transform' onClick={toggleVisibility}>
            <FaBars />
          </button>
        </nav>
      )}

		</header>
  );
}




export default Nav