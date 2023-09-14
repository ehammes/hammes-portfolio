import { useState } from 'react';
const eh_logo = '/img/EH.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      {/* DESKTOP | NAVIGATION BAR */}
      <nav
        className='mx-auto flex items-center justify-between p-6 lg:px-8'
        aria-label='Global Navigation Bar'
      >
        {/* DESKTOP | SITE LOGO */}
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.0 p-1.0'>
            <span className='sr-only'>Elizabeth Hammes</span>
            <img
              className='w-auto h-20'
              src={eh_logo}
              alt='Elizabeth Hammes Logo'
            />
          </a>
        </div>
        {/* HAMBURGER MENU ICON */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMenuOpen(true)}
          >
            <span className='sr-only'>Open Mobile Menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
        {/* NAVIGATION LINKS */}
        <div className='hidden lg:flex lg:gap-x-16 lg:px-12'>
          <a
            href='/about'
            className='text-lg font-semibold text-gray-900 hover:underline'
          >
            ABOUT
          </a>
          <a
            href='/projects'
            className='text-lg font-semibold  text-gray-900 hover:underline'
          >
            PROJECTS
          </a>
          <a
            href='contacts'
            className='text-lg font-semibold text-gray-900 hover:underline'
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <dialog
        as='div'
        className='lg:hidden'
        open={menuOpen}
        onClose={setMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            {/* SITE LOGO */}
            <button href='/' className='-m-1.0 p-1.0'>
              <span className='sr-only'>Elizabeth Hammes</span>
              <img
                className='w-auto h-20'
                src={eh_logo}
                alt='Elizabeth Hammes Logo'
              />
            </button>
            {/* CLOSE MOBILE MENU BUTTON */}
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              {/* CLOSE ICON */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {/* MOBILE MENU | NAVIGATION LINKS */}
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='/about'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  About
                </a>
                <a
                  href='/projects'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Projects
                </a>
                <a
                  href='/contact'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
};

export default Header;
