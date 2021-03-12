import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import logo2 from "../../img/Logo2.png";
import "../../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className="no-shadows">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img
              className="logo"
              alt="hookntell logo"
              src={logo}
              onMouseOver={(e) => (e.currentTarget.src = logo2)}
              onMouseOut={(e) => (e.currentTarget.src = logo)}
              onClick={(e) => (e.currentTarget.src = logo2)}
            />
          </Link>
          <a href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i
              className="material-icons"
              // onMouseOver={(e) => (e.target.style.color = "#F99E75")}
              // onClick={(e) => (e.target.style.color = "#F99E75")}
            >
              menu
            </i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                className="nav-about"
                href="about"
                // onMouseOver={(e) => (e.target.style.color = "#F99E75")}
                // onClick={(e) => (e.target.style.color = "#F99E75")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-resources"
                href="resources"
                // onMouseOver={(e) => (e.target.style.color = "#F99E75")}
                // onClick={(e) => (e.target.style.color = "#F99E75")}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                className="nav-map"
                href="map"
                // onMouseOver={(e) => (e.target.style.color = "#F99E75")}
                // onClick={(e) => (e.target.style.color = "#F99E75")}
              >
                Map
              </a>
            </li>
            <li>
              <a
                className="nav-profile"
                href="dashboard"
                // onMouseOver={(e) => (e.target.style.color = "#F99E75")}
                // onClick={(e) => (e.target.style.color = "#F99E75")}
              >
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
