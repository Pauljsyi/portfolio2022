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
        flexDir={["column", "column", "column", reverseSection]}
        w={["80%", "80%", "80%", "80%"]}
        margin="auto"
        bg="tomato"
      >
        <Image
          src={image}
          objectFit="cover"
          w={["100%", "100%", "50%", "50%"]}
          maxH={["800"]}
          m="auto"
          // style={{ borderRadius: "150px" }}
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
        >
          <Heading color="white" p="2rem" fontFamily="Josefin Sans">
            {heading && heading}
          </Heading>
          <Text color="white" p="1rem">
            {text && text}
          </Text>
          <Text color="white" p="1rem" textAlign="center">
            {brief && brief}
          </Text>
          <Text className="tech" color="white" fontFamily="Krona One" p="2rem">
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
