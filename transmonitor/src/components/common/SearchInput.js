import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ payment }) => {
  return (
    <InputGroup w={["70%", "50%", "40%", "30%"]}>
      <InputLeftElement children={<BsSearch color="gray" size=".9rem" />} />
      <Input
        borderColor={payment ? "gray" : "#fff"}
        variant={payment ? "flushed" : "outline"}
        placeholder={payment ? "Search payments" : "Search"}
        _placeholder={{ fontSize: "13px", color: "gray" }}
      />
    </InputGroup>
  );
};

export default SearchInput;
