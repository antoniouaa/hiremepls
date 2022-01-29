import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const CardTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin: 0;
`;

const Title = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: black;
    font-size: 18px;
    width: 100%;
    margin: 0;
    padding: 0.2em;
`;
const Description = styled.p`
    width: 100%;
    margin: 0.2em 0.2em 1em 0.2em;
`;

const Card = ({ node }) => {
    const { name, description } = node;
    const [hovered, setHovered] = useState(false);
    const [body, setBody] = useState([description]);
    const [isOpen, setIsOpen] = useState(false);

    const expandDescription = () => {
        setHovered(true);
    };
    const collapseDescription = () => {
        setBody(description);
        setHovered(false);
    };
    const toggleDetails = () => {
        if (hovered && isOpen) {
            setIsOpen(false);
            setBody(description);
            setHovered(false);
        } else {
            setHovered(true);
            setIsOpen(true);
            const b = [
                description,
                <br />,
                <a href={node.url}>To Source Code</a>,
            ];
            setBody(b);
        }
    };

    return (
        <CardTab>
            <Title
                href="#"
                onMouseOver={!isOpen ? expandDescription : null}
                onMouseOut={!isOpen ? collapseDescription : null}
                onClick={toggleDetails}
            >
                {hovered && ">>> "} {name}
            </Title>
            {hovered && <Description>{body}</Description>}
        </CardTab>
    );
};

const CardGrid = ({ projects }) => {
    return (
        <Container>
            <h2>Projects</h2>
            {projects.map((e, i) => (
                <Card key={i} node={e.node} />
            ))}
        </Container>
    );
};

export default CardGrid;
