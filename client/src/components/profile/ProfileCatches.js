import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";

const ProfileCatches = ({
  catches: {
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
  },
}) => (
  <div>
    <h3 className="text-dark">{areacode}</h3>
    <h3 className="text-dark">{fishtype}</h3>
    <p>
      <strong>Species: </strong> {species}
    </p>
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
      <strong>Clip Type: </strong> {cliptype}
    </p>
    <p>
      <strong>Charter Type: </strong> {chartertype}
    </p>
    <p>
      <strong>Crabs Kept: </strong> {crabskept}
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
