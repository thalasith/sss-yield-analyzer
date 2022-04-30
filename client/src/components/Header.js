import React from "react";
import {
  Heading,
  Flex,
  Box,
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../skellies-logo.png";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

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
          <img
            src={logo}
            width="150px"
            height="auto"
            alt="Secret Skellies Society"
          />
        </Heading>
      </Flex>
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={{ base: 1, md: 0 }}
        mt={{ base: 4, md: 0 }}
      >
        <a target="_blank" rel="noreferrer" href="https://skellieverse.com/">
          <Box mb="5px">
            <Button variant="outline" _hover={{ bg: "white", color: "black" }}>
              Skellieverse
            </Button>
          </Box>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/SecretSkellies"
        >
          <Box>
            <Button variant="outline" _hover={{ bg: "white", color: "black" }}>
              Twitter
            </Button>
          </Box>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/a7CMSq56QM"
        >
          <Box>
            <Button variant="outline" _hover={{ bg: "white", color: "black" }}>
              Discord
            </Button>
          </Box>
        </a>
      </Stack>
    </Flex>
  );
};

export default Header;
