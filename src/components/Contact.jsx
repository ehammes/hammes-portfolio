import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa6';

const Contact = () => {
  return (
    <>
      <div id='contact' className=''>
        <div className='relative isolate px-4 lg:px-6 bg-slate-50'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              CONTACT
            </h1>
          </div>
          <div className='py-5 sm:py-10 lg:py-20 flex items-center justify-center'>
            <a
              href='https://github.com/ehammes'
              target='_blank'
              rel='noreferrer'
              className='px-5'
            >
              <FaGithub style={{ color: '#000000' }} size={40} />
            </a>
            <a
              href='https://www.linkedin.com/in/elizabethhammes'
              target='_blank'
              rel='noreferrer'
              className='px-5'
            >
              <FaLinkedin style={{ color: '#0072B1' }} size={40} />
            </a>
            <a href='mailto:elisha.elizabeth@gmail.com' className='px-5'>
              <FaRegEnvelope style={{ color: '#BB001B' }} size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
