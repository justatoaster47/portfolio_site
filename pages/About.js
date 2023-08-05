"use client";

import { useState, useEffect } from 'react';
import { DiJavascript1, DiReact, DiHtml5, DiVim, DiPython, DiGithubBadge } from 'react-icons/di';
import { BiLogoCss3, BiLogoTailwindCss, BiGitMerge} from 'react-icons/bi';
// import { HiCommandLine } from 'react-icons/hi';
// import { TbBrandVscode } from 'react-icons/tb';

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
    <div id='About' className="mypage">

      <div className="mypagecontent flex-col">
        <h1>
          About
        </h1>
        <h1>
         __
        </h1>
        <p className="mybody pt-5 md:pt-10">
          This section will contain a sentence or two about me, but mainly my skills and other professionally relevant information. Add some nice graphics and shit
        </p>

        <div className='flex-col text-2xl justify-center p-5 pb-2'>
          <p className="flex justify-center text-lg md:text-4xl">
            Skills
          </p>
          <p className="flex justify-center italic text-sm md:text-xl h-5">
            {hoveredSkill}
          </p>
        </div>
       
        <div className="myicon"
        onMouseLeave={() => handleHover('')}>
          
          <DiReact onMouseEnter={() => handleHover('React')} /> 
          <DiJavascript1 onMouseEnter={() => handleHover('Javascript')} />
          <DiHtml5 onMouseEnter={() => handleHover(' HTML5')} />
          <BiLogoCss3 onMouseEnter={() => handleHover('CSS3')} />
          <BiLogoTailwindCss onMouseEnter={() => handleHover('Tailwind')} />

        </div>

        <div className="myicon"
        onMouseLeave={() => handleHover('')}>

          <DiPython onMouseEnter={() => handleHover('Python')} />
          <DiVim onMouseEnter={() => handleHover('Vim')} />
          {/* <HiCommandLine onMouseEnter={() => handleHover('Command Line')} /> */}
          <DiGithubBadge onMouseEnter={() => handleHover('Github')} />
          {/* <TbBrandVscode onMouseEnter={() => handleHover('VSCode')} /> */}
          <BiGitMerge onMouseEnter={() => handleHover('Git')} />

        </div>
      </div>
    </div>
  )
}

export default About