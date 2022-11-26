import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdSpeed } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { orders, paymentMenu } from "../common/constants";

const Sidebar = () => {
  const activeStyle = {
    backgroundColor: "#e8f1fd",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "15px",
    margin: "16px 0",
    borderLeft: "4px solid #1860EC",
    marginLeft: "auto",
    padding: "8px",
    position: "relative",
  };

  return (
    <Box
      position={"fixed"}
      h={"100vh"}
      bg="#fff"
      fontSize="13px"
      color="gray"
      mt={50}
      w="220px"
      display={"flex"}
      flexDirection="column"
      py={5}
    >
      <Flex mx="0" flexDir={"column"} justify="center">
        <Button mx="auto" my={5} borderRadius="15px" size="sm" w="fit-content">
          GENERATE INVOICE
        </Button>

        <Box>
          <Text mx={7} my={5}>
            Main
          </Text>
          <NavLink
            to={"/overview"}
            style={({ isActive }) =>
              isActive
                ? { ...activeStyle }
                : {
                    ...activeStyle,
                    backgroundColor: "",
                    boxShadow: "",
                  }
            }
          >
            <Flex gap="1rem" align="center" mx={3}>
              <MdSpeed size="1.1rem" />
              <Text>Overview</Text>
            </Flex>
          </NavLink>
        </Box>

        <Box mx={5} my={5}>
          <Text>Payments</Text>
          {paymentMenu.map((item, i) => (
            <Flex gap="1rem" my={3} key={i} align="center">
              <Image h="2.2vh" src={item.icon} />
              <Text>{item.name}</Text>
            </Flex>
          ))}
        </Box>

        <Box mx={5} my={5}>
          <Text>Orders</Text>
          {orders.map((item, i) => (
            <Flex gap="1rem" my={3} key={i} align="center">
              <Image h="2.2vh" src={item.icon} />
              <Text>{item.name}</Text>
            </Flex>
          ))}
        </Box>

        <Flex gap="1rem" my={3} mx={5} align="center">
          <FiUser size="1.1rem" />
          <Text>Merchant Profile</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(Sidebar);
