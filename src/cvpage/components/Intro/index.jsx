import { Container, Grid, Image, Text, Title } from "@mantine/core";
import classes from './styles.module.css';
import assetProfileImg from '../../../assets/CVimg.png'

export default function Intro() {

    return (
        <Container className={classes.introContainer}>
            <Grid>
                <Grid.Col span={4}>
                    <Image radius="100%" src={assetProfileImg}></Image>
                </Grid.Col>
                <Grid.Col span={1}></Grid.Col>
                <Grid.Col span={7}>
                    <Title className={classes.title}>Hallo, jeg er Alexander</Title>
                    <Text className={classes.text}>Jeg er en fullstack utvikler</Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}