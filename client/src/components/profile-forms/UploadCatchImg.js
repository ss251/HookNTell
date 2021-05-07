import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadCatchImg} from "../../actions/profile";

const UploadCatchImg = ({ uploadCatchImg, history }) => {
  let images1 = { img: "" };
  let myWidget1 = window.cloudinary.createUploadWidget(
    {
      cloudName: "hookntell",
      uploadPreset: "coverpreset",
      cropping: "server",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        //console.log('result: ', result);
        images1.img = result.info.secure_url;
        uploadCatchImg(images1, history);
      }
    }
  );

  return (
    <Fragment>
      <div className="upload-container">
        <p className="lead">Update Catch Image</p>
        <button
          className="btn btn-primary my-1"
          onClick={() => {
            myWidget1.open();
          }}
        >
          Upload Catch Image
        </button> 
      </div>
    </Fragment>
  );
};

UploadCatchImg.propTypes = {
    uploadCatchImg: PropTypes.func.isRequired,
};

export default connect(null, {
  uploadCatchImg,
})(withRouter(UploadCatchImg));
