import React from "react";
import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import MongoDB from "../assets/icons/mongodb.svg";
import Adobe from "../assets/icons/adobe-creativecloud.svg";
import Amazon from "../assets/icons/amazonwebservices.svg";
import Css3 from "../assets/icons/css3.svg";
import Javascript from "../assets/icons/java-script.svg";
import Nginx from "../assets/icons/nginx1.svg";
import Nodejs from "../assets/icons/node-js.svg";
import Shopify from "../assets/icons/shopify1.svg";

const Skill = () => {
  return (
    // <Box className="container">
    <Box className="hex-container" m="auto">
      <Flex>
        <div class="hex-row">
          <div class="hex" id="invisible">
            <div class="top"></div>
            <div class="middle"></div>
            <div class="bottom"></div>
          </div>
          <div class="hex">
            <div class="top"></div>
            <div class="middle">
              <Image src={Adobe} alt="mongodb" />
            </div>
            <div class="bottom"></div>
          </div>
          <div class="hex">
            <div class="top"></div>
            <div class="middle">
              <Image src={MongoDB} alt="mongodb" />
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </Flex>
      <Flex>
        <div class="hex-row even">
          <div class="hex">
            <div class="top"></div>
            <div class="middle">
              <Image src={MongoDB} alt="mongodb" />
            </div>
            <div class="bottom"></div>
          </div>
          <div class="hex">
            <div class="top"></div>
            <div class="middle">
              <Image src={MongoDB} alt="mongodb" />
            </div>
            <div class="bottom"></div>
          </div>
          <div class="hex">
            <div class="top"></div>
            <div class="middle">
              <Image src={MongoDB} alt="mongodb" />
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </Flex>
    </Box>
    // </Box>
  );
};

export default Skill;
