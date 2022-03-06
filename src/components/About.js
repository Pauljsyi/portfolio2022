import React from "react";
import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import AboutImage from "../assets/images/aboutimage.png";
import DSG from "../assets/images/dosomethinggreat.jpg";
import Skill from "./Skill";

const About = () => {
  return (
    <Box>
      <Flex
        bg="#2f343b"
        p="1rem"
        w={["100%", "100%"]}
        h="80vh"
        // h="100vh"
        flexDir={["column", "column", "column", "column", "row", "row"]}
        margin="10rem auto"
      >
        {/* <Image src={AboutImage} p="2rem" w="25rem" margin="auto" opacity="1" /> */}
        <Box
          position="relative"
          color="white"
          margin="auto"
          fontSize="100%"
          w="80%"
        >
          <Heading
            pb="2rem"
            // fontSize={["1rem", "1.5rem", "2rem", "3rem"]}
            fontSize="3rem"
            fontFamily="Satisfy"
          >
            about me
          </Heading>
          <Text
            fontFamily="Josefin Sans"
            // fontSize={[".7rem", ".9rem", "1.2rem", "1.3rem", "1.5rem"]}
            fontSize="1rem"
            fontWeight="800"
            // color="#7E827A"
            opacity=".9"
            fontFamily="Josefin Sans"
          >
            I'm a full-stack Software Engineer based out of Los Angeles, CA.
            <br />
            <br />I believe a web product should look nice and easy to use. As a
            developer, it is my job to build a product that is attractive,
            functional, and reliable.
            <br />
            <br />
            With 15 years of experience as a musician along with my skills as a
            developer, I am dedicated to offer pleasing results both on stage
            and on the screen. I am creative and passionate about coding,
            looking for a new adventure in the tech industry.
            <br />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
