import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import Catch from "../dashboard/Catch";
import Map from "../layout/MapRedux";
import Footer from "../layout/Footer";

import { getProfileById } from "../../actions/profile";

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const [showCatches, setShowCatches] = React.useState(true);

  const handleCatches = (e) => {
    e.preventDefault();
    setShowMap(false);
    setShowCatches(!showCatches);
  };

  const [showMap, setShowMap] = React.useState(false);

  const handleMap = (e) => {
    e.preventDefault();
    setShowCatches(false);
    setShowMap(!showMap);
  };

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profile-flex">
            <ProfileTop
              profile={profile}
              edit={auth.isAuthenticated && auth.loading === false}
            ></ProfileTop>

            <div className="profile-show-catches">
              {showCatches === true ? (
                <button
                  style={{ color: "#f7a072" }}
                  className="btn btn-light show-catches"
                  onClick={handleCatches}
                >
                  My Catches
                </button>
              ) : (
                <button
                  style={{ color: "#0f6a79" }}
                  className="btn btn-light show-catches"
                  onClick={handleCatches}
                >
                  My Catches
                </button>
              )}
              {showMap === true ? (
                <button
                  style={{ color: "#f7a072" }}
                  className="btn btn-light show-map"
                  onClick={handleMap}
                >
                  My Map
                </button>
              ) : (
                <button
                  style={{ color: "#0f6a79" }}
                  className="btn btn-light show-map"
                  onClick={handleMap}
                >
                  My Map
                </button>
              )}
            </div>
            <ProfileAbout profile={profile} />
            <div className="catch-container">
              {showCatches ? (
                <div className="profile-catch bg-white p-2">
                  {profile.catches.length > 0 ? (
                    <Fragment>
                      <Catch catches={profile.catches} />
                    </Fragment>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="map-container">
              {showMap === true ? (
                <Fragment>
                  <Map />
                </Fragment>
              ) : null}
            </div>
          </div>
        </Fragment>
      )}
      {(setShowCatches === false && setShowMap === false) ||
      auth.loading === true ||
      profile === null ? (
        <Footer style={{ "margin-top": "8rem" }} />
      ) : (
        <Footer />
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
