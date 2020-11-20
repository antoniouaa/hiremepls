import React from "react";

import "./Sidebar.css";

export default function Sidebar(props) {
  const tags = ["Home", "Projects", "Contact"];
  return (
    <nav className="static-sidebar">
      <ul className="sidebar-list">
        {tags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
    </nav>
  );
}
