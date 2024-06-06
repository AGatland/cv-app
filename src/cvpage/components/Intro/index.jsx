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
                    <Title className={classes.title}>Hei, jeg er Alexander</Title>
                    <Text className={classes.text}>
                        Jeg har fullført bachelorgrad fra NTNU som dataingeniør. Gjennom bachelorgraden har jeg
                        innhentet kompetanse innen diverse teknologier og områder innen utvikling, inkludert apputvikling,
                        APIer, skytjenester, databaser og webutvikling med både front- og backend. Under studiet har det også
                        vært fokus på agile arbeidsmetoder, teamarbeid og versjonskontroll.<br/><br/>

                        Som utvikler vil jeg si jeg er fleksibel og tilpasningsdyktig med kompetanse innen flere områder og trives
                        med det meste innen utvikling. Er det noe jeg ikke allerede kan, så har jeg ingenting imot å lære det.<br/><br/>

                        Jeg vil beskrive meg selv som en trivelig og omgjengelig kollega som setter stor pris på et hyggelig arbeidsmiljø. Jeg
                        verdsetter kontinuerlig læring og deling av kunnskap, med et sterkt ønske om å både tilegne meg innsikt
                        og bidra til andres vekst og utvikling.
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}