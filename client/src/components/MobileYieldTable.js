import React from "react";
import { Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";

const MobileYieldTable = (props) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Collection</Th>
          <Th textAlign="center">Floor ($)</Th>
          <Th textAlign="center">Yearly ROI (%)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.tableData.map((item, index) => {
          return (
            <Tr key={index}>
              <Td>{item.title}</Td>

              <Td textAlign="center">
                ${(item.fp * props.nearPrice).toFixed(2).toLocaleString()}
              </Td>
              <Td textAlign="center">
                {(
                  (365 * item.utoReward * props.utoPrice) /
                  (item.fp * props.nearPrice)
                ).toFixed(4) * 100}
                %
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default MobileYieldTable;
