import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCatches, addCoordinates } from "../../actions/profile";
import emailjs from "emailjs-com";
import axios from "axios";
import Geocode from "react-geocode";
import {getCurrentProfile} from "../../actions/profile";

Geocode.setApiKey("AIzaSyAUnKPar-4YiTMrmjzVTq-EBCV8dslmXWQ");

Geocode.setLanguage("en");

Geocode.setLocationType("ROOFTOP");

Geocode.enableDebug();

const endpoint = "http://localhost:3000/api/s3/upload";

const AddCatch = ({ auth, addCatches, history, profile: {profile}, getCurrentProfile }) => {
  const [formData, setFormData] = useState({
    img: "",
    lat: "",
    lng: "",
    fishtype: "",
    areacode: "",
    species: "",
    date: "",
    location: "",
    weight: "",
    length: "",
    habitat: "",
    cliptype: "",
    chartertype: "",
    crabskept: "",
    notes: "",
  });

  const {
    img,
    lat,
    lng,
    fishtype,
    areacode,
    species,
    date,
    location,
    weight,
    length,
    habitat,
    cliptype,
    chartertype,
    crabskept,
    notes,
  } = formData;

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b00boyd",
        "template_bywhxvl",
        e.target,
        "user_gPcJ9HVRFRhjQZCHQnnZr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const changeSelectOptionHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const imgUploadImgHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios.post(endpoint, data).then(() => {
      this.props.history.push("/");
    });
  };

  const renderSelectedForm = (param) => {
    switch (param) {
      case "Salmon":
        return (
          <Fragment>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Area Code"
                name="areacode"
                value={areacode}
                onChange={onChange}
              />
            </div>
            <div className="form-group-select">
              <select
                className="form-group-select"
                name="species"
                value={species}
                onChange={onChange}
                required
              >
                <option>* Select Species</option>
                <option value="Chinook">Chinook (CHIN)</option>
                <option value="Coho">Coho (COHO)</option>
                <option value="Chum">Chum (CHUM)</option>
                <option value="Pink">Pink (PINK)</option>
                <option value="Sockeye">Sockeye (SOCK)</option>
                <option value="ChinookJack">Chinook Jack (CHIN JACK)</option>
                <option value="CohoJack">Coho Jack (COHO JACK)</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="* Date"
                name="date"
                value={date}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Weight (lbs)"
                name="weight"
                value={weight}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Length (in)"
                name="length"
                value={length}
                onChange={onChange}
              />
            </div>
            <div className="form-group-select">
              <select
                className="form-group-select"
                name="cliptype"
                value={cliptype}
                onChange={onChange}
                required
              >
                <option>* Select Clip Type</option>
                <option value="Hatchery">Hatchery (H)</option>
                <option value="Wild">Wild (W)</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="notes"
                cols="30"
                rows="5"
                placeholder="Notes"
                value={notes}
                onChange={onChange}
              />
            </div>
          </Fragment>
        );
      case "Sturgeon":
        return (
          <Fragment>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Area Code"
                name="areacode"
                value={areacode}
                onChange={onChange}
              />
            </div>
            <div className="form-group-select">
              <select
                className="form-group-select"
                name="species"
                value={species}
                onChange={onChange}
              >
                <option>* Select Type</option>
                <option value="White">White (W)</option>
                <option value="Green">Green *May not be retained*</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="* Date"
                name="date"
                value={date}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="* Length (in)"
                name="length"
                value={length}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="notes"
                cols="30"
                rows="5"
                placeholder="Notes"
                value={notes}
                onChange={onChange}
              />
            </div>
          </Fragment>
        );
      case "Steelhead":
        return (
          <Fragment>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Area Code"
                name="areacode"
                value={areacode}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="* Date"
                name="date"
                value={date}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Length (in)"
                name="length"
                value={length}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="notes"
                cols="30"
                rows="5"
                placeholder="Notes"
                value={notes}
                onChange={onChange}
              />
            </div>
          </Fragment>
        );
      case "Dungeness Crab":
        return (
          <Fragment>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Area Code"
                name="areacode"
                value={areacode}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="* Date"
                name="date"
                value={date}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>

            <div className="form-group-select">
              <select
                className="form-group-select"
                name="crabskept"
                value={crabskept}
                onChange={onChange}
                required
              >
                <option>* Select No. of Crabs Kept</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="notes"
                cols="30"
                rows="5"
                placeholder="Notes"
                value={notes}
                onChange={onChange}
              />
            </div>
          </Fragment>
        );
      case "Halibut":
        return (
          <Fragment>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Area Code"
                name="areacode"
                value={areacode}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="* Date"
                name="date"
                value={date}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Length (in)"
                name="length"
                value={length}
                onChange={onChange}
              />
            </div>

            <div className="form-group-select">
              <select
                className="form-group-select"
                name="chartertype"
                value={chartertype}
                onChange={onChange}
                required
              >
                <option>* Select Charter Type</option>
                <option value="Charter">Charter (C)</option>
                <option value="Private">Private (P)</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="notes"
                cols="30"
                rows="5"
                placeholder="Notes"
                value={notes}
                onChange={onChange}
              />
            </div>
          </Fragment>
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Report Catch</h1>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          Geocode.fromAddress(location).then(
            (response) => {
              const { lat1, lng1 } = response.results[0].geometry.location;
              addCoordinates(formData, history)
            },
            (error) => {
              console.error(error);
            }
          );
          sendEmail(e);
          addCatches(formData, history);
        }}
      >
        
        <div className="form-group-select">
          <select
            className="form-group-select"
            name="fishtype"
            value={fishtype}
            onChange={changeSelectOptionHandler}
          >
            <option>* Select Catch</option>
            <option value="Salmon">Salmon</option>
            <option value="Sturgeon">Sturgeon</option>
            <option value="Halibut">Halibut</option>
            <option value="Steelhead">Steelhead</option>
            <option value="Dungeness Crab">Dungeness Crab</option>
          </select>
        </div>
        {renderSelectedForm(formData.fishtype)}
        {auth.isAuthenticated && auth.loading === false &&
         (<Link to="/catch/img">
         <button type="submit" className="btn btn-primary">
          Upload Image
        </button>
        </Link>)}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to={`/profile/${auth.user._id}`}>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddCatch.propTypes = {
  auth: PropTypes.object.isRequired,
  addCatches: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  addCoordinates: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { addCatches, addCoordinates, getCurrentProfile })(AddCatch);
