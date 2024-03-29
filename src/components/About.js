import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import Paul from "../assets/images/Paul.jpg";

const About = () => {
  return (
    <Box id="about-container" m="auto" w="70%">
      <Flex
        bg="#23383f"
        p="2rem"
        w="100%"
        h="auto"
        flexDir={["column", "column", "column", "column", "row", "row", "row"]}
        margin="5rem auto"
      >
        {/* TO BE ADDED!! */}
        <Image
          src={Paul}
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
          w={["100%", "90%", "80%", "80%", "80%", "80%"]}
        >
          <Text
            fontFamily="Comfortaa"
            fontSize={[".8rem", "1rem", "1.1rem", "1.5rem"]}
            fontWeight="800"
            p={["0", "2rem"]}
            color="white"
          >
            I'm a full-stack Software Engineer based out of Los Angeles, CA.
            <br />
            <br />I believe a web product should look nice and easy to use. As a
            developer, it is my job to build a product that is attractive,
            functional, and reliable.
            <br />
            <br />
            As a musician, I am meticulous, creative, and adaptable; I find that
            translates perfectly to programming. I have experience in full-stack
            development in Python, JavaScript, C#, MySQL, and MongoDB in an
            agile environment. I will continue to strive to be a better
            programmer today than I was yesterday and continue to overcome new
            obstacles and challenges. I am passionate about coding and excited
            for a new adventure in the tech industry.
            <br />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
