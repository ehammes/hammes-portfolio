import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa6';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('form');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent!');
          setStatus('success');
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
        }
      );
  };
  return (
    // CONTACT SECTION
    <section id='contact' className=' bg-slate-50'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          CONTACT
        </h1>
      </div>

      {/* FORM SUCCESS MESSAGE */}
      {status === 'success' && (
        <div className='flex items-center justify-center pt-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <div className='px-1 text-xs md:text-base'>
            Message sent successfully, thanks for reaching out!
          </div>
        </div>
      )}

      {/* FORM ERROR MESSAGE */}
      {status === 'error' && (
        <div className='flex items-center justify-center pt-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            class='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <div className='px-1 text-xs md:text-base'>
            Error sending message, please email elisha.elizabeth@gmail.com
          </div>
        </div>
      )}

      {/* FORM */}
      {status === 'form' && (
        <div className='grid max-w-lg grid-cols-1 px-12 py-10 mx-auto mt-10 bg-white border rounded-md shadow-md gap-x-6 gap-y-8'>
          <form ref={form} onSubmit={sendEmail}>
            <label className='block font-medium leading-6 text-gray-900'>
              NAME
            </label>
            <div className='mt-1'>
              <input
                id='name'
                type='text'
                name='user_name'
                maxLength={35}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 md:text-sm md:leading-6 pl-3 mb-4'
              />
            </div>
            <label className='block font-medium leading-6 text-gray-900'>
              EMAIL ADDRESS
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='user_email'
                type='email'
                maxLength={50}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 md:text-sm md:leading-6 pl-3 mb-4'
              />
            </div>
            <label className='block font-medium leading-6 text-gray-900'>
              MESSAGE
            </label>
            <div className='mt-1'>
              <textarea
                id='message'
                name='message'
                rows={3}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 md:text-sm md:leading-6 pl-3 overflow-auto mb-4'
              />
            </div>
            <div className='flex justify-end mt-2'>
              <input
                type='submit'
                value='Send'
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              />
            </div>
          </form>
        </div>
      )}

      {/* GITHUB | LINKEDIN | EMAIL */}
      <div className='flex items-center justify-center py-5'>
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
    </section>
  );
};

export default Contact;
