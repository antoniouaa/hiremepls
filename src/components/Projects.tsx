import styled from "styled-components";

import CardGrid from "./CardGrid";

const Container = styled.div`
    text-align: left;
`;

export type ProjectDetails = {
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
    node: ProjectDetails
}

type ProjectData = {
    data: {
        user: {
            pinnedItems: {
                totalCount: number
                edges: Array<ProjectNode>
            }
        }
    }
}

interface IProjectParams {
    projects: ProjectData
}

const Projects = ({ projects }: IProjectParams) => {
    const nodes = projects.data.user.pinnedItems.edges;

    return (
        <Container>
            <CardGrid nodes={nodes} />
        </Container>
    );
};

export default Projects;