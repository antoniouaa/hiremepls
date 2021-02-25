import React, { useState } from "react";
import { Flex, Grid, GridItem, Text, Box } from "@chakra-ui/react";
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
        <Text className="title-text" fontSize="4xl">
          <pre>a Computer Science</pre> and Finance graduate
          <pre>
            working with <span className="blue-text">full-stack</span> apps
          </pre>
        </Text>
        <Box as="button" className="show-grid-button" onClick={onShowGridClick}>
          PROJECTS
        </Box>
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
