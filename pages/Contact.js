// "use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
 

const Contact = () => {
  
    const mailtoLink = 'mailto: alexmpetro@gmail.com ';

  return (
    <div id='Contact' className="flex justify-center items-center w-full h-screen bg-stone-400">


      <div className="flex-col w-3/4 h-3/4 bg-slate-200 justify-center items-center text-7xl">
        <h1 className="flex justify-center ">
            Contact 
        </h1>

        <h1 className="flex justify-center ">
        __
        </h1>

        <div className='flex-col justify-center items-center p-20 text-4xl'>
        

      
        <div  className='flex justify-center items-center p-20 text-4xl pt-20'>
            <a href={mailtoLink} className='flex hover:text-stone-700 justify-center items-center '>
              alexmpetro@gmail.com 
            </a>
        </div>

        <div className='flex justify-center gap-20 text-4xl '>
          <a href='https://github.com/justatoaster47' target='_blank' > {/*Target blank makes it open in new tab */} 
              <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/alexander-petro-73a183286/' target='_blank'>         
              <FaLinkedin />
          </a>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Contact;