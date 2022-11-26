import { Box } from "@chakra-ui/react";
import React from "react";
import Cards from "../../components/data/Overview/TopLayer/Cards";
import TableLayout from "../../components/data/Overview/BottomLayer/TableLayout";
import MiddleLayer from "../../components/data/Overview/MiddleLayer/MiddleLayer";

const Dashboard = () => {
  return (
    <Box>
      <Cards />
      <MiddleLayer />
      <TableLayout />
    </Box>
  );
};

export default Dashboard;
