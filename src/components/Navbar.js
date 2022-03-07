import { Flex, Box, Image, Text, Link } from "@chakra-ui/react";

import React from "react";

import Logo from "../assets/images/white-logo.png";
import Logo1 from "../assets/images/logo-js-white.png";

const Navbar = () => {
  return (
    <Flex
      className="navbar"
      w="100%"
      m="auto"
      backgroundColor="rgb(19, 30, 34)"
      flexDir="row"
      justifyContent="space-between"
      p="1rem"
      z-index="1"
    >
      <Link href="/">
        <Image
          className="logo1"
          position="absolute"
          boxSize={["5em", "7em", "9em"]}
          src={Logo}
          alt="Paul Yi Logo"
          p="1rem"
        />

        <Image
          className="logo2"
          position="absolute"
          boxSize={["5em", "7em", "9em"]}
          src={Logo1}
          alt="Paul Yi Logo"
          p="1rem"
          opacity="0"
        />
      </Link>

      <Flex
        color="#7E827A"
        m="1rem"
        fontFamily="Josefin Sans"
        fontWeight="bold"
        p="1rem"
      >
        <Link href="#about-container">
          <Text p="1rem" fontSize={["1em", "1.5em", "2em"]}>
            About
          </Text>
        </Link>
        <Text p="1rem" fontSize={["1em", "1.5em", "2em"]}>
          Work
        </Text>
        <Text p="1rem" fontSize={["1em", "1.5em", "2em"]}>
          Contact
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
