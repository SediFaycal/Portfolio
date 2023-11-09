import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    SimpleGrid,
    Image,
  } from '@chakra-ui/react'
  import { color } from 'framer-motion';
  
  export default function SpainPhotos() {
      const images = [
          {
            url: 'www.flexlike.fr',
            src: 'forraine.jpg',
          },
          {
            url: 'https://www.youtube.com/watch?v=XcxOo0dW1x8',
            src: 'ferrari.jpg',
          },
          /////////////
          {
              url: 'https://www.youtube.com/watch?v=JOCCV9SOFn8',
              src: 'BmwDeLoin.jpg',
            },
            {
              url: '#',
              src: 'karting.jpg',
            },
            /////////////
            {
              url: '#',
              src: 'vueBatimentMer.jpg',
            },
            {
              url: '#',
              src: 'vueMer.jpg',
            },
            /////////////
            {
              url: 'https://www.youtube.com/watch?v=QmA3CLXt-CA',
              src: 'flMiniCooper.jpg',
            },
            {
              url: 'https://www.youtube.com/shorts/bdCE4vFLTjk',
              src: 'merco.jpg',
            },
          // Ajoutez autant d'objets que nécessaire
        ];
  
    return (
      <>
        <Container maxW={'xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 10 }}>
            <Heading
              mt={7}
              fontWeight={1000}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              color={'grey.300'} _hover={{color: "red.300"}}>
              Espagne 2023
            </Heading>
            <SimpleGrid columns={1} spacing={10} mt={10}>
              {images.map((image, index) => (
               <a href={image.url} key={index}>
                  <Image
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '100%' }} 
        />
      </a>
    ))}
  </SimpleGrid>
  
            {/* <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Button
                colorScheme={'green'}
                bg={'yellow.500'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'yellow.300',
                }}>
                Me contacter
              </Button>
            </Stack> */}
          </Stack>
        </Container>
      </>
    )
  }
  