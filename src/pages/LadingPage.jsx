import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

