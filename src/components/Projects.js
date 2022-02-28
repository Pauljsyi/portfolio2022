import React from "react";
import { Box, Flex, Image, Heading, Button, Text } from "@chakra-ui/react";

const Projects = ({ reverse, image, heading, text }) => {
  const reverseSection = reverse ? "row-reverse" : "row";
  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%">
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
        >
          <Heading>{heading && heading}</Heading>
          <Text>{text && text}</Text>
          <Button
            w="10rem"
            backgroundColor="#E3CDA4"
            color="black"
            _hover={{ opacity: "70%" }}
          >
            Live
          </Button>
          <Button
            w="10rem"
            backgroundColor="#E3CDA4"
            color="black"
            _hover={{ opacity: "70%" }}
          >
            GitHub
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Projects;
