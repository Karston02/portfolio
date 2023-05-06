import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p>Karston | </p>
            <i className="fa-solid fa-laptop-code fa-fw" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
          {button && (
            <a
              href={process.env.PUBLIC_URL + "/Kuciemba, Karston - Resume.pdf"}
              className="btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
