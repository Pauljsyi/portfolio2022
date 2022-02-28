import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Background from "../assets/images/lights.jpg";
import Logo from "../assets/images/white-logo.png";

const Hero = () => {
  return (
    <Box
      w="80%"
      margin="auto"
      position="relative"
      backgroundColor="rgb(19, 30, 34)"
    >
      <Image boxSize="100%" src={Background} alt="water background" />
      <Box w="100%">
        <Text
          position="absolute"
          bottom={["30%", "75%"]}
          w="100%"
          textAlign="center"
          color="white"
          fontWeight="bold"
          fontSize="5vw"
        >
          Hi, I'm Paul
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
