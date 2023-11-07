import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    Link,
    ChakraProvider,
    VStack,
  } from '@chakra-ui/react'
  import { Link as ReactLink } from 'react-router-dom';


  
  export default function MonBody() {
    const { colorMode } = useColorMode();
    const imageSrc = colorMode === 'light' ? '/volantMercedes.jpg' : '/Range.jpg'; // Remplacez 'nouvelleImage.jpg' par la source d'image réelle pour le mode nuit 
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
  <Flex p={8} flex={1} align={'center'} justify={'center'}>
    <Stack spacing={6} w={'full'} maxW={'lg'}>
      <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
        <Text as="a" href={'projetsSite'}
        _hover={{
          textDecoration: 'underline',}}>
          WEB <br/><br/>
        </Text>
        <Text as="a" href={'projetsPhotos'}
        _hover={{
          textDecoration: 'underline',}}>
          PHOTOS<br/><br/>
        </Text>
        <Text as="a" href={'/'}
        _hover={{
          textDecoration: 'underline',}}>
          VIDEOS<br/><br/>
        </Text>
      </Heading>
      {/* Le reste de votre code */}
    </Stack>
  </Flex>
  <Flex flex={1}>
    <Image
      alt={'illustration'}
      objectFit={'cover'}
      src={imageSrc}
    />
  </Flex>
</Stack>
    )
  }