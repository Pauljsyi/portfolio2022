import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { FormLabel, Input, Textarea, Flex, Box } from "@chakra-ui/react";

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
      p="0"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ width: "80%", margin: "auto" }}
      >
        <Flex p="2rem" flexDir="column">
          <Box p="1rem 0">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="user_name" placeholder="full name" />
          </Box>
          <Box p="1rem 0">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="user_email" placeholder="email address" />
          </Box>
        </Flex>
        <Flex p="0 2rem" flexDir="column">
          <FormLabel>Message</FormLabel>
          <Textarea name="message" placeholder="say something nice" />
        </Flex>
        <Flex p="2rem">
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
  );
};

export default Contact;
