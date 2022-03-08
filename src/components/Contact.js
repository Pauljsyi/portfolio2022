import React from "react";

import { Image, Button, Flex, Heading, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box
      h="auto"
      w={["80%", "80%", "50%"]}
      borderRadius="5px"
      m="5rem auto"
      bg="white"
      opacity=".8"
      p="5rem 0"
    >
      <FormControl>
        <Flex>
          <Box w="50%" p="1rem">
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input id="first-name" placeholder="First name" />
          </Box>
          <Box w="50%" p="1rem">
            <FormLabel htmlFor="last-name">Last name</FormLabel>
            <Input id="last-name" placeholder="Last name" />
          </Box>
        </Flex>
        <Box w="100%" p="1rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" placeholder="email address" />
          <FormHelperText>Your email is safe with me ;)</FormHelperText>
        </Box>
        <Box p="1rem">
          <FormLabel htmlFor="email">Comment</FormLabel>
          <Textarea placeholder="Hello Paul, I'd like to work with you!" />
        </Box>
      </FormControl>
    </Box>
  );
};

export default Contact;
