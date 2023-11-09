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
  
  export default function PorschePhotos() {
      const images = [
          {
            url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
            src: '911_1.jpg',
          },
          {
            url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
            src: '911_arriere.jpg',
          },
          /////////////
          {
              url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
              src: 'roueArriere.jpg',
            },
            {
              url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
              src: '911_side.jpg',
            },
            /////////////
            {
              url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
              src: '911Loin.jpg',
            },
            {
              url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
              src: 'roueAvant.jpg',
            },
            /////////////
            {
              url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
              src: 'planEnsemble911.jpg',
            },
            {
              url: 'https://youtu.be/QlopQF8CP3M?si=lSJIZqjIyHyEjXGe',
              src: '911Derriere.jpg',
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
              color={'grey.300'} _hover={{color: "yellow.300"}}>
              GT1 in Paris !
            </Heading>
            <SimpleGrid columns={2} spacing={10} mt={10}>
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
  