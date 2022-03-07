import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import ParadigmGuitar from "./assets/images/paradigmguitar.png";
import CutCulture from "./assets/images/cutculture.png";
import AromaCo from "./assets/images/aromaco.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".paradigm",
      {
        scrollTrigger: {
          trigger: ".paradigm",
          start: "top center",
          // toggleActions: "restart pause reverse pause",
          // end: "top 100px",
          // scrub: 0.5,
        },
        x: 500,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".paradigm",
          start: "top center",
          // toggleActions: "restart pause reverse pause",
          // end: "top 100px",
          // scrub: 1,
        },
        x: 0,
        duration: 2,
        opacity: 1,
      }
    );

    gsap.fromTo(
      ".aroma",
      {
        scrollTrigger: {
          trigger: ".aroma",
          start: "top center",
          // toggleActions: "restart  reverse ",
          // end: "top 100px",
          // scrub: 0.5,
        },
        x: -500,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".aroma",
          start: "top center",
          // toggleActions: "restart  reverse ",
          // end: "top 100px",
          // scrub: 1,
        },
        x: 0,
        duration: 2,
        opacity: 1,
      }
    );

    gsap.fromTo(
      ".cutculture",
      {
        scrollTrigger: {
          trigger: ".cutculture",
          start: "top center",
          // toggleActions: "restart  reverse ",
          // end: "top 100px",
          // scrub: 1,
        },
        x: 500,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".cutculture",
          start: "top center",
          // toggleActions: "restart  reverse ",
          // end: "top 100px",
          // scrub: 1,
        },
        x: 0,
        duration: 2,
        opacity: 1,
      }
    );
  });
  return (
    <div className="App" ref={el}>
      {/* <Router> */}
      <Navbar />
      <Hero />
      <Heading
        id="projects"
        color="white"
        textAlign="center"
        fontFamily="Satisfy"
        fontSize="4rem"
      >
        about me
      </Heading>
      <About />
      <Heading
        id="projects"
        color="white"
        textAlign="center"
        fontFamily="Satisfy"
        fontSize="4rem"
      >
        projects
      </Heading>
      <Projects
        classname="paradigm"
        image={ParadigmGuitar}
        heading="PARADIGM GUITAR"
        text="An e-commerce website for a boutique guitar store"
        tech="mongodb express react node s3 ec2 nginx"
        live="http://www.paradigmguitar.pauljsyi.com/"
        github="https://github.com/Pauljsyi/paradigmguitar-showcase"
      />

      <Projects
        classname="aroma"
        reverse
        image={AromaCo}
        heading="AROMA CO"
        text="An e-commerce website for scented candles"
        tech="shopify react chakra-ui animista heroku"
        live="http://www.aromaco.pauljsyi.com/"
        github="https://github.com/Pauljsyi/shopify-react"
      />
      <Projects
        classname="cutculture"
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
      <Contact />
    </div>
  );
}

export default App;
