import CardGrid from "../CardGrid";
import { Container } from "../common/styled";

interface IBlogParams {
    posts: BlogNode[]
}

type BlogDetails = {
    title: string,
    synopsis: string,
    body: string,
    createdAt: string,
    updatedAt: string
}

export type BlogNode = {
    node: BlogDetails
}

const Blog = ({ posts }: IBlogParams) => {
    return (
        <Container>
            <CardGrid nodes={posts} />
        </Container>
    )
}

export default Blog;