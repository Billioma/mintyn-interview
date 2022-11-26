import React from "react";
import { Box } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";

export const Notification = () => {
  return (
    <Box position={"relative"}>
      <AiOutlineBell size="1.5rem" />
      <Box
        bg={"#1860EC"}
        color="#fff"
        p={"1"}
        rounded={"full"}
        position={"absolute"}
        top={"-1"}
        fontSize={"7px"}
        ml={"3"}
      >
        8
      </Box>
    </Box>
  );
};
