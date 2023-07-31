// "use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
 

const Contact = () => {
  
    const mailtoLink = 'mailto: alexmpetro@gmail.com ';

  return (
    <footer className="flex w-full h-35 gap-10 justify-center items-center text-2xl p-5 bg-stone-400 ">
        <a href='https://github.com/justatoaster47' target='_blank'> {/*Target blank makes it open in new tab */} 
            <FaGithub />
        </a>
        <a href={mailtoLink} className='hover:text-stone-700'>
            <p > alexmpetro@gmail.com </p>
        </a>
        <a href='https://www.linkedin.com/in/alexander-petro-73a183286/' target='_blank'>         
            <FaLinkedin />
        </a>
    </footer>
  )
};

export default Contact;