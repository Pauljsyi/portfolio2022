import { Flex, Box, Image, Text, Link } from "@chakra-ui/react";

import React from "react";

import Logo from "../assets/images/white-logo.png";
import Logo1 from "../assets/images/logo-js-white.png";

const Navbar = () => {
  return (
    <Flex
      className="navbar"
      w={["100%", "100%", "80%"]}
      m="auto"
      backgroundColor="rgb(19, 30, 34)"
      flexDir="row"
      justifyContent="space-between"
      p="1rem"
      z-index="1"
    >
      <Link href="/" style={{ boxShadow: "none" }} className="logo">
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
        m="1rem 0"
        fontFamily="Comfortaa"
        fontWeight="bold"
        p="1rem 0"
      >
        <Link href="#about" m="1rem" style={{ textDecoration: "none" }}>
          <Text fontSize={["1em", "1.3em", "1.7em"]}>about</Text>
        </Link>
        <Link href="#projects" m="1rem" style={{ textDecoration: "none" }}>
          <Text fontSize={["1em", "1.3em", "1.7em"]}>work</Text>
        </Link>
        <Link href="#contact" style={{ textDecoration: "none" }}>
          <Text p="1rem" fontSize={["1em", "1.3em", "1.7em"]}>
            contact
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
