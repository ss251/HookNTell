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
            <div className="form-group">
              <input
                type="text"
                placeholder="* Species"
                name="species"
                value={species}
                onChange={onChange}
                required
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
            <div className="form-group">
              <input
                type="text"
                placeholder="* Habitat (Clip Type)"
                name="habitat"
                value={habitat}
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
      case "form_name2":
        return (
          <form name="form_name1" id="form_name2">
            form 2
          </form>
        );
      case "form_name3":
        return (
          <form name="form_name1" id="form_name3">
            form 3
          </form>
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
        <div className="form-group">
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
