import { useParams } from "react-router-dom";

import posts from "../../posts.json";


export const BlogPage = () => {
    const id = parseInt(String(useParams().id));
    const post = posts[id - 1].node;

    const { title, body } = post;

    return <div><h3>{title}</h3><p>{body}</p></div>
}

