import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import logo from "../../img/Logo.png";
import logo2 from "../../img/Logo2.png";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      {/*<li>
        <Link to="/profiles">Fisherpeople</Link>
      </li>*/}
       <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">Profile</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/map">Map</Link>
      </li>
      {/*<li>
        <Link to="/profiles">Fisherpeople</Link>
      </li>*/}

      <li>
        <Link className="signin-nav" to="/login">
          Sign In
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-light">
      <h1>
        <Link to="/">
          <img
            className="logo"
            alt="hookntell logo"
            src={logo}
            onMouseOver={(e) => (e.currentTarget.src = logo2)}
            onMouseOut={(e) => (e.currentTarget.src = logo)}
            onClick={(e) => (e.currentTarget.src = logo2)}
          />
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
