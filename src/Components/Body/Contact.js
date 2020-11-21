import React from "react";

import "./Styles.css";

export default function Contact() {
  const email = "antoniouaa@hotmail.com";
  const github = "https://github.com/antoniouaa";
  const linkedin = "https://www.linkedin.com/in/antoniouaa/";

  return (
    <>
      <div className="contact">
        <h1>Alex Antoniou</h1>
        <p>
          Email me at{" "}
          <a className="Contact-link" hrref="#">
            {email}
          </a>
        </p>
        <p>
          Github at{" "}
          <a className="Contact-link" href={github}>
            {github}
          </a>
        </p>
        <p>
          LinkedIn at{" "}
          <a className="Contact-link" href={linkedin}>
            {linkedin}
          </a>
        </p>
      </div>
    </>
  );
}
