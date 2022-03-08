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
  classname,
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
    <Box className={classname} p="1rem">
      <Flex
        flexDir={["column", "column", "column", "column", reverseSection]}
        w={["80%", "80%", "50%", "50%", "80%"]}
        // margin="auto"
        bg="#23383f"
        // bg="black"
        m="5rem auto"
        // borderRadius="20px"
      >
        <Image
          id="grad"
          src={image}
          objectFit="cover"
          // pt={["1rem", "1rem", "1rem", "1rem"]}
          // pb={["1rem", "1rem", "1rem", "1rem"]}
          w={["100%", "100%", "100%", "100%", "50%"]}
          h="auto"
          // m={["auto", "auto", "auto", "auto", "auto"]}
          // m="auto"
        />
        <Flex
          w={["100%", "100%"]}
          flexDir={["column", "column", "column"]}
          justifyContent="center"
          alignItems="center"
          // fontFamily="Josefin Sans"
          // p="0.3rem"
          // m="1rem"
          // maxW="450px"
          margin="auto"
          color="white"
          fontSize="1rem"
          p="3rem"
          textAlign="center"
          fontFamily="Comfortaa"
        >
          <Heading
            p="1rem"
            fontSize={["1.2rem", "2rem", "2rem"]}
            fontFamily="Comfortaa"
          >
            {heading && heading}
          </Heading>
          <Text p="1rem" fontSize={[".5rem", ".8rem", "1rem", "1.2rem"]}>
            {text && text}
          </Text>
          <Text p="1rem" fontSize={[".5rem", ".8rem", "1rem", "1.2rem"]}>
            {brief && brief}
          </Text>

          <Text
            className="tech"
            fontFamily="Krona One"
            p="2rem"
            textAlign="center"
            fontSize={[".5rem", ".8rem", "1rem", "1.2rem"]}
            style={{ wordSpacing: "2rem" }}
          >
            {tech && tech}
          </Text>

          <Flex>
            <Link href={live} style={{ textDecoration: "none" }}>
              <Button
                m="1rem"
                w={["4rem", "6rem", "8rem"]}
                backgroundColor="#66b4c7"
                color="black"
                _hover={{ opacity: "70%" }}
                fontSize={[".5rem", ".8rem", "1rem", "1.2rem"]}
              >
                Live
              </Button>
            </Link>
            <Link href={github} style={{ textDecoration: "none" }}>
              <Button
                m="1rem"
                w={["4rem", "6rem", "8rem"]}
                backgroundColor="#66b4c7"
                color="black"
                _hover={{ opacity: "70%" }}
                fontSize={[".5rem", ".8rem", "1rem", "1.2rem"]}
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
