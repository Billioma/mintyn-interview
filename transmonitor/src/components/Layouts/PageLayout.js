import React, { useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import SideBar from "./SideBar";
import Header from "./Header";

export const Layout = ({ children }) => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <Box color="#000" position="relative">
      <Box minH="100vh" overflowX="hidden">
        <Header data={showSideBar} />
        {!isMobile && <SideBar />}
        <Box
          w={["100%", "100%", "100%", "100%"]}
          pt={130}
          bg="#EEF8FD"
          minH="100vh"
          pl={!isMobile ? "250px" : "20px"}
          pr={!isMobile ? "50px" : "20px"}
          pb={10}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
