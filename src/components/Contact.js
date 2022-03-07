import React from "react";
import { Image, Button, Flex, Heading, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box h="auto" w="50%" borderRadius="5px" m="5rem auto" bg="white">
      <FormControl>
        <Flex>
          <Box>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input id="first-name" placeholder="First name" />
          </Box>
          <Box>
            <FormLabel htmlFor="last-name">Last name</FormLabel>
            <Input id="last-name" placeholder="Last name" />
          </Box>
        </Flex>

        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Contact;
