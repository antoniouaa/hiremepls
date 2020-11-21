import React from "react";
import { Link } from "react-router-dom";

import { SidebarLinks } from "./SidebarLinks";

import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <nav className="static-sidebar">
      <ul className="sidebar-list">
        {SidebarLinks.map((tag, idx) => {
          return (
            <li key={idx}>
              <Link to={tag.url} className={tag.cName}>
                {tag.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
