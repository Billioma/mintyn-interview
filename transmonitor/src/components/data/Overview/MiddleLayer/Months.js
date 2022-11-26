import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Layout = ({ month }) => {
  return (
    <Text borderRight="1px solid" borderColor="blue.100" h="43vh" pr={5}>
      {month}
    </Text>
  );
};

const Months = () => {
  return (
    <Box position="relative">
      <Flex
        px={5}
        pt={10}
        justifyContent="space-between"
        w="100%"
        fontWeight="bold"
        pos="absolute"
      >
        <Layout month="Jan" />
        <Layout month="Feb" />
        <Layout month="Mar" />
        <Layout month="Apr" />
        <Layout month="May" />
        <Text>Jun</Text>
      </Flex>
    </Box>
  );
};

export default Months;
