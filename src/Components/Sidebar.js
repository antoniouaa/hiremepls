import React from "react";
import { Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const SideBar = () => {
  return (
    <Flex className="App-sidebar">
      <Flex className="sidebar-text-image">
        <RouterLink to="/">
          <Image
            className="profile-image"
            borderRadius="full"
            boxSize="150px"
            src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
            alt="Alex Antoniou"
          />
        </RouterLink>
        <Text fontSize="4xl">
          <pre>Alex Antoniou</pre>
        </Text>
        <Text fontSize="xl">
          <pre>Student</pre>
          <pre>Aspiring Developer</pre>
        </Text>
      </Flex>
      <Flex id="sidebar-about-group">
        <Text className="sidebar-about">Hello friend</Text>
        <Text className="sidebar-about">Welcome to my page</Text>
        <Text className="sidebar-about">Please hire me, I need a job asap</Text>
        <Text className="sidebar-about">I beg</Text>
      </Flex>
      <Flex className="sidebar-icons">
        <Link href="https://github.com/antoniouaa">
          <AiFillGithub className="sidebar-icon" id="github" />
        </Link>
        <Link href="https://www.linkedin.com/in/antoniouaa/">
          <AiFillLinkedin className="sidebar-icon" id="linkedin" />
        </Link>
        <Link href="mailto: antoniouaa@hotmail.com">
          <AiOutlineMail className="sidebar-icon" id="mail" />
        </Link>
      </Flex>
    </Flex>
  );
};
