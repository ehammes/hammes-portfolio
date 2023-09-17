import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const aboutMe = [
    'I am a Software Developer',
    1000,
    'I am a former Product Owner',
    2000,
    'I am an avid Frontend Developer',
    2000,
    'I am an avid traveler',
    2000,
  ];

  const imageUrl = './img/woman_computer.svg';

  return (
    
    // LANDING SECTION
    <div className='flex px-5 py-36'>

      {/* NAME | ABOUT | CTA */}
      <div className='pl-5 my-auto md:px-20'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 md:text-6xl'>
          Hi, I'm Elizabeth
        </h1>
        <div className='flex items-center pt-2 space-x-2 text-sm leading-10 text-gray-700 md:text-2xl w-72 md:w-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
            />
          </svg>

          <TypeAnimation
            sequence={aboutMe}
            preRenderFirstString={true}
            cursor={true}
            speed={1}
            deletionSpeed={60}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        {/* HERO NAV BUTTONS */}
        <div className='flex items-center justify-start mt-10 gap-x-6'>
          <a
            href='#about'
            className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:text-md'
          >
            About Me
          </a>
          <a
            href='#contact'
            className='font-semibold leading-6 text-gray-900 text-md hover:underline'
          >
            Contact→
          </a>
        </div>
      </div>
      
      {/* HERO IMAGE */}
      <div className='px-5 mx-auto'>
        <img
          src={imageUrl}
          alt='profile'
          className='w-auto h-48 md:h-96 md:w-auto'
        />
      </div>
    </div>
  );
};

export default Hero;