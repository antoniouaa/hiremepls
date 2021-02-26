import React, { useState } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Box,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import Project from "./Project";

export const LandingPage = ({ projects }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const history = useHistory();

  const goToCV = () => {
    history.push("/cv");
  };

  const onTriggerSidebar = () => {
    setToggleSidebar(!toggleSidebar);
    if (isOpen) {
      onToggle();
    }
    const sidebar = document.querySelector(".App-sidebar");
    const landingPage = document.querySelector(".App-container");
    sidebar.style.setProperty("z-index", toggleSidebar ? "-1" : "1");
    sidebar.style.setProperty("display", toggleSidebar ? "" : "none");
    landingPage.style.setProperty("z-index", toggleSidebar ? "1" : "-1");
  };

  return (
    <Flex className="landing-page-container">
      <Box as="button" className="sidebar-trigger" onClick={onTriggerSidebar} />
      <Box className="title-text-container">
        <Text className="title-text" fontSize="4xl">
          Hi, I'm Alex
        </Text>
        <Text className="title-text" fontSize="3xl">
          <pre>a Computer Science</pre> and Finance graduate
          <pre>
            working with <span className="blue-text">full-stack</span> apps
          </pre>
        </Text>
        <Flex className="landing-button-group">
          <Box as="button" className="landing-page-button" onClick={goToCV}>
            MY CV
          </Box>
          <Box as="button" className="landing-page-button" onClick={onToggle}>
            PROJECTS
          </Box>
        </Flex>
      </Box>

      {isOpen && (
        <ScaleFade initialScale={0.8} in={isOpen}>
          <Box className="grid-container">
            <Grid className="project-grid">
              {projects.map((project, i) => (
                <GridItem>
                  <Project key={i} {...project} />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </ScaleFade>
      )}
    </Flex>
  );
};
