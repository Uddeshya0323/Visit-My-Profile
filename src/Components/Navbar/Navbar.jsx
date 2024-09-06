import React, { useState, useEffect } from "react";
import "../../index.css";
import light from '../../assets/Light.png';
import dark from '../../assets/dark-mode.png';
import logo from "../../assets/UddeshyaPatel.png";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark-mode"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-mode" ? "light-mode" : "dark-mode"
    );
  };

  return (
    <nav className="navbar text-white bg-gradient-to-r from-green-950 bg-transparent backdrop-blur-lg">
      <div className="container flex justify-between">
        {/* Uncomment and use the logo if needed */}
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <span className="animate-pulse flex space-x-4 text-lg font-thin">
          The only way to do great work is to love what you do
        </span>
        <button
          className="theme-toggle  w-10 "
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <img
            src={theme === "dark-mode" ? light : dark }
            alt={theme === "dark-mode" ? "Dark Mode" : "Light Mode"}
            className="w-full h-full object-contain"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
