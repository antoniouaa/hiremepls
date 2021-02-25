import React from "react";
import { Flex, Grid, GridItem, Text, Box } from "@chakra-ui/react";

import Project from "./Project";

export const LandingPage = ({ projects }) => {
  return (
    <Flex className="landing-page-container">
      <Box className="title-text-container">
        <Text className="title-text" fontSize="4xl">
          Hi, I'm Alex
        </Text>
        <Text className="title-text" fontSize="4xl">
          <pre>a Computer Science</pre> and Finance graduate
          <pre>
            working with <span className="blue-text">full-stacks</span> app
          </pre>
        </Text>
      </Box>
      <Box className="project-grid">
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {projects.map((project) => (
            <GridItem>
              <Project key={project.name} {...project} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
