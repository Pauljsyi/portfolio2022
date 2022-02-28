import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import AboutImage from "../assets/images/aboutimage.png";
import DSG from "../assets/images/dosomethinggreat.jpg";

const About = () => {
  return (
    <Flex>
      <Image
        src={DSG}
        // position="absolute"
        style={{ zIndex: "1", opacity: ".1" }}
        backgroundColor="rgb(0, 0, 0)"
        w="100%"
        h="auto"
      />
      <Box style={{ zIndex: "2" }} margin="auto" w="100%" position="absolute">
        <Flex p="4rem" flexDir={["column", "column", "column", "row"]}>
          <Image
            src={AboutImage}
            p="2rem"
            w="25rem"
            margin="auto"
            opacity=".5"
          />
          <Box
            color="white"
            p="2rem"
            w="100%"
            margin="auto"
            fontSize={["60%", "80%", "100%"]}
          >
            <Text pb="2rem" fontSize="2rem">
              About Me
            </Text>
            <Text>
              I'm a full-stack Software Engineer based out of Los Angeles, CA.
              <br />
              <br />I believe a web product should look nice and easy to use. As
              a developer, it is my job to build a product that is attractive,
              functional, and reliable.
              <br />
              <br />
              With 15 years of experience as a musician along with my skills as
              a developer, I am dedicated to offer pleasing results both on
              stage and on the screen. I am creative and passionate about
              coding, looking for a new adventure in the tech industry.
              <br />
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
