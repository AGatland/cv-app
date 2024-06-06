import classes from './styles.module.css';

import { Container, Group, ActionIcon, useMantineColorScheme, Title } from '@mantine/core';
import { IconBrandGithub, IconDeviceGamepad } from '@tabler/icons-react';
import assetLogoDark from '../../assets/logoDark.svg'
import assetLogoLight from '../../assets/logoLight.svg'

export default function Footer() {
    const { colorScheme } = useMantineColorScheme();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={colorScheme == "dark" ? assetLogoDark : assetLogoLight} alt="Logo" className={classes.logo} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <Title order={4}>This Repo: </Title>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub size={40} stroke={1.5} />
          </ActionIcon>
          <Title pl={"lg"} order={4}>My Game: </Title>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconDeviceGamepad size={40} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}