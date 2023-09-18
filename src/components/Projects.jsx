import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    // PROJECTS SECTION
    <div id='projects' className='pb-16 bg-slate-50'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 md:text-4xl'>
            PROJECTS
          </h1>
        </div>

        {/* PROJECT CARDS */}
        <ProjectCard />
    </div>
  );
};

export default Projects;