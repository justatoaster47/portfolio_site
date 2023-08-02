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
    <div id='About' className="flex justify-center items-center w-full h-screen bg-background ">


      <div className="flex-col w-3/4 h-3/4 bg-primary text-7xl rounded-lg">
        <h1 className="flex justify-center">
          About
        </h1>
        <h1 className="flex justify-center ">
         __
        </h1>
        <p className="flex text-xl p-10">
          This section will contain a sentence or two about me, but mainly my skills and other professionally relevant information. Add some nice graphics and shit
        </p>

        <p className='flex text-2xl w-full justify-center items-center pb-10 text-accent'>
        </p>


        <div className='flex-col text-2xl justify-center p-5'>
          <p className="flex justify-center text-4xl">
            Skills
            {/* <span className='pl-2'>{hoveredSkill}</span> */}
          </p>
          <p className="flex justify-center italic text-xl h-5">
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