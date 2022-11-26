import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import Slide from "../../../common/Slide";
import { MiddleChart } from "../../Charts/MiddleChart";
import Filters from "./Filters";
import { Layout } from "./Layout";
import Months from "./Months";

const MiddleLayer = () => {
  return (
    <Grid
      w={"100%"}
      my={5}
      gap={5}
      templateColumns={[
        "repeat(1,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(4,1fr)",
      ]}
      marginBottom="20px"
    >
      <GridItem bg="#fff" colSpan={[3, 3, 3, 2]} flex="1" width="100%">
        <Filters />
        <Months />
        <Box mt={"75px"}>
          <MiddleChart />
        </Box>
      </GridItem>

      <GridItem colSpan={[3, 3, 3, 2]} flex="1" width="100%">
        <Box bg="#fff" p={4} h="30vh">
          <Heading fontSize="15px">Orders</Heading>
          <Slide />
          <Layout label="Pending Orders" color="orange" data="20" />
          <Layout label="Reconcilled Orders" color="green" data="80" />
          <Layout label="Total Orders" color="blue" data="100" />
        </Box>

        <Box mt={2} bg="#fff" p={4} h="30vh">
          <Heading fontSize="15px">Payment</Heading>
          <Slide />
          <Layout label="Un-reconcilled Payment" color="orange" data="20" />
          <Layout label="Reconcilled Payment" color="green" data="80" />
          <Layout label="Total Payment" color="blue" data="100" />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default MiddleLayer;
