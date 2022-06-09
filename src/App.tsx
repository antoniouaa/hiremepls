import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Blog, BlogPage } from "./components/blog";
import Footer from "./components/common/Footer";

import projects from "./projects.json";
import posts from "./posts.json";
import { Container, Main } from "./components/common/styled";

function App() {
  React.useEffect(() => { document.title = "antoniouaa" });
  const Landing = () => {
    return <Container align="flex-start">
      <About />
      <Projects projects={projects} />
    </Container>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Main>
          <Routes>
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/blog" element={<Blog posts={posts} />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </Main>

        <Footer />
      </div >
    </BrowserRouter >
  );
}

export default App;