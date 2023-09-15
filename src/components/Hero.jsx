import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const hello = [
    'I am a Full-stack Software Engineer',
    1000,
    'I am a former Product Owner',
    2000,
    'I am an avid frontend coder',
    2000,
    'I am an avid traveler!',
    2000,
  ];

  const imageUrl = './img/myProfile.jpeg';

  return (
    <div className='relative isolate px-6 lg:px-8'>
      {/* <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      ></div> */}
      <div className='py-52 sm:py-24 lg:py-36 flex'>
        <div className='lg:pl-20 sm:pl-5'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Hi, I'm Elizabeth
          </h1>
          <p className='text-2xl pt-2 leading-10 text-gray-700'>
            <TypeAnimation
              sequence={hello}
              preRenderFirstString={true}
              cursor={true}
              speed={1}
              deletionSpeed={60}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
          {/* HERO NAV BUTTONS */}
          <div className='mt-10 flex justify-start items-center gap-x-6'>
            <a
              href='#about'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              About Me
            </a>
            <a
              href='#contact'
              className='text-md font-semibold leading-6 text-gray-900 hover s:underline'
            >
              Contact→
            </a>
          </div>
        </div>
        <div className='mx-auto px-5'>
          <img
            src={imageUrl}
            alt='profile'
            className='sm:h-36 sm:w-36 md:h-60 md:w-60 rounded-full h-28 w-28'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
