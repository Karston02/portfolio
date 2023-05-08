import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer-inner-container">
        <div className="flex logo">
          <p>Karston | </p>
          <i className="fa-solid fa-laptop-code fa-fw" />
        </div>
        <div className="flex copyright">
          <p>© Copyright 2023. All right reserved</p>
        </div>
        <div className="flex socials ">
          <a
            href="https://www.linkedin.com/in/karston-kuciemba/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:kuciembakarston@gmail.com?subject=Portfolio Inquiry"
            target="_blank"
            rel="noreferrer"
            aria-label="Mail"
          >
            <i class="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://github.com/Karston02"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
