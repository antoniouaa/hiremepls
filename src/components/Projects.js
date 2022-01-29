import styled from "styled-components";

import CardGrid from "./CardGrid";

const Container = styled.div`
    text-align: left;
`;

const Projects = ({ projects }) => {
    const edges = projects.data.user.pinnedItems.edges;

    return (
        <Container>
            <CardGrid projects={edges} />
        </Container>
    );
};

export default Projects;
