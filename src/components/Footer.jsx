const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div id='footer' className='bg-white'>
      <div
        className='pb-5 mx-3 pt-5 text-slate-500 lg:text-sm text-xs text-right'
      >
        <div class='mt-2'>© Copyright {year}. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
