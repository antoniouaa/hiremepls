import React from "react";

import "./Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <h2 className="project-title">{props.name}</h2>
      <p className="project-url">
        {props.url} - {props.createdAt}
      </p>
      <p className="project-description">{props.description}</p>
      <p className="project-last-update">
        {props.primaryLanguage}, Last updated {props.pushedAt}
      </p>
    </div>
  );
}
