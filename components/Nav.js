"use client";

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import dynamic from 'next/dynamic'; // This fixes hydration issues.
import Image from 'next/image';
import Link from 'next/link';

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
    <header className='bg-transparent fixed top-0 w-full h-40 z-50'
      onMouseLeave={handleMouseLeave} 
    >
    
      <a href="/"> 
        <Image src='/react-icon.png' alt='Logo' height={80} width={80} className='z-10 absolute p-5'/>
      </a>

      {/* <h1
        className={`absolute flex justify-center w-full text-2xl p-5 transition-opacity ${ isVisible ? "opacity-0 " : "opacity-100"} `} 
      >Developed By: Alexander Petro</h1> */}

      <nav
        className={`flex w-full items-center justify-center gap-10 h-30 text-2xl p-5 bg-transparent duration-300 transition-opacity ${ isVisible ? "opacity-100" : "opacity-0 "} `}
      >
        <Link href="/About" className="hover:text-stone-700 transform"> 
          About 
        </Link>
        <Link href="/Projects" className="hover:text-stone-700 transform">
          Projects
        </Link>
        <Link href="/Contact" className="hover:text-stone-700 transform">
          Contact 
        </Link>
      </nav>

      <button 
        className='absolute bg-transparent border-none outline-none right-5 top-5 ' 
        onMouseEnter={handleMouseEnter}
      >
        <FaBars className='text-3xl'/>
      </button>

		</header>
  );
}




// export default Nav
export default dynamic(() => Promise.resolve(Nav), {ssr: false}); //this fixes hydration issues