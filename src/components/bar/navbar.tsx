import {
  Box,
  Image,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Link,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FiArrowLeft } from "react-icons/fi";
// import logoDay from './images/FL_day.png'; // Remplacez par le chemin de l'image pour le mode jour
// import logoNight from './images/FL_night.png'; // Remplacez par le chemin de l'image pour le mode nuit

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('grey.400', 'black');
  // const [logo, setLogo] = useState(logoDay); // Initialisez le logo avec l'image du mode jour

  // const imageSrc = colorMode === 'light' ? '/FL_day.png' : '/FL_night.png';


  const toggleTheme = () => {
    toggleColorMode();
    const { colorMode } = useColorMode();
  };

  return (
    <>
      <Box bg={bgColor} px={8}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          <Link href="/">
            <FiArrowLeft/>
            {/* <Image
              src={imageSrc}
              alt="Logo"
              w={16}
              h={20}
              ml={5}
              mt={1}
            /> */}
            </Link>
            </Box>

          <Flex alignItems={'center'} flex={1} justify={"center"}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}
              color={colorMode === 'light' ? 'black' : 'white'} // Définir la couleur du texte
              bgColor={colorMode === 'light' ? 'white' : 'black'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                {/* <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList> */}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}