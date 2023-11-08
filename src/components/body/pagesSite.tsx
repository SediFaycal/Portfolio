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
import React from 'react';

import { BsGithub } from "react-icons/bs"
import { useTranslation } from 'react-i18next';

import i18n from 'i18n';


interface SkillCategoryProps {
  title: string;
  skills: string[];
}

// Composant de catégorie de compétences
function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px'}}>
      <h1>{title} :</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CallToActionWithIllustration() {
  const { t } = useTranslation();
  const technicalSkills = [
    "Langages de programmation : Html, CSS, Php, JavaScript, Python, Java, NodeJS, Typescript, Git",
    "Frameworks : React, Symfony, Spring Boot",
    "Bases de données : MySQL, MongoDB",
  ];

  const designSkills = [
    "Conception d'interfaces utilisateur",
    "Design d'expérience utilisateur (UX)",
    "Outils de design : Figma, Suite Adobe",
  ];

  const projectManagementSkills = [
    "Gestion de projet Agile",
    "Collaboration interfonctionnelle",
    "Planification et suivi de projets",
  ];

  const languages = [
    "Anglais (Courant)",
    "Français (Langue maternelle)",
  ];
  
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
        <Text style={{ textAlign: 'left' }}>
            <p><strong>Je suis SELLAH Fayçal,</strong> un développeur Full Stack en constante quête d'amélioration et d'innovation. Mon portfolio est une fenêtre sur mon voyage au sein de l'univers du développement, et de l'art à travers le monde de la photo ou bien de la vidéo, un voyage marqué par la croissance, l'apprentissage et la recherche de l'excellence.</p>
            
            <SkillCategory title="Compétences Techniques" skills={technicalSkills} />
            
            <p>Je crois en la puissance de la technologie pour transformer le monde, et c'est cette conviction qui m'inspire à créer des applications puissantes, des sites web interactifs et des solutions innovantes. Mon travail est le fruit de nombreuses heures passées à résoudre des problèmes, à explorer de nouvelles idées et à repousser les limites du développement.</p>
            
            <SkillCategory title="Compétences en Design" skills={designSkills} />
            
            <p>Au fil des ans, j'ai eu l'opportunité de collaborer avec divers clients et entreprises, d'acquérir de l'expérience dans de multiples domaines et de participer à des projets stimulants. Mais ma soif de connaissance est insatiable, et je reste en perpétuelle évolution pour rester à la pointe de la technologie.</p>
            
            <SkillCategory title="Compétences en Gestion de Projet" skills={projectManagementSkills} />
            
            <p>Langues :</p>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            
            <p><br/>Je vous invite à parcourir mon portfolio pour découvrir mon parcours, mes réalisations passées et mes projets en cours. Si vous souhaitez discuter de collaborations potentielles, de défis technologiques passionnants ou simplement échanger sur des idées, n'hésitez pas à me contacter.</p>
            
            <p>Merci d'avoir pris le temps de visiter mon portfolio. Je suis enthousiaste à l'idée de partager mon voyage en constante évolution dans le monde du développement.</p>
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