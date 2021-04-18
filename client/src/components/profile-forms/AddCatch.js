import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCatches } from "../../actions/profile";

const AddCatch = ({ addCatches, history }) => {
  const [formData, setFormData] = useState({
    species: "",
    date: "",
    location: "",
    weight: "",
    length: "",
    habitat: "",
    notes: "",
  });

  const { species, date, location, weight, length, habitat, notes } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Report Catch</h1>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addCatches(formData, history);
        }}
      >
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
            placeholder="* Weight"
            name="weight"
            value={weight}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Length"
            name="length"
            value={length}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Habitat"
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
