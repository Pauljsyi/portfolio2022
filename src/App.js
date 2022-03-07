import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import ParadigmGuitar from "./assets/images/paradigmguitar.png";
import CutCulture from "./assets/images/cutculture.png";
import AromaCo from "./assets/images/aromaco.png";
import { gsap } from "gsap";
import { Image, Button, Flex, Heading } from "@chakra-ui/react";
import AboutImage from "./assets/images/aboutimage.png";

import MongoDB from "./assets/icons/mongodb.svg";
import Adobe from "./assets/icons/adobe-creativecloud1.svg";
import Amazon from "./assets/icons/amazonwebservices.svg";
import Css3 from "./assets/icons/css3.svg";
import Javascript from "./assets/icons/javascript.svg";
import Nginx from "./assets/icons/nginx1.svg";
import Nodejs from "./assets/icons/nodejs.svg";
import Shopify from "./assets/icons/shopify1.svg";

function App() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q(".logo1"), {
        rotate: 90,
        duration: 1,
        delay: 2,
        opacity: 0,
        ease: "back",
      })
      .to(q(".logo1"), {
        rotate: -0,
        duration: 1,
        delay: 2,
        opacity: 1,
        ease: "back",
      });

    tl.current = gsap
      .timeline()
      .to(q(".logo2"), {
        rotate: 90,
        duration: 1,
        delay: 2,
        opacity: 1,
        ease: "back",
      })
      .to(q(".logo2"), {
        rotate: -0,
        duration: 1,
        delay: 2,
        opacity: 0,
        ease: "back",
      });
  }, []);

  // useEffect(() => {
  //   tl.current = gsap.to(".logo1", {
  //     delay: 3,
  //     duration: 1.5,
  //     rotate: 90,
  //     opacity: 0,
  //     ease: "back",
  //   });
  //   tl.current = gsap.to(".logo2", {
  //     delay: 3,
  //     duration: 1.5,
  //     rotate: 90,
  //     opacity: 1,
  //     ease: "back",
  //   });
  // });
  return (
    <div className="App" ref={el}>
      {/* <Router> */}
      <Navbar />
      <Hero />
      <About />
      <Heading
        color="white"
        textAlign="center"
        fontFamily="Satisfy"
        fontSize="4rem"
      >
        Projects
      </Heading>
      <Projects
        image={ParadigmGuitar}
        heading="PARADIGM GUITAR"
        text="An e-commerce website for a boutique guitar store"
        tech="mongodb express react node s3 ec2 nginx"
        live="http://www.paradigmguitar.pauljsyi.com/"
        github="https://github.com/Pauljsyi/paradigmguitar-showcase"
      />

      <Projects
        reverse
        image={AromaCo}
        heading="AROMA CO"
        text="An e-commerce website for scented candles"
        tech="shopify react chakra-ui animista heroku"
        live="http://www.aromaco.pauljsyi.com/"
        github="https://github.com/Pauljsyi/shopify-react"
      />
      <Projects
        image={CutCulture}
        heading="CUT CULTURE"
        text="Website to showcase animations using GSAP"
        tech="html css javascript gsap threejs hovereffectjs"
        live="http://cutculture.pauljsyi.com/"
        github="https://github.com/Pauljsyi/cutculture"
      />
      {/* <Flex >
        <Skill image={MongoDB} bg="black" />
        <Skill image={Adobe} bg="rgb(244, 67, 54)" />
        <Skill image={Amazon} bg="white" />
        <Skill image={Css3} bg="rgb(21, 114, 182)" />
      </Flex>
      <Flex>
        <Skill image={Javascript} bg="rgb(247, 223, 30)" />
        <Skill image={Nginx} bg="white" />
        <Skill image={Nodejs} bg="white" />
        <Skill image={Shopify} bg="rgb(9, 17, 32)" />
      </Flex> */}
    </div>
  );
}

export default App;
