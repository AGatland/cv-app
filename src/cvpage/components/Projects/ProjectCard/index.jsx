/* eslint-disable react/prop-types */
import { Card, Flex, Text, Title } from "@mantine/core";
import classes from './styles.module.css';
import React from "react";

export default function ProjectCard({ projEx }) {

    return (
        <Card withBorder shadow="sm" radius="md" className={classes.card}>
            <div className={classes.cardInfo}>
                <Title className={classes.title2} order={2}>{projEx.employer}</Title>
                <Title className={classes.title} order={2}>{projEx.title}</Title>
                <Text className={classes.text}>{projEx.topic}</Text>
            </div>
            <Flex
                wrap={"wrap"}
                gap={"xs"}
            >
                {projEx.skills.map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                </React.Fragment>
                ))}
            </Flex>
            <div className={classes.projTxt}>
                <h4>{projEx.shortDesc}</h4>
            </div>
        </Card>
    )
}