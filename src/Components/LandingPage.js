import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Box,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Project from "./Project";

export const LandingPage = ({ projects }) => {
  const { isOpen, onToggle } = useDisclosure();

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
          <RouterLink to="/cv">
            <Box as="button" className="landing-page-button">
              MY CV
            </Box>
          </RouterLink>
          <Box as="button" className="landing-page-button" onClick={onToggle}>
            PROJECTS
          </Box>
        </Flex>
      </Box>

      <Box className="grid-container">
        <ScaleFade initialScale={0.8} in={isOpen}>
          <Grid className="project-grid">
            {projects.map((project) => (
              <GridItem>
                <Project key={project.name} {...project} />
              </GridItem>
            ))}
          </Grid>
        </ScaleFade>
      </Box>
    </Flex>
  );
};
