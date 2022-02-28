import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import AboutImage from "../assets/images/aboutimage.png";

const About = () => {
  return (
    <Flex>
      <Box>
        <Text color="white" margin="auto" textAlign="center" fontSize="4vw">
          About Me
        </Text>
        <Image src={AboutImage} p="1rem" w="25rem" margin="auto" opacity=".5" />

        <Text color="white">
          I'm a full-stack Software Engineer based out of Los Angeles, CA.
          <br />
          <br />I believe a web product should look nice and easy to use. As a
          developer, it is my job to build a product that is attractive,
          functional, and reliable.
          <br />
          <br />
          With 15 years of experience as a musician along with my skills as a
          developer, I am dedicated to offer pleasing results both on stage and
          on the screen. I am creative and passionate about coding, looking for
          a new adventure in the tech industry.
          <br />
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
