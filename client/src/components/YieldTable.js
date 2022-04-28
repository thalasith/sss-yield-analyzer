import React from "react";
import {
  Container,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Text,
} from "@chakra-ui/react";

const YieldTable = (props) => {
  const DUMMY_DATA = {
    utoPrice: 0.470834,
    nearPrice: 12.79,
    data: [
      { title: "Secret Skellies", utoReward: 10, fp: "266.69" },
      { title: "Grimms Army", utoReward: 6, fp: "160.00" },
      { title: "Skullingham Estates", utoReward: 12, fp: "527.69" },
    ],
  };

  return (
    <Container maxW="container.xl" centerContent>
      <Text fontSize="4xl">
        {" "}
        "The top of today is not the top of tomorrow." - Anon666{" "}
      </Text>
      <br />
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
          {DUMMY_DATA.data.map((item) => {
            return (
              <Tr>
                <Td>{item.title}</Td>
                <Td textAlign="center">{item.fp} N</Td>
                <Td textAlign="center">
                  ${" "}
                  {(item.fp * DUMMY_DATA.nearPrice).toFixed(2).toLocaleString()}
                </Td>
                <Td textAlign="center">{item.utoReward} UTO</Td>
                <Td textAlign="center">
                  $ {(item.utoReward * DUMMY_DATA.utoPrice).toFixed(2)}
                </Td>
                <Td textAlign="center">
                  {(
                    (365 * item.utoReward * DUMMY_DATA.utoPrice) /
                    (item.fp * DUMMY_DATA.nearPrice)
                  ).toFixed(4) * 100}{" "}
                  %
                </Td>
                <Td textAlign="center">
                  {(
                    (item.fp * DUMMY_DATA.nearPrice) /
                    (item.utoReward * DUMMY_DATA.utoPrice)
                  ).toFixed(2)}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default YieldTable;
