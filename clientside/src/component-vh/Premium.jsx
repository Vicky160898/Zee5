import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const Premium = () => {
  const [ user , setUser ] = useState([]);


  
  return (
    <>
      <Box marginTop={50} bg="#0F0617" padding="50px">
        <Text color="white" fontSize={25} marginBottom="30px" fontFamily="bold">Zee5 User Data Panel</Text>
        <TableContainer w="80vw" margin="auto" border="1px solid grey">
          <Table variant="simple" color="white" border="1px solid grey">
            <TableCaption color="white" fontSize={18}>Zee5 User Data Panel</TableCaption>
            <Thead>
              <Tr>
                <Th color="white" fontSize={18}>
                  Email
                </Th>
                <Th color="white" fontSize={18}>
                  Plan Name
                </Th>
                <Th isNumeric color="white" fontSize={18}>
                  Valid Time
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th color="white" fontSize={18}>
                  Email
                </Th>
                <Th color="white" fontSize={18}>
                  Plan Name
                </Th>
                <Th isNumeric color="white" fontSize={18}>
                  Valid Time
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
