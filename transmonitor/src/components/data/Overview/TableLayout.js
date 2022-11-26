import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { tableHeader } from "../../common/constants";
import { IoIosArrowDown } from "react-icons/io";

export const Details = ({ reconciled, pending, unreconciled }) => {
  return (
    <Tr>
      <Td>
        <Flex align="center" gap="1rem">
          <Text bg="#7F8FA4" p={2} color="#fff" rounded="full">
            VW
          </Text>
          <Text>Apple Mac Book 15' 250 SSD 12GB</Text>
        </Flex>
      </Td>
      <Td>$73430</Td>
      <Td>1234567890</Td>
      <Td>12.30</Td>
      <Td>
        <Flex
          align="center"
          justifyContent="center"
          gap="1rem"
          border="1px solid"
          color={
            reconciled ? "green" : pending ? "orange" : unreconciled && "gray"
          }
          borderRadius="10px"
        >
          <Box
            rounded="full"
            bg={
              reconciled ? "green" : pending ? "orange" : unreconciled && "gray"
            }
            h="1vh"
            w="5%"
          ></Box>
          <Text>
            {reconciled
              ? "Reconcilled"
              : pending
              ? "Pending"
              : unreconciled && "Un-reconcilled"}
          </Text>
        </Flex>
      </Td>
      <Td>
        <IoIosArrowDown size="1.3rem" />
      </Td>
    </Tr>
  );
};
const TableLayout = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default TableLayout;
