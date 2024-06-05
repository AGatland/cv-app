import { Center, Container, Flex, Text, Title } from "@mantine/core";
import classes from './styles.module.css';
import { IconBrandAngular, IconBrandAws, IconBrandAzure, IconBrandCSharp, IconBrandDocker, IconBrandGithub, IconBrandGolang, IconBrandJavascript, IconBrandMysql, IconBrandPython, IconBrandReact, IconBrandTypescript } from "@tabler/icons-react";


export default function Skills() {

    return (
        <Container className={classes.skillsContainer} p={"xl"}>
            <Center className={classes.skillsInfo}>
                <Title className={classes.title}>Skils</Title>
                <Text className={classes.text}>Områder jeg har opparbeidet meg ekspertise gjennom studiet, kurs og arbeidserfaringer så langt.</Text>
            </Center>
            <Flex
                justify={"space-around"}
            >
            <Title>Java</Title><IconBrandCSharp size={"50"}/> <IconBrandPython size={"50"}/> <IconBrandGolang size={"50"}/>
            </Flex>

            <Flex
                justify={"space-around"}
            >
            <IconBrandJavascript size={"50"}/><IconBrandTypescript size={"50"}/><IconBrandReact size={"50"}/><IconBrandAngular size={"50"}/>
            </Flex>

            <Flex
                justify={"space-around"}
            >
            <Title>PostgreSQL</Title><IconBrandMysql size={"50"}/><Title>REST</Title>
            </Flex>

            <Flex
                justify={"space-around"}
            >
            {/* Git, Workflows, Devops*/}<IconBrandGithub size={"50"}/><Title>CI/CD</Title><IconBrandDocker size={"50"}/>
            </Flex>

            <Flex
                justify={"space-around"}
            >
            <IconBrandAzure size={"50"}/> <IconBrandAws size={"50"}/>
            </Flex>
            
        </Container>
    )
}