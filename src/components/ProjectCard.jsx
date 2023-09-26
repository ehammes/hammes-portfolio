import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import projectData from './projectData';

const ProjectCard = () => {
  return (
    <div className='grid grid-cols-1 mx-auto mt-6 items-top md:grid-cols-2'>
      {projectData.map((project) => {
        return (
          <Card key={project.id} className='p-6 m-6 bg-white border shadow-md'>
            <CardHeader>
              <Heading className='py-2 text-2xl font-semibold text-center'>
                {project.title}
              </Heading>
            </CardHeader>
            <CardBody>
                <Image
                  src={project.imageUrl}
                  alt='project image'
                  className='mx-auto border-2 rounded-lg max-h-44 max-w-64 border-slate-200'
                />
              <Stack mt='6' spacing='3'>
                <Text fontSize='medium' className='py-2'>
                  {project.description}
                </Text>
                <div>
                  <Text className='font-semibold'>TECH STACK:</Text>
                  {project.tech}
                </div>
              </Stack>
            </CardBody>
            <hr className='h-px my-6 bg-gray-200 border-0 dark:bg-slate-700' />
            <CardFooter className='mx-auto my-auto'>
              <ButtonGroup className='items-center space-x-6 lg:space-x-24 md:space-x-12'>
                <a
                  className='rounded-md bg-blue-600 lg:px-3.5 lg:py-2.5 p-2.5 text-xs md:px-2.5 md:py-2.5 md:text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  href={project.siteUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Site
                </a>
                <a
                  variant='ghost'
                  className='text-xs font-semibold leading-6 text-gray-900 md:text-base hover:underline'
                  href={project.gitHubUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub Repo→
                </a>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectCard;
