import React from "react";
import { Box, Center, Image, Flex, Spacer, Text } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Center>
      <Box p="5" maxW="320px" borderWidth="1px" h="100%">
        <Center>
          <a target="_blank" rel="noreferrer" href={props.collection.parasURL}>
            <Image
              borderRadius="full"
              boxSize="250px"
              src={props.collection.photoURL}
            />
          </a>
        </Center>
        <br />
        <Flex>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="md"
            fontWeight="bold"
            as="i"
            color="#ECD471"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href={props.collection.parasURL}
            >
              {props.collection.title}
            </a>
          </Text>
          <Spacer />
          <a target="_blank" rel="noreferrer" href={props.collection.parasURL}>
            <Image
              borderRadius="full"
              boxSize="25px"
              src="https://pbs.twimg.com/profile_images/1321485779202236417/Rhlq_p3__400x400.png"
            />
          </a>
        </Flex>
        <Text mt={2} fontSize=",g" lineHeight="short">
          {props.collection.description}
        </Text>
      </Box>
    </Center>
  );
};

export default Card;
