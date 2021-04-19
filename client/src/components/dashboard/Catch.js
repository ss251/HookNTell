import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCatch } from "../../actions/profile";
import formatDate from "../../utils/formatDate";

const Catch = ({ catches, deleteCatch }) => {
  const report = catches.map((fish) => (
    <tr key={fish._id}>
      <td>{fish.areacode}</td>
      <td>{fish.species}</td>
      <td>{formatDate(fish.date)}</td>
      <td className="hide-sm">{fish.location}</td>
      <td className="hide-sm">{fish.weight}</td>
      <td className="hide-sm">{fish.height}</td>
      <td className="hide-sm">{fish.habitat}</td>
      <td>
        <button
          onClick={() => deleteCatch(fish._id)}
          className="btn btn-danger"
        >
          Delete Catch
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Catches</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Area Code</th>
            <th>Species</th>
            <th className="hide-sm">Date</th>
            <th className="hide-sm">Location</th>
            <th className="hide-sm">Weight</th>
            <th className="hide-sm">Length</th>
            <th className="hide-sm">Habitat</th>
            <th />
          </tr>
        </thead>
        <tbody>{report}</tbody>
      </table>
    </Fragment>
  );
};

Catch.propTypes = {
  catches: PropTypes.array.isRequired,
  deleteCatch: PropTypes.func.isRequired,
};

export default connect(null, { deleteCatch })(Catch);
