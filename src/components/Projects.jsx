import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    // PROJECTS SECTION
    <div id='projects'>
      <div className='px-6 mt-6 bg-slate-50 '>
        <div className='text-center'>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 md:text-4xl'>
            PROJECTS
          </h1>
        </div>

        {/* PROJECT CARDS */}
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;