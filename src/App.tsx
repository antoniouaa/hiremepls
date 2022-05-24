import { useEffect } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

import projects from "./projects.json";

function App() {
  useEffect(() => { document.title = "antoniouaa" });
  return (
    <div className="App">
      <Header />
      <About />
      <Projects projects={projects} />
    </div>
  );
}

export default App;