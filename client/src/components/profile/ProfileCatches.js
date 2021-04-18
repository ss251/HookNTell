import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";

const ProfileCatches = ({
  catches: { species, date, location, weight, length, habitat, notes },
}) => (
  <div>
    <h3 className="text-dark">{species}</h3>
    <p>{formatDate(date)}</p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Weight: </strong> {weight}
    </p>
    <p>
      <strong>Length: </strong> {length}
    </p>
    <p>
      <strong>Habitat: </strong> {habitat}
    </p>
    <p>
      <strong>Notes: </strong> {notes}
    </p>
  </div>
);

ProfileCatches.propTypes = {
  catches: PropTypes.object.isRequired,
};

export default ProfileCatches;
