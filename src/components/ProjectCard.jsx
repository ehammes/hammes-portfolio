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
    <div className='grid grid-cols-1 py-6 mx-auto items-top md:grid-cols-2 md:py-12'>
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
                className='mx-auto border-2 rounded-lg max-h-48 border-slate-200'
              />
              <Stack mt='6' spacing='3'>
                <Text fontSize='medium' className='py-2'>
                  {project.description}
                </Text>
                <div>
                  <div className='font-semibold'>TECH STACK:</div>
                  {project.tech}
                </div>
              </Stack>
            </CardBody>
            <hr className='h-px my-6 bg-gray-200 border-0 dark:bg-slate-700' />
            <CardFooter className='mx-auto'>
              <ButtonGroup className='items-center space-x-12 md:space-x-24'>
                <a
                  className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  href={project.siteUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Site
                </a>
                <a
                  variant='ghost'
                  className='font-semibold leading-6 text-gray-900 text-md hover:underline'
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