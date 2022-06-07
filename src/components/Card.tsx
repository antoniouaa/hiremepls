import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { CardNode } from "./CardGrid"
import { ProjectNode } from "./Projects";
import { BlogNode } from "./blog/Blog";

const colors: Record<string, string> = {
    Python: "#0000FF",
    JavaScript: "#FF8D10",
};

const sharedLinkStyle = css`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const CardTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin: 0.5em 0 0.5em 0;
`;

const Title = styled.h3`
    font-weight: normal;
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

export const RepoLink = styled.a`
    ${sharedLinkStyle}
`;

const InternalLink = styled(Link)`
    ${sharedLinkStyle}
`;

const WideField = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export interface ICardParams {
    node: CardNode
    index: number
    openTab: number
    setOpenTab: CallableFunction
}

const ProjectCard = ({ node, index, openTab, setOpenTab }: ICardParams) => {
    const project = node as ProjectNode;

    const { name, description, url, createdAt, primaryLanguage, pushedAt } =
        project.node;
    const isOpen = openTab === index;
    const lang = primaryLanguage.name;

    const color = colors[lang];

    const dateToString = (dateString: string) =>
        new Date(dateString).toLocaleString("en-UK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

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
}

const BlogCard = ({ node, index, openTab, setOpenTab }: ICardParams) => {
    const blog = node as BlogNode;
    const { title, synopsis, createdAt, updatedAt } = blog.node;

    const isOpen = openTab === index;

    const dateToString = (dateString: string) =>
        new Date(dateString).toLocaleString("en-UK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    const url = `/blog/${index + 1}`;

    return (
        <CardTab
            onMouseEnter={() => setOpenTab(index)}
            onMouseLeave={() => setOpenTab(-1)}
        >
            <Title>
                {isOpen ? (
                    <span>
                        &gt; <InternalLink to={url}>{title}</InternalLink>
                    </span>
                ) : (
                    title
                )}
            </Title>
            {isOpen && (
                <Details>
                    <Field>{synopsis}</Field>
                    <WideField>
                        <span>Created {dateToString(createdAt)}</span>
                    </WideField>
                    <WideField>
                        <div>Last updated {dateToString(updatedAt)}</div>
                    </WideField>
                </Details>
            )}
        </CardTab>
    )
}

const Card = (node: ICardParams) => {
    const n = node.node.node;

    if ("name" in n)
        return <ProjectCard {...node} />
    else
        return <BlogCard {...node} />
};

export default Card;