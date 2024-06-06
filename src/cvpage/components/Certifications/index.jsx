import { Center, Container, List, Text, Title } from "@mantine/core";
import classes from './styles.module.css';
import { IconBrandAws, IconBrandAzure } from "@tabler/icons-react";

export default function Certifications() {

    return (
        <Container className={classes.certContainer} p={"xl"}>
            <Center className={classes.certInfo}>
                <Title className={classes.title}>Certifications</Title>
            </Center>
            <List>
            <List.Item
                icon={
                    <IconBrandAzure size={40} />
                }
            >
                <Text className={classes.text}>AZ-900 Microsoft Azure Fundamentals, </Text><Text className={classes.text2}>Microsoft Azure</Text>
            </List.Item>
            <List.Item
                icon={
                    <IconBrandAws size={40} />
                }
            >
                <Text className={classes.text}>AWS Certified Cloud Practitioner, </Text><Text className={classes.text2}>Amazon Web Services (AWS)</Text>
            </List.Item>
            </List>
        </Container>
    )
}