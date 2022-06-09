import CardGrid from "../CardGrid";
import { Container } from "../common/styled";

import { sortByDate } from "../utils";

interface IBlogParams {
    posts: BlogNode[]
}

type BlogDetails = {
    title: string,
    tagline: string,
    createdAt: string,
    updatedAt: string
}

export type BlogNode = {
    node: BlogDetails
}

const Blog = ({ posts }: IBlogParams) => {
    return (
        <Container align="flex-start">
            <CardGrid nodes={posts.sort(sortByDate)} />
        </Container>
    )
}

export default Blog;