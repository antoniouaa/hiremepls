import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Blog, BlogPage } from "./components/blog";
import Footer from "./components/common/Footer";

import posts from "./posts.json";
import { Container, Main } from "./components/common/styled";

type Post = {
  title: string,
  tagline: string,
  createdAt: string,
  updatedAt: string,
}

const postsObj = posts.reduce((map: Record<string, Post>, post) => {
  const title: string = post.node.title.toLowerCase();
  map[title] = post.node;
  return map;
}, {})

export const PostsContext = React.createContext(postsObj);

function App() {
  const Landing = () => {
    return <Container align="flex-start">
      <About />
      <Projects />
    </Container>
  }

  return (
    <PostsContext.Provider value={postsObj}>
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
    </PostsContext.Provider>
  );
}

export default App;