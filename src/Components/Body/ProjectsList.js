import React from "react";

import Project from "./Project";

import "./Project.css";

export default function ProjectsList({ projs }) {
  return (
    <div className="project-wrapper">
      {projs.map((p) => {
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
  );
}
