import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Social from "./Social";

import Background from "../assets/images/lights.jpg";
import Logo from "../assets/images/white-logo.png";

const Hero = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      margin="auto"
      position="relative"

      // backgroundColor="rgb(19, 30, 34)"
    >
      <Image
        className="hero-img"
        // position="absolute"
        h="100vh"
        w={["100%", "100%", "100%"]}
        // left="25%"
        // right="25%"
        src={Background}
        alt="light bar"
      />
      <Box w="100%">
        <Text
          position="absolute"
          bottom={["55%", "50%"]}
          left="0"
          right="0"
          textAlign="center"
          marginRight="auto"
          marginLeft="auto"
          color="white"
          // textShadow="3px 3px black"
          fontWeight="bold"
          fontSize={["3rem", "5rem"]}
          fontFamily="Rubik"
          opacity=".6"
        >
          PAUL JS YI
        </Text>
        <Text
          position="absolute"
          bottom={["50%", "45%"]}
          w="100%"
          textAlign="center"
          color="#7E827A"
          fontWeight="bold"
          fontSize={["1rem", "2rem"]}
          fontFamily="Satisfy"
        >
          a fullstack web developer
        </Text>
      </Box>
      <Social />
    </Box>
  );
};

export default Hero;
