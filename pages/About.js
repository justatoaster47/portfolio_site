"use client";

import { useState, useEffect } from 'react';
import { DiJavascript1, DiReact, DiHtml5, DiCss3Full, DiPython } from 'react-icons/di';
import { BiLogoCss3, BiLogoTailwindCss } from 'react-icons/bi';

const About = () => {

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleHover = (skill) => {
    setHoveredSkill(skill)
  }

  useEffect(() => {
    // Use useEffect only for client-side logic
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      // Use window or other client-side APIs here, if necessary
    }
  }, []);

  return (
    <div className="flex justify-center w-full h-screen bg-stone-400">

      <div className="flex h-screen bg-slate-800 w-2 m-5"></div>

      <div className="flex-col w-3/4 h-3/4 bg-slate-200 text-7xl">
        <h1 className="flex justify-center">
          About
        </h1>
        <h1 className="flex justify-center ">
         __
        </h1>
        <p className="flex text-xl pt-20 pb-20 p-10">
          This section will contain a sentence or two about me, but mainly my skills and other professionally relevant information. Add some nice graphics and shit
        </p>


        <div className='flex text-2xl justify-center '>
          <p className="flex justify-center text-2xl">
            My skills include... 
          </p>

          <p className='flex text-blue-400 pl-2 w-40 bg-transparent'>
            {hoveredSkill}
          </p>
        </div>
        
       
        <div className="flex justify-around text-4xl pt-5"
        onMouseLeave={() => handleHover('')}>

          <DiReact onMouseEnter={() => handleHover(' React')} /> 
          <DiJavascript1 onMouseEnter={() => handleHover(' Javascript')} />
          <DiHtml5 onMouseEnter={() => handleHover(' HTML5')} />
          <BiLogoCss3 onMouseEnter={() => handleHover(' CSS3')} />
          <BiLogoTailwindCss onMouseEnter={() => handleHover(' Tailwind')} />
          <DiPython onMouseEnter={() => handleHover(' Python')} />
          

        </div>

      </div>
       
    
    </div>
  )
}

export default About