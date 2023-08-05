import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const mailtoLink = 'mailto:alexmpetro@gmail.com ';

  return (
    <div id='Contact' className="mypage">

      <div className="mypagecontent">
        <h1>
          Contact
        </h1>
        <h1>
          __
        </h1>

        <div className='fcenter flex-col'>

          <div className='fcenter pt-10 md:pt-20'>
            <a href={mailtoLink} className='mybody hover:text-secondary '>
              alexmpetro@gmail.com
            </a>
          </div>

          <div className='mybody pt-5 md:pt-20 pb-5 md:pb-10'>
            <a href='/mock-resume.pdf' target='_blank' className='hover:text-secondary'>
              Resume
            </a>
          </div>

          <div className='myicon '>
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
