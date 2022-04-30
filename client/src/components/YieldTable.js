import React from "react";
import { Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";

const YieldTable = (props) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Collection</Th>
          <Th textAlign="center">Floor</Th>
          <Th textAlign="center">Floor</Th>
          <Th textAlign="center">UTO Allocation</Th>
          <Th textAlign="center">Allocation Value</Th>
          <Th textAlign="center">Yearly ROI</Th>
          <Th isNumeric>Breakeven Days</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.tableData.map((item, index) => {
          return (
            <Tr key={index}>
              <Td>{item.title}</Td>
              <Td textAlign="center">{item.fp} N</Td>
              <Td textAlign="center">
                ${(item.fp * props.nearPrice).toFixed(2).toLocaleString()}
              </Td>
              <Td textAlign="center">{item.utoReward} UTO</Td>
              <Td textAlign="center">
                $ {(item.utoReward * props.utoPrice).toFixed(2)}
              </Td>
              <Td textAlign="center">
                {(
                  (365 * item.utoReward * props.utoPrice) /
                  (item.fp * props.nearPrice)
                ).toFixed(4) * 100}
                %
              </Td>
              <Td textAlign="center">
                {(
                  (item.fp * props.nearPrice) /
                  (item.utoReward * props.utoPrice)
                ).toFixed(2)}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default YieldTable;
