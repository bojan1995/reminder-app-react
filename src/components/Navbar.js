import React, { useState } from "react";

const Navbar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => setActivePage("wordsReminder")}>
        Reminder App
      </div>
      <nav className={`nav-links ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("wordsReminder");
              }}
            >
              Words Reminder
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("codingPage");
              }}
            >
              Code Reminder
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu for mobile */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
