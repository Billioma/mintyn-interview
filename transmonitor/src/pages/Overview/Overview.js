import { Box } from "@chakra-ui/react";
import React from "react";
import Cards from "../../components/data/Overview/Cards";
import TableLayout from "../../components/data/Overview/TableLayout";

const Dashboard = () => {
  return (
    <Box>
      <Cards />
      <TableLayout />
    </Box>
  );
};

export default Dashboard;
