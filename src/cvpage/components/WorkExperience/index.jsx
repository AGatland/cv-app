import { Center, Container, Text, Title } from "@mantine/core";
import classes from './styles.module.css';

const workEx = [
    {
        employer: "Experis",
        title: "Fullstack utvikler",
        time: "Jan 4 2024 - Jun 18 2024",
        description: "Jobben startet med tre måneder med akselerert læring innen fullstack Java utvikling som kombinerer teori, casearbeid og sertifiseringsløp. Kurset inkluderer fullstack utvikling med Java, SpringBoot, Postgres, React og Angular. Etter disse tre månendene har konsulenten fokusert på skytjenester og tatt sertifisering i Azure og AWS og jobbet på egne relevante prosjekter innen fullstack utvikling (bl.a C# .NET)."
    },
    {
        employer: "Posten Bring",
        title: "Summer Intern",
        time: "Jun 19 2023 - Aug 11 2023",
        description: 'Sommerjobb i Posten Bring sin cloud avdeling. Konsulenten jobbet sammen i en liten gruppe på prosjektet "Summer of PAPP" og presenterte i slutten av perioden det utviklede produktet for Posten Bring.'
    }
]

export default function WorkExperience() {

    return (
        <Container className={classes.workExContainer} p={"xl"}>
            <Center className={classes.workExInfo} pb={"lg"}>
                <Title className={classes.title}>Work Experience</Title>
                <Text className={classes.text}>Områder jeg har opparbeidet meg ekspertise gjennom studiet, kurs og arbeidserfaringer så langt.</Text>
            </Center>
            {workEx.map((job, index) => (
                <div key={index} style={{paddingBottom: "var(--mantine-radius-lg)"}}>
                    <Title className={classes.title}>{job.employer}</Title>
                    <Title order={4} className={classes.title2}>{job.title} | {job.time}</Title>
                    <Text className={classes.text}>{job.description}</Text>
                </div>
            ))}
        </Container>
    )
}