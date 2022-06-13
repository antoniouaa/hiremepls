import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import rehypeRaw from "rehype-raw";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as theme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python"

import { RepoLink } from "../Card";
import { cleanDate } from "../utils";
import { PostsContext } from "../../App";
import { Button } from "../common/styled";

SyntaxHighlighter.registerLanguage("python", python)


const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px) {
        min-width: 90vw;
    }

    @media (max-width: 720px) {
        margin-bottom: 3em;
    }
`;

const Content = styled.div`
    width: 65%;
    line-height: 1.05rem;
    text-align: justify;

    @media (max-width: 1200px) {
        min-width: 90vw;
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
        min-width: 90vw;
    }

    @media (max-width: 720px) {
        margin: 0;
        flex-direction: column;
    }
`;

export const BlogPage = () => {
    const posts = React.useContext(PostsContext);
    const [text, setText] = React.useState<string>("");
    const navigate = useNavigate();
    const id = String(useParams().id).replaceAll("_", " ");

    const post = posts[id];
    const { title, createdAt } = post;
    const cleanTitle = title.replaceAll(" ", "_").replaceAll("\"", "");

    React.useEffect(() => {
        const path = require(`../../posts/${cleanTitle}.md`);
        const readText = async (path: string) => {
            const data = await fetch(path);
            const content = await data.text();
            setText(content);
        }
        readText(path);
    }, [cleanTitle])

    const handleBackClick = () => {
        navigate("/blog")
    }

    return (
        <Page>
            <Content>
                <TitleSection>
                    <span>{title}</span>
                    <span>{cleanDate(createdAt)}</span>
                </TitleSection>
                <hr />

                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        a: ({ node, title, href, ...props }) => (
                            <RepoLink href={href} style={{ color: "blue" }} {...props} />
                        ),
                        code: ({ node, inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || "");
                            const hasMeta = node?.data?.meta;
                            const content = String(children)
                                .replace(/^\n/, "")
                                .replace(/\n$/, "");

                            const lineNums = /\w+ (\w+)/.exec(className || "");

                            return match ? (
                                <SyntaxHighlighter
                                    language={match[1]}
                                    style={theme as any}
                                    PreTag="div"
                                    className="highlight"
                                    showLineNumbers={!Boolean(lineNums)}
                                    wrapLines={Boolean(hasMeta)}
                                    useInlineStyles={true}
                                    children={content}
                                    {...props} />
                            ) : (<code className={className} {...props} />
                            )
                        }
                    }}>
                    {text}
                </ReactMarkdown>
                <Button onClick={handleBackClick}>Back to Blog list</Button>
            </Content>
        </Page >
    )
}
