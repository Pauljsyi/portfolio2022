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
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%" margin="auto">
        <Image
          src={image}
          objectFit="cover"
          w={["100%", "50%"]}
          maxH={["560"]}
        />
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
          m="1rem"
        >
          <Heading color="white">{heading && heading}</Heading>
          <Text color="white" p="2rem">
            {text && text}
          </Text>
          <Text color="white">{brief && brief}</Text>
          <Text className="tech" color="white" fontFamily="Krona One" p="2rem">
            {tech && tech}
          </Text>

          <Flex>
            <Link href={live}>
              <Button
                m="1rem"
                w="10rem"
                backgroundColor="#E3CDA4"
                color="black"
                _hover={{ opacity: "70%" }}
              >
                live
              </Button>
            </Link>
            <Link href={github}>
              <Button
                m="1rem"
                w="10rem"
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
