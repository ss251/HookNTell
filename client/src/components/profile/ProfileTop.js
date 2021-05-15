import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import coverpicture from "../../img/coverimage.jpeg";
import { connect } from "react-redux";
import { uploadProfileImg, uploadProfileCover } from "../../actions/profile";
import home1 from "../../img/home1.png";
import info1 from "../../img/info-button.png";

const ProfileTop = ({
  uploadProfileImg,
  uploadProfileCover,
  history,
  profile: {
    bio,
    location,
    social,
    images: { picture, cover },
    user: { name, avatar },
  },
  edit,
}) => {
  let images1 = { picture: "" };
  let myWidget1 = window.cloudinary.createUploadWidget(
    {
      cloudName: "hookntell",
      uploadPreset: "profilepreset",
      cropping: "server",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        //console.log('result: ', result);
        images1.picture = result.info.secure_url;
        uploadProfileImg(images1, history);
      }
    }
  );

  let images2 = { cover: "" };
  let myWidget2 = window.cloudinary.createUploadWidget(
    {
      cloudName: "hookntell",
      uploadPreset: "coverpreset",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        //console.log('result: ', result);
        images2.cover = result.info.secure_url;
        uploadProfileCover(images2, history);
      }
    }
  );

  return (
    <div className="profile-top p-2">
      <div className="profile-images">
        <div className="bg-cover">
          {edit && (
            <Link to="">
              <img
                className="cover-img"
                onClick={() => {
                  myWidget2.open();
                }}
                src={cover === "" ? coverpicture : cover}
                alt=""
              />
            </Link>
          )}
        </div>

        <div className="bg-profile">
          {edit && (
            <Link to="">
              <img
                className="round-img my-1"
                onClick={() => {
                  myWidget1.open();
                }}
                src={picture === "" ? avatar : picture}
                alt=""
              />
            </Link>
          )}
          <div className="profile-display">
            <div className="profile-info">
              <h1 className="large">{name}</h1>
              <div className="profile-basic">
                <img className="home1" src={home1}></img>
                {location ? (
                  <span className="location-profile">{location}</span>
                ) : null}
              </div>
              <div className="profile-bio">
                <img className="info1" src={info1}></img>
                {bio ? <span className="bio-profile">{bio}</span> : null}
              </div>
            </div>
            <div className="profile-features">
              <Link to="/add-catches" className="btn btn-light add-catch">
                + Catch
              </Link>
              <Link to="/edit-profile" className="btn btn-light edit-profile">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* {social
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
          : null} */}
    </div>
  );
};

ProfileTop.propTypes = {
  uploadProfileImg: PropTypes.func.isRequired,
  uploadProfileCover: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(null, {
  uploadProfileImg,
  uploadProfileCover,
})(withRouter(ProfileTop));
