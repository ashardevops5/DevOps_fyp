import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", key: "heroRef" },
  { name: "Why DevOps", key: "inspirationRef" },
  { name: "Tech Stack", key: "toolsetRef" },
  { name: "Why It Matters", key: "necessityRef" },
  { name: "Learning Roadmap", key: "pathwayRef" },
  { name: "AWS Cloud", key: "awsRef" },
  { name: "Get in Touch", key: "contactRef" },
];

export default function Navbar({ darkMode, setDarkMode, scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      setHideOnScroll(currentY > lastY && currentY > 80);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleClick = (refKey) => {
    scrollToSection(refs[refKey]);
    setMenuOpen(false);
  };

  return (
    <nav
      id="navbar"  // ✅ Added ID for Hero offset calculation
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl
      ${hideOnScroll ? "-translate-y-full" : "translate-y-0"}
      ${scrolled ? "shadow-lg bg-white/70 dark:bg-gray-900/60" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleClick("heroRef")}>
          <img
            src="https://www.automation-consultants.com/wp-content/uploads/2020/02/DevOps-icon.png"
            alt="DevOps Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-teal-400">
            DevOpsHub
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.key)}
              className="text-sm font-semibold hover:text-indigo-500 dark:hover:text-teal-300 transition"
            >
              {link.name}
            </button>
          ))}

          {/* Dark Mode */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-indigo-400 dark:border-teal-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-teal-400 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-4 shadow-md animate-slideDown">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.key)}
              className="block w-full text-left font-semibold py-2 hover:text-indigo-500 dark:hover:text-teal-300"
            >
              {link.name}
            </button>
          ))}

          {/* Mobile Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="w-full text-left px-3 py-2 rounded-lg border border-indigo-400 dark:border-teal-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-teal-400 flex items-center gap-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
