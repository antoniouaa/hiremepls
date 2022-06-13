type Config = {
    method: string,
    headers: Record<string, string>
    body: string,
}

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
            pinnedItems(first: 6, types: [REPOSITORY]) {
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

    const fetchPins = async (options: Config) => {
        const response = await fetch(String(ENDPOINT), options);
        const data = await response.json();
        return data.data.user.pinnedItems.edges;
    };

    return fetchPins(fetchConfig);
};
