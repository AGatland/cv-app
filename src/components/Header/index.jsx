import { Group, Container, useMantineColorScheme, ActionIcon } from '@mantine/core';
import classes from './styles.module.css';
import ColorSchemeButton from './colorSchemeButton';
import assetLogoDark from '../../assets/logoDark.svg'
import assetLogoLight from '../../assets/logoLight.svg'
import { useEffect, useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import assetBgDark from '../../assets/bgDark.jpg'
import assetBgLight from '../../assets/bgLight.jpg'

export default function Header() {
    const { colorScheme } = useMantineColorScheme();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])

  return (
    <div className={scrolled ? classes.headerScrolled : classes.header} style={{border: "0", backgroundImage: !scrolled ? `url(${colorScheme == "dark" ? assetBgDark : assetBgLight})` : "", backgroundSize: "cover"}}>
      <Container size="md">
        <div className={classes.inner}>
          <img src={colorScheme == "dark" ? assetLogoDark : assetLogoLight} alt="Logo" className={classes.logo} />
          <Group gap={5} visibleFrom="sm">
            <a href="#overview" className={classes.link}>Overview</a>
            <a href="#projects" className={classes.link}>Projects</a>
            <a href="#workexperience" className={classes.link}>Work Experience</a>
          </Group>
          <Group>
            <ActionIcon size="xl" component="a" target='_blank' href="https://www.linkedin.com/in/alexander-gatland/"> <IconBrandLinkedin size="40" /></ActionIcon>
            <ActionIcon size="xl" component="a" target='_blank' href="https://github.com/AGatland"> <IconBrandGithub size="40" /></ActionIcon>
            <ColorSchemeButton />
          </Group>
        </div>
      </Container>
    </div>
  );
}