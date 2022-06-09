import { BlogNode } from "./blog/Blog";

export const sortByDate = (left: BlogNode, right: BlogNode) => {
    const d1 = new Date(left.node.createdAt);
    const d2 = new Date(right.node.createdAt);
    // Newest first
    if (d1 < d2) return 1;
    if (d1 > d2) return -1;
    return 0;
}

export const cleanDate = (createdAt: string) =>
    new Date(createdAt).toLocaleString("en-UK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });