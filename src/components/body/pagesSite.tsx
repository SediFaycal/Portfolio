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
  Center,
} from '@chakra-ui/react'
import React from 'react';

import { BsGithub } from "react-icons/bs"
import { useTranslation } from 'react-i18next';


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
    "Operating Systems: Windows XP / 7 / 10 / 11, Linux/Ubuntu, Kali",
    "Programming Languages: HTML, CSS, PHP, JavaScript, Python, Java, NodeJS, TypeScript, Git",
    "Frameworks: React, Symfony",
    "Databases: MySQL, MongoDB",
  ];

  const designSkills = [
    "User Interface Design",
    "User Experience Design (UX)",
    "Design Tools: Figma, Adobe Suite",
  ];

  const projectManagementSkills = [
    "Agile Project Management",
    "Interfunctional Collaboration",
    "Project Planning and Tracking",
  ];

  const languages = [
    "English (Fluent)",
    "French (Native Language)",
    "Spanish(School Level)",
  ];
  
  return (
    <Container maxW={'5xl'} mt={5}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Text style={{ textAlign: 'left' }}>
          <p><strong>I am SELLAH Fayçal,</strong> im 21, a Full Stack developer constantly seeking improvement and innovation. My portfolio is a window into my journey in the world of development and art through the realms of photography or video, a journey marked by growth, learning, and the pursuit of excellence.</p>

            <SkillCategory title="Technical Skills" skills={technicalSkills} />
            
            <p>I believe in the power of technology to transform the world, and it is this belief that inspires me to create powerful applications, interactive websites, and innovative solutions. My work is the result of many hours spent solving problems, exploring new ideas, and pushing the boundaries of development.</p>
            
            <SkillCategory title="Design Skills" skills={designSkills} />
            
            <p>Over the years, I have had the opportunity to collaborate with various clients and companies, gain experience in multiple domains, and participate in stimulating projects. But my thirst for knowledge is insatiable, and I remain in perpetual evolution to stay at the forefront of technology.</p>
            
            <SkillCategory title="Projetct Management Skills" skills={projectManagementSkills} />
            
            <p>Langues :</p>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            
            <p><br/>I invite you to explore my portfolio and my GitHub to discover my journey, past achievements, and ongoing projects. If you want to discuss potential collaborations, exciting technological challenges, or simply exchange ideas, please feel free to contact me.</p>
            
          </Text>
        <Stack spacing={6} direction={'row'} textAlign={'center'}>
        <Link href="https://github.com/SediFaycal" color="blue.500" _hover={{ color: "red.500" }}>
          <Heading
            textAlign={'center'}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'100%'}>
            GitHub
          </Heading>
              </Link>
        {/* <Link href='/'>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'blue.500'}
            _hover={{ bg: 'red.500' }}>
            <BsGithub/>
          </Button>
        </Link> */}
        </Stack>
      </Stack>
    </Container>
  )
}