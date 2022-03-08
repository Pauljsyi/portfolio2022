import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

const Social = () => {
  return (
    <Flex
      className="media"
      color="#7E827A"
      fontFamily="Josefin Sans"
      fontWeight="bold"
    >
      <Link
        href="https://www.linkedin.com/in/pauljsyi"
        m="1rem"
        style={{ textDecoration: "none" }}
      >
        <Text fontSize={[".8rem", "1rem", "1.1rem", "1.5rem"]}>linkedin</Text>
      </Link>
      <Link
        href="https://www.github.com/pauljsyi"
        m="1rem"
        style={{ textDecoration: "none" }}
        h="auto"
      >
        <Text fontSize={[".8rem", "1rem", "1.1rem", "1.5rem"]}>github</Text>
      </Link>
    </Flex>
  );
};

export default Social;
