import React, { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LandingPage } from "./Components/LandingPage";
import { SideBar } from "./Components/Sidebar";
import { fetchProjects } from "./FetchProjects";
import { CVPage } from "./Components/CVPage";

const COLORS = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
};

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const queryGHAPI = async () => {
      const projs = await fetchProjects();
      setProjects(
        projs.map((project) => {
          const lang = project.node.primaryLanguage.name;
          return { ...project.node, color: COLORS[lang] };
        })
      );
    };
    queryGHAPI();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ChakraProvider>
          <Flex
            className="App-container"
            backgroundImage={`url(${process.env.PUBLIC_URL}/assets/cityscape.jpg)`}>
            <SideBar />
            <Switch>
              <Route exact path="/">
                <LandingPage projects={projects} />
              </Route>
              <Route exact path="/cv" component={CVPage} />
            </Switch>
          </Flex>
        </ChakraProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
