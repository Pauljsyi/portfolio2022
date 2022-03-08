import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Social from "./Social";

import Background from "../assets/images/lights.jpg";

const Hero = () => {
  return (
    <Box w="100%" h="100vh" margin="auto" position="relative">
      <Image className="hero-img" h="100vh" src={Background} alt="light bar" />
      <Box w="80%">
        <Text
          position="absolute"
          bottom={["55%", "55%"]}
          left="0"
          right="0"
          textAlign="center"
          marginRight="auto"
          marginLeft="auto"
          color="white"
          textShadow="10px 10px #131E22"
          fontWeight="bold"
          fontSize={["2rem", "3rem", "4rem"]}
          fontFamily="Comfortaa"
        >
          p a u l . j s . y i
        </Text>
        <Text
          position="absolute"
          bottom={["50%", "45%"]}
          w="100%"
          textAlign="center"
          color="#7E827A"
          color="#C77966"
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
