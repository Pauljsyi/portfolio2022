import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ParadigmGuitar from "./assets/images/paradigmguitar.png";
import CutCulture from "./assets/images/cutculture.png";
import AromaCo from "./assets/images/aromaco.png";
import { Image, Button, Flex, Heading } from "@chakra-ui/react";

import mongodb from "./assets/icons/mongodb.svg";

function App() {
  return (
    <div className="App">
      <Router>
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
          brief="Using the MVC architecture, this website is deployed on Amazon's EC2 cloud server with NGINX as the web server."
          tech="mongodb express react node s3 ec2 nginx"
          live="http://www.paradigmguitar.pauljsyi.com/"
          github="https://github.com/Pauljsyi/paradigmguitar-showcase"
        />

        <Projects
          reverse
          image={AromaCo}
          heading="AROMA CO"
          text="An e-commerce website for scented candles"
          brief="Built using Shopify as headless CMS with a React storefront.  "
          tech="shopify react chakra-ui animista heroku"
          live="http://www.aromaco.pauljsyi.com/"
          github="https://github.com/Pauljsyi/shopify-react"
        />
        <Projects
          image={CutCulture}
          heading="CUT CULTURE"
          text="Website to showcase animations using GSAP"
          brief="Built using vanilla HTML CSS and JavaScript to demonstrate distortion effects, transitions and text animations"
          tech="html css javascript gsap threejs hovereffectjs"
          live="http://cutculture.pauljsyi.com/"
          github="https://github.com/Pauljsyi/cutculture"
        />
      </Router>
    </div>
  );
}

export default App;
