import Skills from './Skills';

const About = () => {
  // const imageUrl = './img/myProfile.jpeg';
  const imageUrl = './img/woman_computer.svg';

  return (
    // ABOUT SECTION
    <section id='about' className=' bg-slate-50'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          ABOUT ME
        </h1>
      </div>
      <div className='flex grid-cols-2 pt-12 pb-24 space-x-6 md:px-12'>
        <div className='w-1/2 space-y-5'>
          {/* IMG */}
          <div className='flex justify-center'>
            <img src={imageUrl} alt='profile' className='w-auto h-28 md:h-56' />
          </div>

          {/* ABOUT ME SUMMARY */}
          <div className='text-xs md:text-base'>
            <div>
              <div className='py-2 font-semibold text-center'>
                Software Developer, experienced Product Owner
              </div>
            </div>
            <div>
              <div>
                After 10+ years in various product roles in eCommerce, SaaS, and
                edTech, I completed a bootcamp in full-stack JavaScript through
                Code Fellows Seattle. My experience includes replatforming
                enterprise ecommerce solutions as a consultant owning
                stakeholder requirements, working on in-house ecommerce teams,
                and managing agile development teams.
              </div>
            </div>
            <div>
              <div className='pt-4'>
                I made the transition to software development due to my passion
                for coding, collaborating with developers, and building
                impactful features for clients and end-users. I'm
                customer-centric, enjoy frontend development, have a passion for
                continuous learning to expand my skill set, and thrive in
                cross-functional team collaboration.
              </div>
            </div>
            <div>
              <div className='pt-4'>
                <div className='font-semibold'>Current Focus:</div>
                <div>React, NextJS, APIs</div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className='w-1/2'>
          <h2 className='text-2xl font-bold tracking-tight text-center text-gray-900 md:text-4xl'>
            SKILLS
          </h2>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
