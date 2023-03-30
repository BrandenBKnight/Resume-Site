import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Branden Knight. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
