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
            url: 'www.flexlike.fr',
            src: '911_1.jpg',
          },
          {
            url: 'https//.www.youtube.com',
            src: '911_arriere.jpg',
          },
          /////////////
          {
              url: 'lien_vers_image_3',
              src: 'roueArriere.jpg',
            },
            {
              url: 'lien_vers_image_4',
              src: '911_side.jpg',
            },
            /////////////
            {
              url: 'lien_vers_image_6',
              src: '911Loin.jpg',
            },
            {
              url: 'lien_vers_image_5',
              src: 'roueAvant.jpg',
            },
            /////////////
            {
              url: 'lien_vers_image_6',
              src: 'planEnsemble911.jpg',
            },
            {
              url: 'lien_vers_image_6',
              src: '911Derriere.jpg',
            },
          // Ajoutez autant d'objets que nécessaire
        ];
  
    return (
      <>
        <Container maxW={'5xl'}>
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
            <SimpleGrid columns={2} spacing={3} mt={10}>
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
  
            <Stack
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
            </Stack>
          </Stack>
        </Container>
      </>
    )
  }
  