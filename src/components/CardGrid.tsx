import { useState, useEffect } from "react";

import { ProjectNode } from "./Projects"
import Card, { Container, ICardParams } from "./Card";

interface ICardGridParams {
    nodes: Array<ProjectNode>
}

const processProps = (cards: Array<ProjectNode>) => (openIndexTab: number, setOpenIndexTab: CallableFunction): Array<ICardParams> =>
    cards.map((e, i) => {
        return {
            node: e,
            index: i,
            openTab: openIndexTab,
            setOpenTab: setOpenIndexTab,
        };
    });

const CardGrid = ({ nodes }: ICardGridParams) => {
    const [openIndexTab, setOpenIndexTab] = useState<number>(-1);

    const [cards, setCards] = useState<Array<ICardParams>>(processProps(nodes)(openIndexTab, setOpenIndexTab));

    useEffect(() => {
        setCards(processProps(cards.map(c => c.node))(openIndexTab, setOpenIndexTab));
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