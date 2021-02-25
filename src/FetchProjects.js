import { projs } from "./P";

export const fetchProjects = () => {
  const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const ENDPOINT = process.env.REACT_APP_GITHUB_ENDPOINT;

  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      query {
        user(login: "antoniouaa") {
          pinnedItems(first: 5, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  createdAt
                  url
                  pushedAt
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    }),
  };

  // const fetchPins = async (options) => {
  //   const response = await fetch(ENDPOINT, options);
  //   const data = await response.json();
  //   return data.data.user.pinnedItems.edges;
  // };

  const fetchPins = async (options) => {
    const response = await fetch(ENDPOINT, options);
    if (response.status !== 200) {
      return projs;
    } else {
      const data = await response.json();
      return data.data.user.pinnedItems.edges;
    }
  };

  return fetchPins(fetchConfig);
};
