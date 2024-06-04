import { Group, Container, useMantineColorScheme } from '@mantine/core';
import classes from './styles.module.css';
import ColorSchemeButton from './colorSchemeButton';
import { Link } from 'react-router-dom';
import assetLogoDark from '../../assets/logoDark.svg'
import assetLogoLight from '../../assets/logoLight.svg'
import { useEffect, useState } from 'react';

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
    <div className={scrolled ? classes.headerScrolled : classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <img src={colorScheme == "dark" ? assetLogoDark : assetLogoLight} alt="Logo" className={classes.logo} />
          <Group gap={5} visibleFrom="sm">
            <Link to={"/"} className={classes.link}>Overview</Link>
            <Link to={"/"} className={classes.link}>Skills</Link>
            <Link to={"/"} className={classes.link}>Projects</Link>
          </Group>
          <ColorSchemeButton />
        </div>
      </Container>
    </div>
  );
}