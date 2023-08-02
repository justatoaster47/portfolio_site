'use client';

import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
// import dynamic from 'next/dynamic'; // fixes hydration issues 

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
    <header className='fixed top-0 w-full h-40 z-50 bg-transparent' onMouseLeave={handleMouseLeave}>
      {/* <a href="/">
        <Image src='/react-icon.png' alt='Logo' height={80} width={80} className='absolute z-10 p-5'/>
      </a> */}

      <nav className={`flex w-full items-center justify-center gap-10 h-30 p-5 text-2xl duration-300 transition-opacity bg-transparent ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <Link href="#Home" onClick={handleMouseLeave} className="hover:text-hovertextcolor">
          Home
        </Link>
        <Link href="#About" onClick={handleMouseLeave} className="hover:text-hovertextcolor">
          About
        </Link>
        <Link href="#Projects" onClick={handleMouseLeave} className="hover:text-hovertextcolor">
          Projects
        </Link>
        <Link href="#Contact" onClick={handleMouseLeave} className="hover:text-hovertextcolor">
          Contact
        </Link>
      </nav>

      <button className='absolute top-5 right-5 bg-transparent border-none outline-none' onMouseEnter={handleMouseEnter}>
        <FaBars className='text-4xl '/>
      </button>
    </header>
  );
}

// export default dynamic(() => Promise.resolve(Nav), { ssr: false }); // fixes hydration issues
export default Nav;
