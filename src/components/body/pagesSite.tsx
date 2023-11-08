'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Link,
} from '@chakra-ui/react'
import { BsGithub } from "react-icons/bs"


export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'} mt={5}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Link href="https://github.com/SediFaycal" color="blue.500" _hover={{ color: "red.500" }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Mon GitHub
          </Heading>
        </Link>
          <Text mb={5}>
            Je suis [Votre Nom], un développeur Full Stack en constante quête d'amélioration et d'innovation. Mon portfolio est une fenêtre sur mon voyage au sein de l'univers du développement, un voyage marqué par la croissance, l'apprentissage et la recherche de l'excellence.
            Ma passion pour le développement logiciel m'a conduit à explorer les moindres recoins de la technologie, des langages de programmation aux frameworks et aux applications du monde réel. Chaque projet que vous trouverez ici est une étape dans mon parcours d'apprentissage, un reflet de mon dévouement à maîtriser les technologies les plus récentes.
            Je crois en la puissance de la technologie pour transformer le monde, et c'est cette conviction qui m'inspire à créer des applications puissantes, des sites web interactifs et des solutions innovantes. Mon travail est le fruit de nombreuses heures passées à résoudre des problèmes, à explorer de nouvelles idées et à repousser les limites du développement.
            Au fil des ans, j'ai eu l'opportunité de collaborer avec divers clients et entreprises, d'acquérir de l'expérience dans de multiples domaines et de participer à des projets stimulants. Mais ma soif de connaissance est insatiable, et je reste en perpétuelle évolution pour rester à la pointe de la technologie.
            Je vous invite à parcourir mon portfolio pour découvrir mon parcours, mes réalisations passées et mes projets en cours. Si vous souhaitez discuter de collaborations potentielles, de défis technologiques passionnants ou simplement échanger sur des idées, n'hésitez pas à me contacter.
            Merci d'avoir pris le temps de visiter mon portfolio. Je suis enthousiaste à l'idée de partager mon voyage en constante évolution dans le monde du développement.
          </Text>
        <Stack spacing={6} direction={'row'}>
        <Link href='/'>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'blue.500'}
            _hover={{ bg: 'red.500' }}>
            <BsGithub/>
          </Button>
        </Link>
        </Stack>
      </Stack>
    </Container>
  )
}