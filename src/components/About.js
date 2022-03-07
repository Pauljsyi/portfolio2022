import React from "react";
import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import AboutImage from "../assets/images/aboutimage.png";
import DSG from "../assets/images/dosomethinggreat.jpg";
import Skill from "./Skill";
import MongoDB from "../assets/icons/mongodb.svg";
import Adobe from "../assets/icons/adobe-creativecloud1.svg";
import Amazon from "../assets/icons/amazonwebservices.svg";
import Css3 from "../assets/icons/css3.svg";
import Javascript from "../assets/icons/javascript.svg";
import Nginx from "../assets/icons/nginx1.svg";
import Nodejs from "../assets/icons/nodejs.svg";
import Shopify from "../assets/icons/shopify1.svg";

const About = () => {
  return (
    <Box id="about-container" m="auto">
      <Flex
        bg="#0b1214"
        p="2rem"
        w="100%"
        h="auto"
        flexDir={["column", "column", "column", "column", "row", "row", "row"]}
        margin="5rem auto"
      >
        <Image
          src={AboutImage}
          p="2rem"
          maxW="25rem"
          w="100%"
          margin="auto"
          opacity="1"
        />
        <Box
          position="relative"
          color="white"
          margin="auto"
          // fontSize="100%"
          w={["80%", "90%", "80%", "50%"]}
        >
          <Heading
            pb="2rem"
            // fontSize={["1rem", "1.5rem", "2rem", "3rem"]}
            fontSize={["1.2rem", "2rem", "3rem"]}
            fontFamily="Satisfy"
          >
            about me
          </Heading>
          <Text
            fontFamily="Josefin Sans"
            // fontSize={[".7rem", ".9rem", "1.2rem", "1.3rem", "1.5rem"]}
            fontSize={[".8rem", "1rem", "1.1rem", "1.5rem"]}
            fontWeight="800"
            // maxW="50%"

            // p="2rem"
            color="#7E827A"
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
