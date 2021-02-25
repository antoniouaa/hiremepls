import { Flex, Text, Link, Box } from "@chakra-ui/react";
import React from "react";

export default function Project({
  name,
  description,
  createdAt,
  pushedAt,
  url,
  primaryLanguage,
  color,
}) {
  return (
    <Flex className="project-container">
      <Text className="project-title">
        <Link href={url}>{name}</Link>
      </Text>
      <Text className="project-description">{description}</Text>
      <Text>
        <span className="project-language" style={{ color: color }}>
          {primaryLanguage.name}
        </span>
      </Text>
    </Flex>
  );
}
