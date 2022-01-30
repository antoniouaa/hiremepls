import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import styled from "styled-components";

const colors = {
    Python: "#0000FF",
    JavaScript: "#FF8D10",
};

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

const Title = styled.h3`
    font-weight: bold;
    color: black;
    font-size: 18px;
    width: 100%;
    margin: 0;
    padding: 0.2em;
`;
const Details = styled.div`
    width: 100%;
    margin: 0.2em 0.2em 1em 0.2em;
`;
const Field = styled.div`
    width: 100%;
`;
const RepoLink = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`;
const WideField = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const Card = ({ node, index, openTab, setOpenTab }) => {
    const { name, description, url, createdAt, primaryLanguage, pushedAt } =
        node;
    const isOpen = openTab === index;
    const lang = primaryLanguage.name;

    const color = colors[lang];

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const dateToString = (date) =>
        new Date(date).toLocaleString("en-UK", options);

    return (
        <CardTab
            onMouseEnter={() => setOpenTab(index)}
            onMouseLeave={() => setOpenTab(-1)}
        >
            <Title>
                {isOpen ? (
                    <span>
                        &gt; <RepoLink href={url}>{name}</RepoLink>
                    </span>
                ) : (
                    name
                )}
            </Title>
            {isOpen && (
                <Details>
                    <Field>{description}</Field>
                    <WideField>
                        <span></span>
                        <span>Created {dateToString(createdAt)}</span>
                    </WideField>
                    <WideField>
                        <div>
                            Built in <span style={{ color }}>{lang}</span>
                        </div>
                        <div>Last updated {dateToString(pushedAt)}</div>
                    </WideField>
                </Details>
            )}
        </CardTab>
    );
};

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
