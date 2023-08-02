import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const mailtoLink = 'mailto:alexmpetro@gmail.com ';

  return (
    <div id='Contact' className="flex justify-center items-center w-full h-screen bg-background">

      <div className="flex-col w-3/4 h-3/4 bg-primary justify-center items-center text-7xl rounded-lg">
        <h1 className="flex justify-center">
          Contact
        </h1>

        <h1 className="flex justify-center">
          __
        </h1>

        <div className='flex-col justify-center items-center p-20 text-4xl'>

          <div className='flex justify-center items-center p-10 text-4xl pt-20'>
            <a href={mailtoLink} className='flex hover:text-secondary justify-center items-center'>
              alexmpetro@gmail.com
            </a>
          </div>

          <div className='flex justify-center items-center p-20 text-3xl pt-20'>
            <a href='/mock-resume.pdf' target='_blank' className='hover:text-secondary'>
              Resume
            </a>
          </div>

          <div className='flex justify-center gap-20 text-4xl'>
            <a href='https://github.com/justatoaster47' target='_blank'>
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
