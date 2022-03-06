import React from "react";

import {
  Box,
  Flex,
  Image,
  Heading,
  Button,
  Text,
  List,
  Link,
} from "@chakra-ui/react";
import mongodb from "../assets/icons/mongodb.svg";

const Projects = ({
  reverse,
  image,
  heading,
  text,
  brief,
  tech,
  live,
  github,
}) => {
  const reverseSection = reverse ? "row-reverse" : "row";
  return (
    <Box pt="10rem">
      <Flex
        flexDir={["column", "column", "column", "column", reverseSection]}
        w={["80%", "80%", "80%", "80%"]}
        margin="auto"
        bg="#2F343B"
        borderRadius="20px"
      >
        <Image
          id="grad"
          src={image}
          objectFit="cover"
          pt={["1rem", "1rem", "1rem", "1rem"]}
          pb={["1rem", "1rem", "1rem", "1rem"]}
          w={["90%", "90%", "80%", "80%", "50%"]}
          maxH={["800"]}
          // m={["auto", "auto", "auto", "auto", "auto"]}
          m="auto"
        />
        <Flex
          w={["100%", "100%"]}
          flexDir={["column", "column", "column"]}
          justifyContent="center"
          alignItems="center"
          fontFamily="Josefin Sans"
          // p="0.3rem"
          // m="1rem"
          maxW="450px"
          margin="auto"
          color="white"
          fontSize="1rem"
          pt={["1rem", "1rem", "1rem", "1rem"]}
          pb={["1rem", "1rem", "1rem", "1rem"]}
        >
          <Heading p="2rem" fontFamily="Josefin Sans">
            {heading && heading}
          </Heading>
          <Text p="1rem" fontSize="1.3rem">
            {text && text}
          </Text>
          <Text p="1rem" textAlign="center" fontSize="1.3rem">
            {brief && brief}
          </Text>
          <Text
            className="tech"
            fontFamily="Krona One"
            p="2rem"
            textAlign="center"
          >
            {tech && tech}
          </Text>

          <Flex>
            <Link href={live}>
              <Button
                m="1rem"
                w={["5rem", "10rem"]}
                backgroundColor="#E3CDA4"
                color="black"
                _hover={{ opacity: "70%" }}
              >
                Live
              </Button>
            </Link>
            <Link href={github}>
              <Button
                m="1rem"
                w={["5rem", "10rem"]}
                backgroundColor="#E3CDA4"
                color="black"
                _hover={{ opacity: "70%" }}
              >
                GitHub
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Projects;
