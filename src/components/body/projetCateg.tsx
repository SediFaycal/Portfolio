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
  
  export default function CategorieListe() {
      const images = [
          {
            url: 'www.flexlike.fr',
            src: '/merEnCarre.png',
          },
          {
            url: 'www.youtube.fr',
            src: 'shoesRoue.png',
          },
          {
              url: 'lien_vers_image_3',
              src: 'subaruHoucine.png',
            },

        ];
  
    return (
      <>
        <Container maxW={'6xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 10 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Mes Projets Photos
            </Heading>
            <Heading
              fontWeight={1000}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Blue Subaru
            </Heading>
            <SimpleGrid columns={3} spacing={4} mt={10}>
              {images.map((image, index) => (
               <a href={image.url} key={index}>
                  <Image
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      _hover={{
                        transform: 'scale(1.1)', // Augmente la taille au survol
                        transition: 'transform 0.3s', // Ajoute une transition fluide
                      }}
                      
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
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}>
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Container>
      </>
    )
  }
  