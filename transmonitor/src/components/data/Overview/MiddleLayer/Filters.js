import { Box, Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Filters = () => {
  return (
    <Flex p={5} align="center" gap={["5rem", "10rem", "5rem", "5rem"]}>
      <Heading fontSize="18px">Today: 5, Aug 2018</Heading>
      <Flex gap="2rem" align="center">
        <Select size="sm" border="1px solid" borderColor="gray.200">
          <option>1 Jan - 1 Jun</option>
        </Select>

        <Flex gap="1rem">
          <Box boxShadow="1px 1px 1px 1px gray">
            <IoIosArrowBack />
          </Box>
          <Box boxShadow="1px 1px 1px 1px gray">
            <IoIosArrowForward />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Filters;
