/* eslint-disable react/prop-types */
import { ActionIcon, Container, Text, Title } from "@mantine/core";
import classes from './styles.module.css';
import { IconArrowBack } from "@tabler/icons-react";



export default function ProjectDetails({ data, setSelectedCard }) {

    return (
        <Container className={classes.projectInfo} p={"lg"} pt={""} pb={"xl"}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                    <Title className={classes.title}>{data.employer}</Title>
                    <Title order={2} className={classes.title1}>{data.title} |</Title> <Title order={2} className={classes.title2}>{data.topic} </Title>
                </div>
                <ActionIcon onClick={() => setSelectedCard(-1)}>
                    <IconArrowBack />
                </ActionIcon>
            </div>
            <br /><br />
            <Text className={classes.text}>{data.description}</Text>
        </Container>
    )
}