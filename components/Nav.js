"use client";

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import dynamic from 'next/dynamic'; // This fixes hydration issues.
import Image from 'next/image';

const Nav = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Use useEffect only for client-side logic
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      // Use window or other client-side APIs here, if necessary
    }
  }, []);


  return (
    <header>
    
      <a href="/"> 
        <Image src='/react-icon.png' alt='Logo' height={65} width={65} className='z-10 absolute p-5 '/>
      </a>


      <nav
        className={`flex items-center justify-center gap-10 h-30 p-5 bg-gradient-to-b from-gray-500 to-white duration-500 transition-opacity ${ isVisible ? "opacity-100" : "opacity-0"}`}
        onMouseLeave={handleMouseLeave}
      >

        <a href="/#" className="hover:text-gray-600 transform">
          Projects
        </a>
        <a href="/#" className="hover:text-gray-600 transform">
          Resume
        </a>
        <a href="/#" className="hover:text-gray-600 transform">
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




// export default Nav
export default dynamic(() => Promise.resolve(Nav), {ssr: false}); //this fixes hydration issues