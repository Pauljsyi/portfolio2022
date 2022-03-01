import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ParadigmGuitar from "./assets/images/paradigmguitar.png";
import CutCulture from "./assets/images/cutculture.png";
import AromaCo from "./assets/images/aromaco.png";
import { Image } from "@chakra-ui/react";

import mongodb from "./assets/icons/mongodb.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Projects
          image={ParadigmGuitar}
          heading="PARADIGM GUITAR"
          text="An e-commerce website for a boutique guitar store"
          brief="Using the MVC architecture, this website is deployed on Amazon's EC2 cloud server with NGINX as the web server."
          // tech={["MongoDB", "Express", "React", "Node", "S3", "EC2", "NGINX"]}
          tech="mongodb express react node s3 ec2 nginx"
        />

        <Projects
          reverse
          image={AromaCo}
          heading="AROMA CO"
          text="An e-commerce website for scented candles"
          brief="Built using Shopify as headless CMS with a React storefront.  "
          // tech={["MongoDB", "Express", "React", "Node", "S3", "EC2", "NGINX"]}
          tech="shopify react chakra-ui animista heroku"
        />
        <Projects
          image={CutCulture}
          heading="CUT CULTURE"
          text="Website to showcase animations using GSAP"
          brief="Built using vanilla HTML CSS and JavaScript to demonstrate distortion effects, transitions and text animations"
          // tech={["MongoDB", "Express", "React", "Node", "S3", "EC2", "NGINX"]}
          tech="html css javascript gsap threejs hovereffectjs"
        />
      </Router>
    </div>
  );
}

export default App;
