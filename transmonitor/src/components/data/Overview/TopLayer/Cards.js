import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { CardChart } from "../../Charts/CardChart";

export const Layout = ({ label, data }) => {
  return (
    <GridItem colSpan={[1, 1, 1, 1]} width="100%">
      <Box bg="#fff" h="fit-content" w="100%" p={5} borderRadius="5px">
        <Flex>
          <Box>
            <Text fontSize={["20px", "20px", "17px", "12px"]}>{label}</Text>
            <Text fontSize={["25px", "25px", "22px", "20px"]}>{data}</Text>
          </Box>
          <Box w="45%">
            <CardChart />
          </Box>
        </Flex>
      </Box>
    </GridItem>
  );
};

const Cards = () => {
  return (
    <Grid
      w={"100%"}
      my={10}
      gap={5}
      templateColumns={[
        "repeat(1,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(4,1fr)",
      ]}
      marginBottom="20px"
    >
      <Layout label="Daily transaction Volume" data="2,342" />
      <Layout label="Daily transaction Value" data="₦4,000,000" />
      <Layout label="Total transaction Volume" data="452,000" />
      <Layout label="Total transaction Value" data="₦4,000,000" />
    </Grid>
  );
};

export default Cards;
