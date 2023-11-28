import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const aboutMe = [
    'I am a Software Developer',
    1000,
    'I am an experienced Product Owner',
    2000,
    'I am an avid Frontend Developer',
    2000,
    'I am an avid traveler',
    2000,
  ];

  // const imageUrl = './img/woman_computer.svg';
  const imageUrl = './img/myProfile.jpeg';

  return (
    // LANDING SECTION
    <div className='flex pt-12 pb-28'>
      {/* NAME | ABOUT | CTA */}
      <div className='w-1/2 p-5 pt-0 md:pl-12 md:py-16 md:pr-5 lg:pl-48 lg:py-16 lg:pr-5'>
        <h1 className='text-base font-bold tracking-tight text-gray-900 md:text-4xl lg:text-6xl'>
          Hi, I'm Elizabeth
        </h1>
        <div className='flex items-center pt-2 space-x-1 text-xs text-gray-700 md:text-2xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3 md:w-6 md:h-6'
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
        <div className='flex items-center justify-start mt-10 gap-x-4'>
          <a
            href='#about'
            className='rounded-md bg-blue-600 lg:px-3.5 lg:py-2.5 p-2.5 text-xs md:px-2.5 md:py-2.5 md:text-base text-white font-semibold shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            About Me
          </a>
          <a
            href='#contact'
            className='text-xs font-semibold leading-6 text-gray-900 md:text-base hover:underline'
          >
            Contact→
          </a>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className='flex justify-center w-1/2'>
        <img
          src={imageUrl}
          alt='profile'
          className='rounded-full h-28 md:h-52 lg:h-96'
        />
      </div>
    </div>
  );
};

export default Hero;
