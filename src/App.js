import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Projects reverse />
        <Projects />
      </Router>
    </div>
  );
}

export default App;
