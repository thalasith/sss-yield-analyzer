import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Container, Text } from "@chakra-ui/react";
import MobileYieldTable from "./MobileYieldTable";
import YieldTable from "./YieldTable";

const YieldTableContainer = (props) => {
  const [utoPrice, setUtoPrice] = useState(0);
  const [nearPrice, setNearprice] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/data");
      const undeadData = { title: "Undead Army", utoReward: 1, fp: "4.2" };
      const tableData = setTableData([...response.data.data, undeadData]);
      setUtoPrice(response.data.utoPrice);
      setNearprice(response.data.nearPrice);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <Container maxW="container.xl" centerContent>
      <br />

      {isLoading ? (
        <Text fontSize={{ base: "2xl", md: "4xl" }}>Loading...</Text>
      ) : props.isMobile ? (
        <MobileYieldTable
          tableData={tableData}
          utoPrice={utoPrice}
          nearPrice={nearPrice}
        />
      ) : (
        <YieldTable
          tableData={tableData}
          utoPrice={utoPrice}
          nearPrice={nearPrice}
        />
      )}
    </Container>
  );
};

export default YieldTableContainer;
