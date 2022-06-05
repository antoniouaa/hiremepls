import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

import projects from "./projects.json";
import posts from "./posts.json";

function App() {
  React.useEffect(() => { document.title = "antoniouaa" });
  const Landing = () => {
    return <>
      <About />
      <Projects projects={projects} />
    </>
  }
  console.log(posts)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/blog" element={<Blog posts={posts} />} />
          <Route path="/" element={<Landing />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;