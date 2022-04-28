import React from "react";
import { Heading, Flex, Text, Box, Button, HStack } from "@chakra-ui/react";
import logo from "../skellies-logo.png";

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={1}
      bg="black"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <img src={logo} width="150px" height="auto" />
        </Heading>
      </Flex>
      <HStack>
        <a target="_blank" href="https://skellieverse.com/">
          <Box>
            <Button
              variant="outline"
              _hover={{ bg: "white", color: "black", borderColor: "teal.700" }}
            >
              Skellieverse
            </Button>
          </Box>
        </a>
        <a target="_blank" href="https://twitter.com/SecretSkellies">
          <Box>
            <Button
              variant="outline"
              _hover={{ bg: "white", color: "black", borderColor: "teal.700" }}
            >
              Twitter
            </Button>
          </Box>
        </a>
        <a target="_blank" href="https://discord.gg/a7CMSq56QM">
          <Box>
            <Button
              variant="outline"
              _hover={{ bg: "white", color: "black", borderColor: "teal.700" }}
            >
              Discord
            </Button>
          </Box>
        </a>
      </HStack>
    </Flex>
  );
};

export default Header;
