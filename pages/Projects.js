"use client";

import { useState } from 'react';


const Projects = () => {
  return (
    <div id='Projects' className="flex justify-center items-center w-full h-screen bg-background">
      <div className="flex-col w-3/4 h-3/4 bg-primary justify-center items-center text-7xl">

        <h1 className="flex justify-center">
          Projects 
        </h1>

        <h1 className="flex justify-center ">
        __
        </h1>



{/* 
      <div className='flex items-center justify-self-center text-2xl w-full flex-wrap  bg-slate-300'>

        <div className='w-1/2 h-1/2 bg-slate-400 '>
          Project 1

          <div className='flex h-3/4 w-full justify-center items-center'>

            <h1 className='flex bg-third rounded-lg p-2 m-2 justify-center w-4/5 h-1/4 items-center'>
              Project 1
            </h1>

            <div className='bg-gray-500 flex w-4/5 h-3/5 p-0 rounded-md justify-center items-center'>
              <p>
                Short description here
              </p>
            </div>

          </div>
          <div className='flex justify-around h-1/4 w-full gap-3 bg-transparent p-3 rounded-md '>

            <button className='flex bg-third hover:text-hovertextcolor text-lg font-bold justify-center items-center rounded-md align-bottom w-1/2 h-full'>Source</button>

            <button className='flex bg-third hover:text-hovertextcolor text-lg font-bold justify-center items-center  rounded-md align-bottom w-1/2 h-full'>Trial</button>

          </div>

        </div>

        <div className='w-1/2 h-1/2 bg-slate-400'>
          Project 2
        </div>
        <div className='w-1/2 h-1/2 bg-slate-400'>
          Project 3
        </div>
        <div className='w-1/2 h-1/2 bg-slate-400'>
          Project 4
        </div>
       
      </div> */}


      <div className='grid grid-cols-2 text-2xl mt-4 h-3/4 w-full flex-wrap bg-slate-300 place-items-center'>
        <div className='flex justify-center items-center flex-shrink-0 w-4/5 h-4/5 aspect-w-1 aspect-h-1 bg-slate-400'>

            <h1 className='flex bg-third rounded-lg p-2 m-2 justify-center w-4/5 h-1/4 items-center'>
              Project 1
            </h1>

            <div className='bg-gray-500 flex w-4/5 h-3/5 p-0 rounded-md justify-center items-center'>
              <p>
                Short description here
              </p>
            </div>

          <div className='flex justify-around h-1/4 w-full gap-3 bg-transparent p-3 rounded-md '>

            <button className='flex bg-third hover:text-hovertextcolor text-lg font-bold justify-center items-center rounded-md align-bottom w-1/2 h-full'>Source</button>

            <button className='flex bg-third hover:text-hovertextcolor text-lg font-bold justify-center items-center  rounded-md align-bottom w-1/2 h-full'>Trial</button>
          </div>

        </div>
        <div className='flex justify-center items-center flex-shrink-0 w-4/5 h-4/5 aspect-w-1 aspect-h-1 bg-slate-400'>
          Project 2
        </div>
        <div className='flex justify-center items-center flex-shrink-0 w-4/5 h-4/5 aspect-w-1 aspect-h-1 bg-slate-400'>
          Project 3
        </div>
        <div className='flex justify-center items-center flex-shrink-0 w-4/5 h-4/5 aspect-w-1 aspect-h-1 bg-slate-400'>
          Project 4
        </div>
      </div>




    </div>
  </div>
  )
}

export default Projects