import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import "../../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className="no-shadows">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img className="logo" alt="hookntell logo" src={logo}></img>
          </Link>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a className="nav-about" href="about">
                About
              </a>
            </li>
            <li>
              <a className="nav-resources" href="resources">
                Resources
              </a>
            </li>
            <li>
              <a className="nav-map" href="map">
                Map
              </a>
            </li>
            <li>
              <a className="nav-profile" href="dashboard">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
