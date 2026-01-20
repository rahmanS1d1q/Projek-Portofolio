import React from "react";

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={() => setActiveSection("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setActiveSection("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeSection === "resume" ? "active" : ""}
              onClick={() => setActiveSection("resume")}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
              onClick={() => setActiveSection("portfolio")}
            >
              Portfolio
            </a>
          </li>
        </ul>
        <div className="contact-info">📞 +62 819-1386-8745</div>
      </div>
    </nav>
  );
};

export default Navbar;
