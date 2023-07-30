"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };


  return (
    <header>
    
      <h3 className='z-50 absolute left-5 top-5'>LOGO</h3>

      <nav
        className={`flex items-center justify-center gap-10 h-30 p-5 bg-gradient-to-b from-gray-500 to-white duration-300 transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <a href="/#" className="hover:text-gray-400 transform">
          Projects
        </a>
        <a href="/#" className="hover:text-gray-400 transform">
          Resume
        </a>
        <a href="/#" className="hover:text-gray-400 transform">
          Contact
        </a>
      </nav>


     

      <button 
        className='absolute bg-transparent border-none outline-none right-5 top-5 text-xl ' 
        onMouseEnter={handleMouseEnter}
      >
        <FaBars />
      </button>

		</header>
  );
}




export default Nav