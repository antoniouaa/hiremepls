import React, { useState } from "react";
import { Flex, Grid, GridItem, Text, Box, Link } from "@chakra-ui/react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Project from "./Project";

export const LandingPage = ({ projects }) => {
  const [showGrid, setShowGrid] = useState(false);
  const onShowGridClick = (e) => {
    setShowGrid(!showGrid);
  };
  return (
    <Flex className="landing-page-container">
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
          <Box as="button" className="landing-page-button">
            <a href="/cv">my cv</a>
          </Box>
          <Box
            as="button"
            className="landing-page-button"
            onClick={onShowGridClick}>
            PROJECTS
          </Box>
        </Flex>
      </Box>

      <Box className="grid-container">
        <TransitionGroup component={null}>
          {showGrid && (
            <CSSTransition classNames="grid" timeout={30} appear>
              <Grid className="project-grid">
                {projects.map((project) => (
                  <GridItem>
                    <Project key={project.name} {...project} />
                  </GridItem>
                ))}
              </Grid>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Box>
    </Flex>
  );
};
