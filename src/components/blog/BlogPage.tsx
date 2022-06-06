import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from "../../posts.json";

export const BlogPage = () => {
    const [text, setText] = React.useState<string>("");
    const id = parseInt(String(useParams().id));
    const post = posts[id - 1].node;

    const { title } = post;
    const cleanTitle = title.replaceAll(" ", "-").replaceAll("\"", "");

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
        <div>
            <ReactMarkdown children={text} />
        </div>
    )
}

