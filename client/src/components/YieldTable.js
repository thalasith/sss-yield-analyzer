import React from "react";
import { Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";

const YieldTable = (props) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Collection</Th>
          <Th textAlign="right">Floor (N)</Th>
          <Th textAlign="right">Floor ($)</Th>
          <Th textAlign="right">Token Allocation</Th>
          <Th textAlign="right">Allocation Value ($)</Th>
          <Th textAlign="right">Yearly ROI</Th>
          <Th textAlign="right">Breakeven Days</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.tableData.map((item, index) => {
          return (
            <Tr key={index}>
              <Td>{item.title}</Td>
              <Td textAlign="right">{item.fp}N</Td>
              <Td textAlign="right">
                $
                {(item.fp * props.nearPrice).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Td>
              <Td textAlign="right">{item.utoReward} UTO</Td>
              <Td textAlign="right">
                $
                {(item.utoReward * props.utoPrice).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Td>
              <Td textAlign="right">
                {(
                  ((365 * item.utoReward * props.utoPrice) /
                    (item.fp * props.nearPrice)) *
                  100
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                %
              </Td>
              <Td textAlign="right">
                {(
                  (item.fp * props.nearPrice) /
                  (item.utoReward * props.utoPrice)
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default YieldTable;
