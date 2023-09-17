const Footer = () => {

  // GENERATE CURRENT YEAR
  const year = new Date().getFullYear();

  return (

    // FOOTER SECTION
    <div id='footer' className='bg-white'>
      <div
        className='pt-5 pb-5 mx-3 text-xs text-right text-slate-500 md:text-sm'
      >
        <div className='mt-2'>© Copyright {year}. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;