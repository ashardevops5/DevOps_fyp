import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import Toolset from "./components/Toolset";
import Necessity from "./components/Necessity";
import Pathway from "./components/Pathway";
import AWSCloud from "./components/AWSCloud";
import Footer from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true" ? true : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Scroll ke liye refs
  const heroRef = useRef(null);
  const inspirationRef = useRef(null);
  const toolsetRef = useRef(null);
  const necessityRef = useRef(null);
  const pathwayRef = useRef(null);
  const awsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current && typeof ref.current.scrollIntoView === "function") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-500">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
        refs={{
          heroRef,
          inspirationRef,
          toolsetRef,
          necessityRef,
          pathwayRef,
          awsRef,
          contactRef,
        }}
      />
      <main className="snap-y snap-mandatory">
        <Hero ref={heroRef} />
        <Inspiration ref={inspirationRef} />
        <Toolset ref={toolsetRef} />
        <Necessity ref={necessityRef} />
        <Pathway ref={pathwayRef} />
        <AWSCloud ref={awsRef} />
        <Footer ref={contactRef} />
      </main>
    </div>
  );
};

export default App;
