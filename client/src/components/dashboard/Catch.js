import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCatch } from "../../actions/profile";
import formatDate from "../../utils/formatDate";
import about from "../../img/about.png";
import { Fade } from "react-awesome-reveal";

const Catch = ({ catches, deleteCatch }) => {
  const report = catches.map((fish) => (
    // <tr key={fish._id}>
    //   <td>{fish.areacode}</td>
    //   <td>{fish.fishtype}</td>
    //   <td className="hide-sm">{fish.species}</td>
    //   <td>{formatDate(fish.date)}</td>
    //   <td className="hide-sm">{fish.location}</td>
    //   <td className="hide-sm">{fish.weight}</td>
    //   <td className="hide-sm">{fish.length}</td>
    //   <td className="hide-sm">{fish.height}</td>
    //   <td className="hide-sm">{fish.cliptype}</td>
    //   <td className="hide-sm">{fish.chartertype}</td>
    <div className="card" key={fish._id}>
      <Link to="/catch/img">
        {/* ({fish.fishtype === "Salmon"} ?
        {
          <img
            className="catch-picture"
            src={
              "https://www.adfg.alaska.gov/static/species/speciesinfo/pinksalmon/images/pink_salmon_spawning_colors.jpg"
            }
          ></img>
        }
        :{fish.fishtype === "Halibut"} ?
        {
          <img
            className="catch-picture"
            src={
              "https://alaskaoutdoorssupersite.com/images/stories/activities/fishing/halibut_underwater.jpg"
            }
          ></img>
        }
        :{fish.fishtype === "Sturgeon"} ?
        {
          <img
            className="catch-picture"
            src={
              "https://augustamagazine.com/wp-content/uploads/2019/05/Sturgeon.png"
            }
          ></img>
        }
        :{fish.fishtype === "Steelhead"} ?
        {
          <img
            className="catch-picture"
            src={
              "https://farm2.static.flickr.com/1287/5184051073_e5011db108.jpg"
            }
          ></img>
        }
        :{fish.fishtype === "Dungeness Crab"}?
        {
          <img
            className="catch-picture"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/d/d8/DungenessCrab.jpg"
            }
          ></img>
        }
        : {fish.fishtype === "Null"}?{}) */}
        <img
          className="catch-picture"
          src={
            fish.fishtype === "Salmon"
              ? "https://www.adfg.alaska.gov/static/species/speciesinfo/pinksalmon/images/pink_salmon_spawning_colors.jpg"
              : fish.fishtype === "Halibut"
              ? "https://alaskaoutdoorssupersite.com/images/stories/activities/fishing/halibut_underwater.jpg"
              : fish.fishtype === "Sturgeon"
              ? "https://augustamagazine.com/wp-content/uploads/2019/05/Sturgeon.png"
              : fish.fishtype === "Steelhead"
              ? "https://farm2.static.flickr.com/1287/5184051073_e5011db108.jpg"
              : fish.fishtype === "Dungeness Crab"
              ? "https://upload.wikimedia.org/wikipedia/commons/d/d8/DungenessCrab.jpg"
              : null
          }
        ></img>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{fish.fishtype}</h5>

        <p className="card-text">Area Code: {fish.areacode}</p>
        {fish.species ? (
          <p className="card-text">Species: {fish.species}</p>
        ) : null}
        <p className="card-text">Date Caught: {fish.date.split(/(.+)T/)[1]}</p>
        <p className="card-text">Location: {fish.location}</p>
        {fish.weight ? (
          <p className="card-text">Weight: {fish.weight}</p>
        ) : null}
        {fish.length ? (
          <p className="card-text">Length: {fish.length}</p>
        ) : null}
        {fish.cliptype ? (
          <p className="card-text">Clip Type: {fish.cliptype}</p>
        ) : null}
        {fish.chartertype ? (
          <p className="card-text">Charter Type: {fish.chartertype}</p>
        ) : null}
        {fish.crabskept ? (
          <p className="card-text">Crabs Kept: {fish.crabskept}</p>
        ) : null}
        <p className="card-text">{fish.notes}</p>
        <button
          onClick={() => deleteCatch(fish._id)}
          className="btn btn-danger"
        >
          Delete Catch
        </button>
      </div>
    </div>
  ));

  return (
    <Fragment>
      {/* <table className="table">
        <thead>
          <tr>
            <th>Area Code</th>
            <th>Fish</th>
            <th className="hide-sm">Species</th>
            <th className="hide-sm">Date</th>
            <th className="hide-sm">Location</th>
            <th className="hide-sm">Weight</th>
            <th className="hide-sm">Length</th>
            <th className="hide-sm">Clip Type</th>
            <th className="hide-sm">Charter Type</th>
            <th />
          </tr>
        </thead>
        <tbody>{report}</tbody>
      </table> */}
      {report}
    </Fragment>
  );
};

Catch.propTypes = {
  catches: PropTypes.array.isRequired,
  deleteCatch: PropTypes.func.isRequired,
};

export default connect(null, { deleteCatch })(Catch);
