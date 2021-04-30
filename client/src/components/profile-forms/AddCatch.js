import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCatches } from "../../actions/profile";
import emailjs from "emailjs-com";

const AddCatch = ({ addCatches, history }) => {
  const [formData, setFormData] = useState({
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
      case "DungenessCrab":
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
          //sendEmail(e);
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
            <option value="DungenessCrab">Dungeness Crab</option>
          </select>
        </div>
        {renderSelectedForm(formData.fishtype)}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddCatch.propTypes = {
  addCatches: PropTypes.func.isRequired,
};

export default connect(null, { addCatches })(AddCatch);
