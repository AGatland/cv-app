import { Group, Container } from '@mantine/core';
import classes from './styles.module.css';
import ColorSchemeButton from './colorSchemeButton';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
      <Container size="md">
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm">
            <Link to={"/"} className={classes.link}>Overview</Link>
            <Link to={"/"} className={classes.link}>Skills</Link>
            <Link to={"/"} className={classes.link}>Projects</Link>
          </Group>
          <ColorSchemeButton />
        </div>
      </Container>
  );
}