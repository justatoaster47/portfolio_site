"use client";

import { useState } from 'react';
import ProjectDisplay from '@components/ProjectDisplay';

const Projects = () => {
  return (
    <div id='Projects' className="flex justify-center items-center w-full h-screen bg-background">
      <div className="flex-col w-3/4 h-3/4 bg-primary justify-center items-center text-7xl rounded-lg">

        <h1 className="flex justify-center">
          Projects 
        </h1>

        <h1 className="flex justify-center ">
        __
        </h1>

      <div className='grid grid-cols-2 grid-rows-2 text-2xl mt-4 h-3/4 w-full flex-wrap place-items-center gap-5 pr-5 pl-5'>

        <ProjectDisplay Title='Project 1' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

        <ProjectDisplay Title='Project 2' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

        <ProjectDisplay Title='Project 3' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

        <ProjectDisplay Title='Project 4' Description='Short description here' SourceLink='https://google.com' TrialLink='https://google.com' />

      </div>

    </div>
  </div>
  )
}

export default Projects