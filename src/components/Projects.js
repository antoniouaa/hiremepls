import styled from "styled-components";

import CardGrid from "./CardGrid";

const Container = styled.div`
    text-align: left;
`;

const Projects = ({ projects }) => {
    const edges = projects.data.user.pinnedItems.edges;

    return (
        <Container>
            <h2>GitHub</h2>
            <CardGrid projects={edges} />
        </Container>
    );
};

export default Projects;
