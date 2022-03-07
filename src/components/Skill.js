import React from "react";
import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";

const Skill = ({ image, heading, bg }) => {
  return (
    <Box className="honeycomb" bg={bg}>
      <Flex w="100px" m="auto">
        <Image src={image} objectFit="cover" m="auto" p="2rem" />
      </Flex>
    </Box>
  );
};

export default Skill;
