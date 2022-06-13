import React from "react";

import { fetchProjects } from "../fetchProjects";
import CardGrid from "./CardGrid";
import { Container } from "./common/styled";

type ProjectDetails = {
    name: string
    description: string
    createdAt: string
    url: string
    pushedAt: string
    primaryLanguage: {
        name: string
    }
}

export type ProjectNode = {
    node: ProjectDetails,
}


const Projects = () => {
    const [nodes, setNodes] = React.useState<ProjectNode[]>([]);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log("pre request");

        const loadProjects = async () => {
            const projs = await fetchProjects();
            setNodes(projs);
            setIsLoaded(true);
        }
        loadProjects();
    }, [isLoaded])

    if (!isLoaded)
        return (
            <Container width="100%">
                Projects loading...
            </Container>
        )
    return (
        <Container width="100%">
            <CardGrid nodes={nodes} />
        </Container>
    );
};

export default Projects;