import React, { useEffect, useRef } from "react";
import "./navbar.css";

function Navbar() {
  const navbarLinksRef = useRef(null);
  const overlayRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const overlay = overlayRef.current;
    const navbarLinks = navbarLinksRef.current;

    if (!menuToggle || !overlay || !navbarLinks) return;

    const handleClick = () => {
      navbarLinks.classList.toggle("show");
      overlay.classList.toggle("show");
      menuToggle.classList.toggle("hide");
    };

    const handleOverlayClick = () => {
      navbarLinks.classList.remove("show");
      overlay.classList.remove("show");
      menuToggle.classList.remove("hide");
    };

    menuToggle.addEventListener("click", handleClick);
    overlay.addEventListener("click", handleOverlayClick);

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", handleClick);
      }
      if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
      }
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./src/assets/logo.png" alt="Logo" />
        </div>
        <div className="menu-toggle" ref={menuToggleRef}>☰</div>
        <ul className="navbar-links" ref={navbarLinksRef}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="overlay" ref={overlayRef}></div>
    </>
  );
}

export default Navbar;
