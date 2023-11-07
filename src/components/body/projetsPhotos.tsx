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

export default function Liste() {
    const images = [
        {
          url: 'www.flexlike.fr',
          src: '/HoucineVoiture.png',
        },
        {
          url: 'www.youtube.fr',
          src: 'shoesRoue.png',
        },
        /////////////
        {
            url: 'lien_vers_image_3',
            src: 'subaruHoucine.png',
          },
          {
            url: 'lien_vers_image_4',
            src: 'subHoucineshoes.png',
          },
          /////////////
          {
            url: 'lien_vers_image_5',
            src: 'houcinedebout.png',
          },
          {
            url: 'lien_vers_image_6',
            src: 'subaru1.jpg',
          },
          /////////////
          {
            url: 'lien_vers_image_6',
            src: 'conducteur1.png',
          },
          {
            url: 'lien_vers_image_6',
            src: 'conducteur2.png',
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
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            textDecoration={"underline"}>
            Mes Projets Photos
          </Heading>
          <Heading
            fontWeight={1000}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Blue Subaru
          </Heading>
          <SimpleGrid columns={2} spacing={4} mt={10}>
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
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Me contacter
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
