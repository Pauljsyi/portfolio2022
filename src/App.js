import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParadigmGuitar from "./assets/images/paradigmguitar.png";
import CutCulture from "./assets/images/cutculture.png";
import AromaCo from "./assets/images/aromaco.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image, Button, Flex, Heading } from "@chakra-ui/react";
import AboutImage from "./assets/images/aboutimage.png";
import UpArrow from "./assets/icons/up-arrow.svg";

function App() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  // LOGO ANIMATION

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      let logo = document.querySelector(".logo");

      logo.addEventListener("mouseover", () => {
        let logoimg = logo.querySelectorAll(".logo1");
        tl.current = gsap
          .timeline()
          .to(q(".logo1"), {
            rotate: 90,
            duration: 1,
            opacity: 0,
            ease: "expo",
          })
          .to(q(".logo1"), {
            rotate: -0,
            duration: 1,
            delay: 1.5,
            opacity: 1,
            ease: "expo",
          });
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      let logo = document.querySelector(".logo");

      logo.addEventListener("mouseover", () => {
        let logoimg = logo.querySelectorAll(".logo2");
        tl.current = gsap
          .timeline()
          .to(q(".logo2"), {
            rotate: 90,
            duration: 1,
            opacity: 1,
            ease: "expo",
          })
          .to(q(".logo2"), {
            rotate: -0,
            duration: 1,
            delay: 1.5,
            opacity: 0,
            ease: "expo",
          });
      });
    });
  }, []);

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q(".logo1"), {
        rotate: 90,
        duration: 1,
        delay: 2,
        opacity: 0,
        ease: "expo",
      })
      .to(q(".logo1"), {
        rotate: -0,
        duration: 1,
        delay: 1.5,
        opacity: 1,
        ease: "expo",
      });

    tl.current = gsap
      .timeline()
      .to(q(".logo2"), {
        rotate: 90,
        duration: 1,
        delay: 2,
        opacity: 1,
        ease: "expo",
      })
      .to(q(".logo2"), {
        rotate: -0,
        duration: 1,
        delay: 1.5,
        opacity: 0,
        ease: "expo",
      });
  }, []);

  // PROJECT VIEW ANIMATION

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".paradigm",
      {
        scrollTrigger: {
          trigger: ".paradigm",
          start: "top 80%",
          scrub: 1,
        },
        x: 200,

        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".paradigm",
          start: "top bottom",
          scrub: 1,
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
          start: "top 80%",
          scrub: 1,
        },
        x: -200,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".aroma",
          start: "top bottom",
          scrub: 1,
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
          start: "top 80%",
          scrub: 1,
        },
        x: 200,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".cutculture",
          start: "top bottom",
          scrub: 1,
        },
        x: 0,
        duration: 2,
        opacity: 1,
      }
    );
  });

  // SCROLL TO TOP FUNCTION

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="App" ref={el}>
      <Navbar />
      <Hero />
      {showButton && (
        <Button
          onClick={scrollToTop}
          className="back-to-top"
          m={[".25rem", "5rem .25rem", "5rem"]}
          style={{
            transition: "all 1s ease-in-out",
            position: "fixed",
            bottom: "0",
            right: "0",
            display: "inline-flex",

            cursor: "pointer",
            zIndex: "3",
          }}
        >
          <Image src={UpArrow} />
        </Button>
      )}
      <Heading
        id="about"
        color="#7E827A"
        textAlign="center"
        fontFamily="Satisfy"
        fontSize={["2rem", "3rem", "4rem"]}
      >
        about me
      </Heading>
      <About />
      <Heading
        id="projects"
        color="#7E827A"
        textAlign="center"
        fontFamily="Satisfy"
        fontSize={["2rem", "3rem", "4rem"]}
      >
        projects
      </Heading>
      <Projects
        classname="paradigm"
        image={ParadigmGuitar}
        heading="PARADIGM GUITAR"
        text="An e-commerce website for a boutique guitar store"
        brief="Using the MVC architecture, this website is deployed on Amazon's EC2 cloud server with NGINX as the web server"
        tech="react node express mongodb aws nginx"
        live="http://www.paradigmguitar.pauljsyi.com/"
        github="https://github.com/Pauljsyi/paradigmguitar-showcase"
      />
      <Projects
        classname="aroma"
        reverse
        image={AromaCo}
        heading="AROMA CO"
        text="An e-commerce website for scented candles"
        brief="Built a custom Shopify Storefront using React.js and the Shopify Buy SDK. Styled using Chakra UI, persistent cart data using local storage, utilized React Context, and basic animations"
        tech="react chakra-ui shopify animista heroku"
        live="http://www.aromaco.pauljsyi.com/"
        github="https://github.com/Pauljsyi/shopify-react"
      />
      <Projects
        classname="cutculture"
        image={CutCulture}
        heading="CUT CULTURE"
        text="Website to showcase animations using GSAP and Threejs"
        brief="Vanilla Javascript landing page with animations using the hovereffectjs library"
        tech="html css javascript gsap threejs hovereffectjs"
        live="http://cutculture.pauljsyi.com/"
        github="https://github.com/Pauljsyi/cutculture"
      />
      <Heading
        id="contact"
        color="#7E827A"
        textAlign="center"
        fontFamily="Satisfy"
        fontSize={["2rem", "3rem", "4rem"]}
      >
        stay in touch
      </Heading>
      <Contact />
    </div>
  );
}

export default App;
