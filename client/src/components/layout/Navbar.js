import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import "../../App.css";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link to="/">
            <img className="logo" alt="hookntell logo" src={logo}></img>
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              fontWeight: "medium",
            }}
            className="col s5 brand-logo center-left black-text"
          >
            HOOK AND TELL
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: "roboto",
              fontSize: 25,
              fontWeight: "medium",
            }}
            className="col s5 brand-logo right black-text"
          >
            About
          </Link>
          <Link to="/resources">Resources</Link>
          <Link to="/map">Map</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
