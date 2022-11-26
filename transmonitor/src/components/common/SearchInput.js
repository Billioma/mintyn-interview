import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup w={["70%", "30%", "30%", "50%"]}>
      <InputLeftElement children={<BsSearch color="gray" />} />
      <Input placeholder="Search" _placeholder={{ color: "gray" }} />
    </InputGroup>
  );
};

export default SearchInput;
