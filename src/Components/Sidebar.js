import React from "react";
import { Flex, Link, Image, Text, Box } from "@chakra-ui/react";

export const SideBar = () => {
  return (
    <Flex className="App-sidebar">
      <Image
        className="profile-image"
        borderRadius="full"
        boxSize="150px"
        src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
        alt="Alex Antoniou"
      />
      <Box className="sidebar-text">
        <Text fontSize="4xl">Alex Antoniou</Text>
        <Text fontSize="xl">
          <pre>Student</pre>
          <pre>Aspiring Developer</pre>
        </Text>
      </Box>
      <Flex className="sidebar-link-group">
        <Link href="https://github.com/antoniouaa">
          <Box className="sidebar-link">GitHub</Box>
        </Link>
        <Link href="https://www.linkedin.com/in/antoniouaa/">
          <Box className="sidebar-link">LinkedIn</Box>
        </Link>
        <Link href="mailto: antoniouaa@hotmail.com">
          <Box className="sidebar-link">Contact</Box>
        </Link>
      </Flex>
    </Flex>
  );
};
