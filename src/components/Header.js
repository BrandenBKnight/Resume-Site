import React from "react";

const Header = () => {
  return (
    <header class="navbar-container bg-dark text-white py-3">
      <div class="navbar-inner">
        <div class="flex-container">
          <div class="navbar-logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div class="center-container">
            <nav class="navbar-social-links">
              <a
                href="https://www.linkedin.com/in/brandenbknight/"
                target="_blank"
                class="btn btn-linkedin"
              >
                <i class="fa-brands fa-linkedin"></i>
                LinkedIn
              </a>
              <a
                href="https://github.com/BrandenBKnight"
                target="_blank"
                class="btn btn-github"
              >
                <i class="fa-brands fa-github"></i>
                GitHub
              </a>
              <a
                href="Branden Knight - Resume.pdf"
                target="_blank"
                class="btn btn-resume"
              >
                <i class="fa-regular fa-file"></i>
                Resume
              </a>
            </nav>
          </div>
          <div class="right-container">
            <nav class="navbar-main-menu">
              <ul>
                <li>
                  <a href="#About">About Me</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Experience">Experience</a>
                </li>
                <li>
                  <a href="#Education">Education</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="navbar-mobile-menu">
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
