import React from "react";
import { Box, Center, Image, Flex, Spacer, Text } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Center>
      <Box p="5" maxW="320px" borderWidth="1px" h="100%">
        <Center>
          <Image
            borderRadius="full"
            boxSize="250px"
            src={props.collection.photoURL}
          />
        </Center>
        <br />
        <Flex>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="xl"
            fontWeight="bold"
          >
            {props.collection.title}
          </Text>
          <Spacer />
          <a target="_blank" rel="noreferrer" href={props.collection.parasURL}>
            <Image
              borderRadius="full"
              boxSize="25px"
              src="https://paras-cdn.imgix.net/QmRY9zZdr1aYDT7221VvWytnvUwMZqw27HTc6BTYvXVu4J?w=300&auto=format,compress"
            />
          </a>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {props.collection.description}
        </Text>
      </Box>
    </Center>
  );
};

export default Card;
