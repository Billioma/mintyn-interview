import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Layout = ({ color, label, data }) => {
  return (
    <Flex my={3} fontSize="14px" gap="1rem">
      <Text>{label}</Text>
      <Text color={color}>{data}</Text>
    </Flex>
  );
};
