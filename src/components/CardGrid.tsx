import { useState, useEffect } from "react";

import { ProjectNode } from "./Projects"
import { BlogNode } from "./blog/Blog";
import Card, { Container, ICardParams } from "./Card";

export type CardNode = ProjectNode | BlogNode

interface ICardGridParams {
    nodes: CardNode[]
}

const processProps = (cards: CardNode[]) => (openIndexTab: number, setOpenIndexTab: CallableFunction): ICardParams[] =>
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

    const [cards, setCards] = useState<ICardParams[]>(processProps(nodes)(openIndexTab, setOpenIndexTab));

    useEffect(() => {
        setCards(processProps(cards.map(c => c.node))(openIndexTab, setOpenIndexTab));
    }, [openIndexTab, processProps]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            {cards.map((props, i) => (
                <Card key={i} {...props} />
            ))}
        </Container>
    );
};

export default CardGrid;