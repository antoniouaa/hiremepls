import React from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Box,
} from "@chakra-ui/react";

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
      <Box className="project-tabs">
        <Tabs isFitted>
          <TabList>
            {projects.map((project, i) => (
              <Tab key={i}>{project.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {projects.map((project) => (
              <TabPanel>
                <Project key={project.url} {...project} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};
