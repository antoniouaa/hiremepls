import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Projects from "./components/Projects";

import projects from "./projects.json";

function App() {
    useEffect(() => (document.title = "antoniouaa"));
    return (
        <div className="App">
            <Header />
            <Projects projects={projects} />
        </div>
    );
}

export default App;
