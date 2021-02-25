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
        <Link className="sidebar-link" href="https://github.com/antoniouaa">
          GitHub
        </Link>
        <Link
          className="sidebar-link"
          href="https://www.linkedin.com/in/antoniouaa/">
          LinkedIn
        </Link>
        <Link className="sidebar-link" href="mailto: antoniouaa@hotmail.com">
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};
