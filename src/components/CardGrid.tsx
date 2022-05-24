import { useState, useEffect } from "react";

import styled from "styled-components";

import Card from "./Card";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const CardGrid = ({ projects }) => {
    const [openIndexTab, setOpenIndexTab] = useState(-1);
    const processProps = (cards) =>
        cards.map((e, i) => {
            return {
                node: e.node,
                index: i,
                openTab: openIndexTab,
                setOpenTab: setOpenIndexTab,
            };
        });
    const [cards, setCards] = useState(processProps(projects));

    useEffect(() => {
        setCards(processProps(cards));
    }, [openIndexTab, processProps]);

    return (
        <Container>
            {cards.map((props, i) => (
                <Card key={i} {...props} />
            ))}
        </Container>
    );
};

export default CardGrid;