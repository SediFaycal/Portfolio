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
            url: 'espagne2023',
            src: '/merEnCarre.png',
            title: "Espagne 2023"
          },
          {
            url: 'blueSubaru',
            src: 'shoesRoue.png',
            title: 'Blue Subaru'
          },
          {
              url: '911Paris',
              src: '911.png',
              title: "GT1 in Paris !"
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
            fontFamily="Arial, sans-serif" 
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              color="blue.500" _hover={{ color: "red.500"}}>
              Mes Projets Photos
            </Heading>
            <SimpleGrid columns={3} spacing={4} mt={10} mb={10}>
              {images.map((image, index) => (
               <a href={image.url} key={index}>
                  <Image
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      _hover={{
                        transform: 'scale(1.1)', // Augmente la taille au survol
                        transition: 'transform 0.3s', // Ajoute une transition fluide
                      }}/>
                       <Text mt={5} fontSize="lg" fontWeight="bold">
                    {image.title}
                  </Text></a>))}
            </SimpleGrid>
        </Stack>
        </Container>
      </>
    )
  }
  