import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import Catch from "../dashboard/Catch";

import { getProfileById } from "../../actions/profile";

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const [showComponent, setShowComponent] = React.useState(true);

  const handleCatches = (e) => {
    e.preventDefault();
    setShowComponent(!showComponent);
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
            <button
                className="btn btn-light show-catches"
                onClick={handleCatches}
              >
                My Catches
              </button>
            </div>
            <ProfileAbout profile={profile} />
            <div className="catch-container">
              {showComponent ? (
                <div className="profile-catch bg-white p-2">
                  {profile.catches.length > 0 ? (
                    <Fragment>
                      <Catch catches={profile.catches} />
                    </Fragment>
                  ) : null}
                </div>
              ) : null}
            </div>
            
          </div>
        </Fragment>
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
