import { Flex, Text, Link } from "@chakra-ui/react";
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
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  return (
    <Flex className="project-container">
      <Text className="project-title">
        <Link href={url}>{name}</Link>
        <span className="project-createdat">
          Created on{" "}
          <span className="blue-text">
            {new Date(createdAt).toLocaleDateString(undefined, dateOptions)}
          </span>
        </span>
      </Text>
      <Text className="project-description">{description}</Text>
      <Text>
        <span className="project-language" style={{ color: color }}>
          {primaryLanguage.name}
        </span>
        <span className="project-pushedat">
          Last push on{" "}
          <span className="blue-text">
            {new Date(pushedAt).toLocaleDateString(undefined, dateOptions)}
          </span>
        </span>
      </Text>
    </Flex>
  );
}
