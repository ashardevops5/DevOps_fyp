import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // Icons

const Navbar = ({ darkMode, setDarkMode, scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const links = [
    { name: "Home", ref: refs.heroRef },
    { name: "Why DevOps", ref: refs.inspirationRef },
    { name: "Tech Stack", ref: refs.toolsetRef },
    { name: "Why It Matters", ref: refs.necessityRef },
    { name: "Learning Roadmap", ref: refs.pathwayRef },
    { name: "AWS Cloud", ref: refs.awsRef },
    { name: "Get in Touch", ref: refs.contactRef },
  ];

  const handleClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <nav className="top-0 w-full z-50 bg-white dark:bg-gray-900 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.automation-consultants.com/wp-content/uploads/2020/02/DevOps-icon.png"
            alt="DevOps Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-teal-400">
            DevOpsHub
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.ref)}
              className="text-sm font-semibold hover:text-indigo-500 dark:hover:text-teal-300 transition"
            >
              {link.name}
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-indigo-400 dark:border-teal-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-teal-400 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-4 shadow-md">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.ref)}
              className="block w-full text-left font-semibold py-2 hover:text-indigo-500 dark:hover:text-teal-300"
            >
              {link.name}
            </button>
          ))}

          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-full text-left px-3 py-2 rounded-lg border border-indigo-400 dark:border-teal-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-teal-400 flex items-center justify-start gap-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
