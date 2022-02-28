import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/images/white-logo.png";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      m="auto"
      backgroundColor="rgb(19, 30, 34)"
      flexDir="row"
      justifyContent="space-between"
      p="1rem"
    >
      <Image boxSize="100px" src={Logo} alt="Paul Yi Logo" />
      <Flex color="white" m="1rem">
        <Text p="1rem" fontSize="1.5em">
          About
        </Text>
        <Text p="1rem" fontSize="1.5em">
          Work
        </Text>
        <Text p="1rem" fontSize="1.5em">
          Contact
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
