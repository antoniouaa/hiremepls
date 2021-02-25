import React, { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";

import { projs } from "./P";
import { LandingPage } from "./Components/LandingPage";
import { SideBar } from "./Components/SideBar";

const COLORS = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
};

const App = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(
      projs.map((project) => {
        const lang = project.node.primaryLanguage.name;
        console.log(lang, COLORS[lang]);
        return { ...project.node, color: COLORS[lang] };
      })
    );
  }, []);

  return (
    <div className="App">
      <ChakraProvider>
        <Flex
          className="App-container"
          backgroundImage={`url(${process.env.PUBLIC_URL}/assets/cityscape.jpg)`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat">
          <SideBar />
          <LandingPage projects={projects} />
        </Flex>
      </ChakraProvider>
    </div>
  );
};

export default App;
