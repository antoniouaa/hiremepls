import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { RepoLink } from "../Card";
import posts from "../../posts.json";

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px) {
        min-width: 85vw;
    }

    @media (max-width: 720px) {
        margin-bottom: 3em;
    }
`;

const Content = styled.div`
    width: 65%;
    line-height: 1.05rem;

    @media (max-width: 1200px) {
        min-width: 85vw;
    }

    @media (max-width: 720px) {
        margin: 0;
        min-width: 90vw;
    }
`;

const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1200px) {
        min-width: 85vw;
    }

    @media (max-width: 720px) {
        margin: 0;
        flex-direction: column;
    }
`;

export const BlogPage = () => {
    const [text, setText] = React.useState<string>("");
    const id = parseInt(String(useParams().id));
    const post = posts[id - 1].node;

    const { title, createdAt } = post;
    const cleanTitle = title.replaceAll(" ", "-").replaceAll("\"", "");

    const cleanDate = (createdAt: string) =>
        new Date(createdAt).toLocaleString("en-UK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    React.useEffect(() => {
        const path = require(`../../posts/${cleanTitle}.md`);
        const readText = async (path: string) => {
            const data = await fetch(path);
            const content = await data.text();
            setText(content);
        }
        readText(path);
    }, [cleanTitle])

    return (
        <Page>
            <Content>
                <TitleSection>
                    <span>{title}</span>
                    <span>{cleanDate(createdAt)}</span>
                </TitleSection>
                <hr />
                <ReactMarkdown components={{
                    a: ({ node, title, href, ...props }) => (
                        <RepoLink href={href} style={{ color: "blue" }} {...props} />
                    )
                }} children={text} />
            </Content>
        </Page>
    )
}

