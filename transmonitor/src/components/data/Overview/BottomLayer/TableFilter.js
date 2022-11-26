import { Flex, HStack, Select, Text } from "@chakra-ui/react";
import React from "react";
import { count, options } from "../../../common/constants";
import SearchInput from "../../../common/SearchInput";

const TableFilter = () => {
  return (
    <Flex
      mb={5}
      align={["", "center", "center", "center"]}
      flexDir={["column", "row", "row", "row"]}
      justifyContent="space-between"
    >
      <HStack w="100%">
        <Text>Showing</Text>
        <Select w={["8%", "15%", "10%", "8%"]} color="blue">
          {count.map((data, i) => (
            <option style={{ background: "#fff" }} key={i}>
              {data}
            </option>
          ))}
        </Select>
        <Text>out of 500 payments</Text>
        <SearchInput payment />
      </HStack>
      <HStack>
        <Text>Show</Text>
        <Select
          border="1px solid"
          size="sm"
          borderColor="gray"
          borderRadius="5px"
          iconColor="blue"
        >
          {options.map((data, i) => (
            <option style={{ background: "#fff" }} key={i}>
              {data}
            </option>
          ))}
        </Select>
      </HStack>
    </Flex>
  );
};

export default TableFilter;
