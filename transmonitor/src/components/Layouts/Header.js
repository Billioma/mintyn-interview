import {
  Box,
  Flex,
  HStack,
  Avatar,
  useMediaQuery,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import SideDrawer from "./SideDrawer";
import SearchInput from "../common/SearchInput";
import { Notification } from "../data/Notification/Notifications";
import { Logo, Pfp } from "../../assets/export";

const Header = () => {
  const [showDrawerMenu, setShowDrawerMenu] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  const toggleSidebar = () => {
    setShowDrawerMenu(true);
  };

  return (
    <Box
      zIndex="5"
      h={isMobile ? "8vh" : "9vh"}
      pos="fixed"
      color="gray.500"
      pl={!isMobile ? 10 : "0"}
      pr={!isMobile ? 20 : "0"}
      w="100%"
      bg="#fff"
      fontSize="14px"
      boxShadow="md"
    >
      <SideDrawer
        isOpen={showDrawerMenu}
        onClose={() => setShowDrawerMenu(false)}
      />
      {!isMobile ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="3"
          width="100%"
          borderTopLeftRadius="25px"
          transition="0.3s all ease-in-out"
          flexWrap="wrap"
        >
          <Flex w="full" align="center" justify="space-between">
            <Flex gap="4rem" align="center">
              <Image src={Logo} h="2.5vh" />
              <SearchInput />
            </Flex>
            <HStack justify="center" gap="2rem" mr={2}>
              <Text>Support</Text>
              <Text>FAQ</Text>
              <Notification />
              <Flex gap=".5rem" lineHeight="1em">
                <Flex flexDir="column" align="flex-end">
                  <Text fontSize="12px">Hello</Text>
                  <Text>Oluwaleke Ojo</Text>
                </Flex>
                <Avatar size="sm" src={Pfp} />
              </Flex>
            </HStack>
          </Flex>
        </Box>
      ) : (
        <Box my="3">
          <MdMenu
            color="mainBg"
            size={32}
            cursor="pointer"
            onClick={toggleSidebar}
          />
        </Box>
      )}
    </Box>
  );
};

export default Header;
