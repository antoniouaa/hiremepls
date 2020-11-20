import React from "react";

import "./Sidebar.css";

export default function Sidebar(props) {
  const tags = ["Home", "Projects", "Contact"];
  return (
    <nav className="static-sidebar">
      <ul className="sidebar-list">
        {tags.map((tag, idx) => {
          return (
            <li key={idx}>
              <a href="#">{tag}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
