import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";

import "./App.css";

import Sidebar from "./Components/Sidebar";
import Homepage from "./Components/Body/Homepage";
import Contact from "./Components/Body/Contact";
import Project from "./Components/Body/Project";
import ProjectsList from "./Components/Body/ProjectsList";

function App() {
  const [projects, setProjects] = useState([]);

  const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const ENDPOINT = process.env.REACT_APP_GITHUB_ENDPOINT;

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
    return fetch(ENDPOINT, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data.data.user.pinnedItems.edges);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchPins(fetchConfig);
    }, 1000);
  }, []);

  console.log(projects);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="App Wrapper">
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/projects">
              <ProjectsList projs={projects} />
            </Route>
            <Route path="/contact" component={Contact} />
            <Route path="/projects/:project-name">
              <Project projects={projects} />
            </Route>
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
