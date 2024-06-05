/* eslint-disable react/prop-types */
import { Card } from "@mantine/core";


export default function ProjectCard({ projEx }) {

    return (
        <Card withBorder shadow="sm" radius="md">
            <h1>{projEx.title}</h1>
        </Card>
    )
}