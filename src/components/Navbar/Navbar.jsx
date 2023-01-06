import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-container">
        <div className="logo-menu">
          <img
            src={require("../../LOGO.png")}
            alt="LOGO"
            className="nav-logo"
            draggable={false}
          />
        </div>
        <div className="search">
          <fieldset style={{ border: "none", position: "relative" }}>
            <input name="s" id="s" placeholder="What are you looking for?" />
            <button className="sbtn">
              <i className="fa fa-search"></i>
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
