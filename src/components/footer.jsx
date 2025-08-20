import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="./src/assets/logo.png" alt="Modrino Logo" className="footer-logo" />
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-right">
        <p><strong>(456) 789-12301</strong></p>
        <p>info@modrino.co.uk</p>
        <p>South 13th street</p>
        <p>New York <strong>America</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
