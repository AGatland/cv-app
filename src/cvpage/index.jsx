import { Flex, useMantineColorScheme } from '@mantine/core';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import classes from './styles.module.css';
import assetBgDark from '../assets/bgDark.jpg'
import assetBgLight from '../assets/bgLight.jpg'

export default function Cvpage() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex
        direction={"column"}
    >
        <div id='overview' className={classes.startContainer} style={{backgroundImage: `url(${colorScheme == "dark" ? assetBgDark : assetBgLight})`, backgroundSize: "cover"}}>
            <Intro />
            <Skills />
            <br /><br />
            <Certifications />
        </div>
        <div id='projects'>
          <Projects/>
        </div>
        <div id='workexperience' className={classes.endContainer} style={{backgroundImage: `url(${colorScheme == "dark" ? assetBgDark : assetBgLight})`, backgroundSize: "cover"}}>
            <WorkExperience />
        </div>
    </Flex>
  );
}