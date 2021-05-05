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
    <div className="profile-top bg-primary p-2">
      <div className="cover-overlay" />
      <div className="bg-cover">
        <img src={cover} alt="" />
      </div>
      <img
        className="round-img my-1"
        src={picture === "" ? avatar : picture}
        alt=""
      />
      <h1 className="large">{name}</h1>
      <p>{location ? <span>{location}</span> : null}</p>
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
          {edit && (
            <Link to="/upload" className="btn btn-dark">
              Add or update avatar and cover pictures
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
