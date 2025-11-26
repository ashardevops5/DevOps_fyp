import React from "react";

const Navbar = ({ darkMode, setDarkMode, scrollToSection, refs }) => {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const links = [
    { name: "Home", ref: refs.heroRef },
    { name: "Why DevOps", ref: refs.inspirationRef },
    { name: "Tech Stack", ref: refs.toolsetRef },
    { name: "Why It Matters", ref: refs.necessityRef },
    { name: "Learning Roadmap", ref: refs.pathwayRef },
    { name: "AWS Cloud ", ref: refs.awsRef },
    { name: "Get in Touch", ref: refs.contactRef },
  ];

  return (
    <nav className="top-0 w-full z-50 bg-white dark:bg-gray-900 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.automation-consultants.com/wp-content/uploads/2020/02/DevOps-icon.png"
            alt="DevOps Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-teal-400 animate-fadeIn">
            DevOpsHub
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.ref)}
              className="text-sm font-semibold hover:text-indigo-500 dark:hover:text-teal-300 transition"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-lg border border-indigo-400 dark:border-teal-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-teal-400 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
