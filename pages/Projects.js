"use client";

import { useState } from 'react';
import ProjectDisplay from '@components/ProjectDisplay';

const Projects = () => {
  return (
    <div id='Projects' className="mypage">
      <div className="mypagecontent flex-col ">
        <h1>
          Projects 
        </h1>
        <h1>
        __
        </h1>

      {/* <div className='grid grid-cols-2 grid-rows-2 text-2xl mt-4 h-3/4 w-full flex-wrap place-items-center gap-5 pr-5 pl-5'> */}
        <div className='mybody pt-5 pb-5 gap-5 md:gap-10'>

        <ProjectDisplay Title='Project 1' Description='SShort description hereShort description hereShort description hereShort description hereShort description herehort description here' SourceLink='https://google.com' TrialLink='https://google.com' />

        <ProjectDisplay Title='Project 2' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

        <ProjectDisplay Title='Project 3' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

        <ProjectDisplay Title='Project 4' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

      </div>

    </div>
  </div>
  )
}

export default Projects