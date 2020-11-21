import React, { useEffect, useState } from "react";

import Project from "./Project";
import { projs } from "./p";

import "./Project.css";

export default function ProjectsList(props) {
  const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const ENDPOINT = process.env.REACT_APP_GITHUB_ENDPOINT;
  const [projects, setProjects] = useState([]);

  // eslint-disable-next-line
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

  // eslint-disable-next-line
  const fetchPins = (options) => {
    return (
      fetch(ENDPOINT, options)
        .then((res) => res.json())
        // .then((data) => setProjects(data.data.pinnedItems.edges))
        .then((data) => console.log(data.data.pinnedItems.edges))
    );
  };

  // eslint-disable-next-line
  const checkRateLimit = () => {
    return fetch("https://api.github.com/rate_limit")
      .then((res) => res.json())
      .then((d) => console.log(d));
  };

  useEffect(() => {
    setTimeout(() => {
      setProjects(projs);
    }, 100);
  }, [setProjects]);

  return (
    <div className="project-wrapper">
      <div className="project-row">
        {projects.map((p) => {
          const {
            name,
            description,
            createdAt,
            pushedAt,
            url,
            primaryLanguage,
          } = p.node;
          return (
            <Project
              name={name}
              description={description}
              createdAt={createdAt}
              pushedAt={pushedAt}
              url={url}
              primaryLanguage={primaryLanguage.name}
            />
          );
        })}
      </div>
    </div>
  );
}
