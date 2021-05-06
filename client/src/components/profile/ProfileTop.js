import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileTop = ({
  profile: {
    location,
    social,
    images: { picture, cover },
    user: { name, avatar },
  },
  edit,
}) => {
  return (
    <div className="profile-top p-2">
      <div className="profile-images">
        <div className="bg-cover">
          <img className="cover-img" src={cover} alt="" />
        </div>
        <div className="bg-profile">
          {edit && (
            <Link to="/upload">
              <img
                className="round-img my-1"
                src={picture === "" ? avatar : picture}
                alt=""
              />
            </Link>
          )}
        </div>
      </div>
      <div className="profile-info">
        <h1 className="large">{name}</h1>
        <p>
          {location ? (
            <span className="location-profile">{location}</span>
          ) : null}
        </p>
      </div>
      <div className="icons my-1">
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
        <p>
          <Link to="/add-catches" className="btn btn-light add-catch">
            + Catch
          </Link>
          <Link to="/edit-profile" className="btn btn-light edit-profile">
            Edit Profile
          </Link>
        </p>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
