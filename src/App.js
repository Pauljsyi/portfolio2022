import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Coffeazy from "./assets/images/coffeazy-img.png";
import WeddingPlanner from "./assets/images/weddingplanner.png";
import KlickKlack from "./assets/images/KlickKlack.png";
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
          start: "top 100%",
          end: "top center",
          scrub: 3,
        },
        x: 200,

        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".paradigm",
          start: "top 50%",
          end: "top 30%",
          scrub: 3,
        },
        x: 0,
        duration: 1,
        opacity: 1,
      }
    );

    gsap.fromTo(
      ".klickklack",
      {
        scrollTrigger: {
          trigger: ".klickklack",
          start: "top 100%",
          end: "top center",
          scrub: 1,
        },
        x: -200,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".klickklack",
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
        },
        x: 0,
        duration: 1,
        opacity: 1,
      }
    );

    gsap.fromTo(
      ".cutculture",
      {
        scrollTrigger: {
          trigger: ".cutculture",
          start: "top 100%",
          end: "top center",
          scrub: 1,
        },
        x: 200,
        duration: 1,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".cutculture",
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
        },
        x: 0,
        duration: 1,
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
        classname="coffeazy"
        image={Coffeazy}
        heading="COFFEAZY"
        text="Coffeazy is an e-commerce website for a local coffee shop that allows the owner to sell coffee products online and promote their amazing coffee."
        brief="Built using React for its composability and easily maintain different components."
        tech="react node express mongodb bootstrap stripeAPI"
        live="https://coffeazy-pauljsyi.vercel.app/"
        github="https://github.com/Pauljsyi/coffeazy-cra"
      />
      <Projects
        classname="klickklack"
        reverse
        image={KlickKlack}
        heading="KLICK KLACK"
        text="An e-commerce website for mechanical keyboards"
        brief="Built a custom Shopify Storefront using React.js. Styled using Chakra UI, persist cart data using local storage, utilized React Context Hook to easily pass data."
        tech="react chakra-ui shopify animista heroku"
        live="https://klickklack.netlify.app"
        github="https://github.com/Pauljsyi/shopify-react"
      />
      <Projects
        classname="cutculture"
        image={WeddingPlanner}
        heading="Wedding Planner"
        text='A simple "Save the Date" application where users can login, RSVP, create, read, update and delete weddings.'
        brief="Backend was built with C# due to it's statically typed nature, limiting errors thus making the application easier to maintain."
        tech="C# ASP.NET-Core LINQ Entity-Framework MySQL MVC"
        live="https://youtu.be/JkkF2Rtk35w"
        github="https://github.com/Pauljsyi/weddingplannerapp"
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
