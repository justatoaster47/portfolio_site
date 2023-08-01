"use client";

import { useState } from 'react';


const Projects = () => {
  return (
    <div id='Projects' className="flex justify-center items-center w-full h-screen bg-stone-400">



    <div className="flex-col w-3/4 h-3/4 bg-slate-200 text-7xl">
      <h1 className="flex justify-center">
        Projects 
      </h1>

      <h1 className="flex justify-center ">
       __
      </h1>

      <div className='grid grid-cols-3 grid-rows-2 text-2xl w-full h-full gap-10 p-10 justify-around bg-slate-300'>
        <div className='w-full h-full bg-slate-400 justify-center rounded-md'>
          <div className='flex-col justify-center h-3/4 w-full bg-transparent '>
            <h1 className='flex justify-center w-full h-1/4 items-center'>
              Project 1
            </h1>
            <div className='bg-gray-500 flex w-full h-3/4 p-0'> Screenshot of project goes here</div>
          </div>
          <div className='flex justify-around h-1/4 w-full gap-3 bg-transparent p-3 rounded-md '>
          <button className='flex bg-slate-300 hover:bg-slate-500 text-white text-lg font-bold justify-center items-center rounded-md align-bottom w-1/2 h-full'>Source</button>
          <button className='flex bg-slate-300 hover:bg-slate-500 text-white text-lg font-bold justify-center items-center  rounded-md align-bottom w-1/2 h-full'>Trial</button>
          </div>
        </div>

        <div className='w-full h-full bg-slate-400'>
          Project 2
        </div>
        <div className='w-full h-full bg-slate-400'>
          Project 3
        </div>
        <div className='w-full h-full bg-slate-400'>
          Project 4
        </div>
        <div className='w-full h-full bg-slate-400'>
          Project 5
        </div>
        <div className='w-full h-full bg-slate-400'>
          Project 6
        </div>
      </div>

      
     
     

    </div>
     
  
  </div>
  )
}

export default Projects