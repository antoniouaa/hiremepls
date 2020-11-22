import React from "react";

import { Link } from "react-router-dom";

import "./Project.css";

export default function Project(props) {
  const url = "/projects/" + props.name;

  return (
    <div className="project">
      <Link to={url}>
        <h2 className="project-title">{props.name}</h2>
        <div className="project-meta">
          <h5 className="project-url">
            {props.url} - {props.createdAt}
          </h5>
          <div>
            <p className="project-description">{props.description}</p>
            <p className="project-last-update">
              {props.primaryLanguage}, Last updated {props.pushedAt}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
