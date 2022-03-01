import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Social = () => {
  return (
    <Flex
      className="media"
      color="#7E827A"
      color="#C77966"
      fontFamily="Josefin Sans"
      fontWeight="bold"
    >
      <Link href="https://www.linkedin.com/in/pauljsyi" p="1rem">
        <Text fontSize=".9rem">linkedin</Text>
      </Link>
      <Link href="https://www.github.com/pauljsyi" p="1rem">
        <Text fontSize=".9rem">github</Text>
      </Link>
    </Flex>
  );
};

export default Social;
