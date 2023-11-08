import React from 'react';
import {
  Box,
  Heading,
  Container,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Liste() {
  const videos = [
    {
      url: 'videoSubaru.mov',
      title: 'Vidéo 1',
    },
    {
      url: 'videoDeauville.mov',
      title: 'Vidéo 2',
    },
    {
      url: 'videoSpain.mov',
      title: 'Vidéo 2',
    },
    // Ajoutez plus d'objets vidéo au besoin
  ];

  return (
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
          textDecoration={'underline'}>
          Mes Projets Vidéos
        </Heading>
        <Stack spacing={4} mt={10}>
          {videos.map((video, index) => (
            <video
              key={index}
              width="100%"
              controls
            >
              <source src={video.url} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          ))}
        </Stack>

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
  );
}
