import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
  Flex,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { activeStyle, orders, paymentMenu } from "../common/constants";
import { Pfp } from "../../assets/export";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#fff" color="#000">
          <DrawerCloseButton />

          <DrawerBody p={0} fontSize="13px">
            {" "}
            <Box
              h={"100vh"}
              w="100%"
              overflowY="hidden"
              transition="0.3s all ease-in-out"
            >
              <Flex
                flexDirection="column"
                mt="30px"
                align="center"
                borderBottom="2px"
                borderColor="#000"
                pb="15px"
              >
                <Avatar size="md" src={Pfp} />

                <Text textAlign="center" fontSize="15px" fontWeight="500">
                  Oluwaleke Ojo
                </Text>
              </Flex>

              <Flex
                flexDir={"column"}
                borderBottom="2px"
                borderColor="#000"
                pb="15px"
              >
                <Box>
                  <Text fontSize="17px" mx={7} my={5}>
                    Main
                  </Text>
                  <NavLink
                    to={"/overview"}
                    style={({ isActive }) =>
                      isActive
                        ? { ...activeStyle }
                        : {
                            ...activeStyle,
                          }
                    }
                  >
                    <Flex gap="1rem" align="center" mx={3}>
                      <Text>Overview</Text>
                    </Flex>
                  </NavLink>
                </Box>

                <Box mx={5} my={5}>
                  <Text fontSize="17px">Payments</Text>
                  {paymentMenu.map((item, i) => (
                    <Flex gap="1rem" my={3} key={i} align="center">
                      <Text>{item.name}</Text>
                    </Flex>
                  ))}
                </Box>

                <Box mx={5} my={5}>
                  <Text fontSize="17px">Orders</Text>
                  {orders.map((item, i) => (
                    <Flex gap="1rem" my={3} key={i} align="center">
                      <Text>{item.name}</Text>
                    </Flex>
                  ))}
                </Box>

                <Flex gap="1rem" my={3} mx={5} align="center">
                  <Text fontSize="17px">Merchant Profile</Text>
                </Flex>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
