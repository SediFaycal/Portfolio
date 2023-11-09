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

export default function Liste() {
    const images = [
        {
          url: '#',
          src: '/HoucineVoiture.png',
        },
        {
          url: '#',
          src: 'shoesRoue.png',
        },
        /////////////
        {
            url: '#',
            src: 'subaruHoucine.png',
          },
          {
            url: '#',
            src: 'subHoucineshoes.png',
          },
          /////////////
          {
            url: '#',
            src: 'houcinedebout.png',
          },
          {
            url: 'https://www.youtube.com/watch?v=D9tTJVT31U8',
            src: 'subaru1.jpg',
          },
          /////////////
          {
            url: '#',
            src: 'conducteur1.png',
          },
          {
            url: '#',
            src: 'conducteur2.png',
          },
        // Ajoutez autant d'objets que nécessaire
      ];

  return (
    <>
      <Container maxW={'4xl'}>
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
            color={'grey.300'} _hover={{color: "#002E98"}}>
            Blue Subaru
          </Heading>
          <SimpleGrid columns={2} spacing={20} mt={10}>
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
              bg={'#002E98'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#EAB200',
              }}>
              Me contacter
            </Button>
          </Stack> */}
        </Stack>
      </Container>
    </>
  )
}
