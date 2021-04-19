import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="no-overlay">
        <div className="landing-inner">
          <h2 className="landing-welcome">WELCOME TO YOUR</h2>
          <h1 className="landing-fisher">FISHERMAN</h1>
          <h2 className="landing-welcome">COMMUNITY</h2>

          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
