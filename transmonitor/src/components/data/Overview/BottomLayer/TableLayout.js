import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { tableHeader } from "../../../common/constants";
import Pagination from "../../../common/Pagination";
import { Details } from "./TableDetails";
import TableFilter from "./TableFilter";

const TableLayout = () => {
  return (
    <Box>
      <Heading fontSize="23px">Payments</Heading>
      <TableFilter />
      <TableContainer>
        <Table bg="#fff" fontSize="13px" color="gray.500">
          <Thead bg="#EAEEF0">
            <Tr>
              {tableHeader.map((data, i) => (
                <Th textTransform="capitalize" key={i}>
                  {data}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Details reconciled />
            <Details pending />
            <Details reconciled />
            <Details reconciled />
            <Details pending />
            <Details unreconciled />
            <Details reconciled />
            <Details unreconciled />
            <Details pending />
          </Tbody>
        </Table>
      </TableContainer>
      <Flex my={5} align="center" justifyContent="space-between">
        <Box>Showing 1 to 10 of 500 entries</Box>
        <Box>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default TableLayout;
