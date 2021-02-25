import React from "react";
import { Flex, Link, Image, Text, Box } from "@chakra-ui/react";
import { Linkedin, Gmail, Github } from "@icons-pack/react-simple-icons";

export const SideBar = () => {
  return (
    <Flex className="App-sidebar">
      <Flex className="sidebar-text-image">
        <Link href="/">
          <Image
            className="profile-image"
            borderRadius="full"
            boxSize="150px"
            src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
            alt="Alex Antoniou"
          />
        </Link>
        <Text fontSize="4xl">
          <pre>Alex Antoniou</pre>
        </Text>
        <Text fontSize="xl">
          <pre>Student</pre>
          <pre>Aspiring Developer</pre>
        </Text>
      </Flex>
      <Flex className="sidebar-link-group">
        <a href="/cv">
          <Box className="sidebar-link">My CV</Box>
        </a>
      </Flex>
      <Flex className="sidebar-icons">
        <Link href="https://github.com/antoniouaa">
          <Github color="white" title="" />
        </Link>
        <Link href="https://www.linkedin.com/in/antoniouaa/">
          <Linkedin color="white" title="" />
        </Link>
        <Link href="mailto: antoniouaa@hotmail.com">
          <Gmail color="white" title="" />
        </Link>
      </Flex>
    </Flex>
  );
};
