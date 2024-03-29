import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { clearProfile } from "../../actions/profile";
import logo from "../../img/Logo.png";
import logo2 from "../../img/Logo2.png";

const Navbar = ({
  auth: { isAuthenticated, user },
  profile: { profile },
  clearProfile,
  logout,
}) => {
  const logoutHandler = () => {
    logout();
    clearProfile();
  };

  const authLinks = (
    <ul>
      {/*<li>
        <Link to="/profiles">Fisherpeople</Link>
      </li>*/}
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/map">Map</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        {user ? (
          <Link to={`/profile/${user._id}`}>Profile</Link>
        ) : (
          <Link to={`/dashboard`}>Profile</Link>
        )}
      </li>
      <li>
        <a onClick={logoutHandler} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a style={{ color: "transparent" }}>About</a>
      </li>
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
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-light">
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

      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  clearProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout, clearProfile })(Navbar);
