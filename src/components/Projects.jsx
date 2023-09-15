import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='relative isolate px-4 lg:px-6 bg-slate-50'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            PROJECTS
          </h1>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 py-6 sm:py-12 lg:py-24 items-center'>
          <div className='mx-auto py-10'>
            <Card maxW='sm'>
              <CardHeader>Project #1</CardHeader>
              <CardBody>
                <Image src='' alt='' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Project text goes here</Heading>
                  <Text>Built with x,y,z</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button
                    variant='solid'
                    className='rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  >
                    Live Site
                  </Button>
                  <Button
                    variant='ghost'
                    className='text-md font-semibold leading-6 text-gray-900 hover s:underline'
                  >
                    GitHub Repo→
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
          <div className='mx-auto py-10'>
            <Card maxW='sm'>
              <CardHeader>Project #2</CardHeader>
              <CardBody>
                <Image src='' alt='' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Project text goes here</Heading>
                  <Text>Built with x,y,z</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button
                    variant='solid'
                    className='rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  >
                    Live Site
                  </Button>
                  <Button
                    variant='ghost'
                    className='text-md font-semibold leading-6 text-gray-900 hover s:underline'
                  >
                    GitHub Repo→
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
          <div className='mx-auto py-10'>
            <Card maxW='sm'>
              <CardHeader>Project #3</CardHeader>
              <CardBody>
                <Image src='' alt='' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Project text goes here</Heading>
                  <Text>Built with x,y,z</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button
                    variant='solid'
                    className='rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  >
                    Live Site
                  </Button>
                  <Button
                    variant='ghost'
                    className='text-md font-semibold leading-6 text-gray-900 hover s:underline'
                  >
                    GitHub Repo→
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
