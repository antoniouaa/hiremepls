import React from "react";
import { Flex, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import { HorizontalRule } from "./HorizontalRule";

import "./cvpage.css";

export const CVPage = () => {
  return (
    <Flex className="cv-container">
      <Box>
        <Text id="cv" className="cv-title">
          Curriculum Vitae
        </Text>
      </Box>
      <Text className="cv-title" fontSize="20px" marginLeft="200px">
        <strong>Education</strong>
      </Text>
      <Flex className="cv-item">
        <Box className="cv-date">
          <time>2019 – 2020</time>
          <Text className="cv-uni">University of Essex</Text>
        </Box>
        <Box className="cv-para">
          <Text>
            <strong>MSc Computational Finance</strong>
          </Text>
          Modules included:
          <UnorderedList className="cv-subjects">
            <ListItem>Risk Management and Financial Engineering</ListItem>
            <ListItem>Quantitative Methods in Finance and Trading</ListItem>
            <ListItem>Computational Models in Economics and Finance</ListItem>
          </UnorderedList>
        </Box>
      </Flex>

      <Flex className="cv-item">
        <Box className="cv-date">
          <time>2016 – 2019</time>
          <Text className="cv-uni">University of Essex</Text>
        </Box>
        <Box className="cv-para">
          <Text>
            <strong>BSc Computer Science</strong>
          </Text>
          Modules included:
          <UnorderedList className="cv-subjects">
            <ListItem>Advanced Programming (Java)</ListItem>
            <ListItem>Network Security</ListItem>
            <ListItem>Information Retrieval</ListItem>
            <ListItem>
              Large Scale Software Systems and Extreme Programming (Python)
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <HorizontalRule />

      <Text className="cv-title" fontSize="20px" marginLeft="200px">
        <strong>Work Experience</strong>
      </Text>
      <Flex className="cv-item">
        <Box w="200px" className="cv-date">
          <time>2015</time>
          <Text className="cv-uni">ASG Solar Technologies</Text>
        </Box>
        <Box className="cv-para">
          <Text className="cv-para">
            <strong>Internship Position</strong>
          </Text>
          <p>
            ASG Solar Technologies is a business that installs photovoltaic
            units
          </p>
          <p>
            and handles government and private energy projects. Responsibilities
          </p>
          <p>
            included assisting in the design and installation Responsibilities
          </p>
          <p>
            included assisting in the design and installation of residential PV
          </p>
          <p>units, connecting them to inverters and the Internet for remote</p>
          monitoring.
        </Box>
      </Flex>
      <HorizontalRule />
    </Flex>
  );
};
