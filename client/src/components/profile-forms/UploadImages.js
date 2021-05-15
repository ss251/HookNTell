import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadProfileImg, uploadProfileCover } from "../../actions/profile";

const UploadImages = ({ uploadProfileImg, uploadProfileCover, history }) => {
  let images1 = { picture: "" };
  let myWidget1 = window.cloudinary.createUploadWidget(
    {
      cloudName: "hookntell",
      uploadPreset: "coverpreset",
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
      cloudName: "akass1122",
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
    <Fragment>
      <div className="upload-container">
        <h1 className="large text-primary">Upload Avatar</h1>{" "}
        <p className="lead">Update profile and cover picture</p>
        <button
          className="btn btn-primary my-1"
          onClick={() => {
            myWidget1.open();
          }}
        >
          Upload Avatar
        </button>
        
        <button
          className="btn btn-primary my-1"
          onClick={() => {
            myWidget2.open();
          }}
        >
          Upload Cover
        </button>
      </div>
    </Fragment>
  );
};

UploadImages.propTypes = {
  uploadProfileImg: PropTypes.func.isRequired,
  uploadProfileCover: PropTypes.func.isRequired,
};

export default connect(null, {
  uploadProfileImg,
  uploadProfileCover,
})(withRouter(UploadImages));
