import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Image, Button, Flex, Heading, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";
import DSG from "../assets/images/dosomethinggreat.jpg";

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wxp3bcf",
        "template_6qr4tw8",
        e.target,
        "D0ahM4ki2k3JxooDc"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Box
      h="auto"
      w={["80%", "80%", "50%"]}
      borderRadius="5px"
      m="5rem auto"
      bg="white"
      // opacity=".6"
      p="0"
    >
      <form ref={form} onSubmit={sendEmail}>
        <Flex p="1rem" flexDir="column">
          <FormLabel>Name</FormLabel>
          <Input type="text" name="user_name" placeholder="full name" />

          <FormLabel>Email</FormLabel>
          <Input type="email" name="user_email" placeholder="email address" />
        </Flex>
        <Flex p="1rem" flexDir="column">
          <FormLabel>Message</FormLabel>
          <Textarea name="message" placeholder="say something nice" />
        </Flex>
        <Flex p="1rem">
          <Input
            type="submit"
            value="Send"
            bg="rgb(80, 140, 155)"
            fontWeight="bold"
            color="white"
            cursor="pointer"
          />
        </Flex>
      </form>
    </Box>

    // ========================================
    //===================================
    // <Box
    //   h="auto"
    //   w={["80%", "80%", "50%"]}
    //   borderRadius="5px"
    //   m="5rem auto"
    //   bg="white"
    //   opacity=".8"
    //   p="5rem 0"
    // >
    //   <FormControl ref={form} onSubmit={sendEmail}>
    //     <Flex>
    //       <Box w="50%" p="1rem">
    //         <FormLabel>First name</FormLabel>
    //         <Input type="text" name="user_name" placeholder="First name" />
    //       </Box>
    //     </Flex>
    //     <Box w="100%" p="1rem">
    //       <FormLabel>Email address</FormLabel>
    //       <Input type="email" name="user_email" placeholder="email address" />
    //       <FormHelperText>Your email is safe with me ;)</FormHelperText>
    //     </Box>
    //     <Box p="1rem">
    //       <FormLabel>Comment</FormLabel>
    //       <Textarea
    //         name="message"
    //         placeholder="Hello Paul, I'd like to work with you!"
    //       />
    //     </Box>
    //     <Input type="submit" value="Send"></Input>
    //   </FormControl>
    // </Box>
  );
};

export default Contact;
