import React, { Component } from "react";
import footer1 from "../../img/footer.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="footerCon">
          <div className="full">
          <div className="flex">
            <div className="left">
              <h6>Husky Devs</h6>
              <p>NE Pacific St, University, Washington 98105, United States</p>
            </div>
            <div className="middle">
              <img src={footer1} />
            </div>
            <div className="right">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/about">About</Link>
              </p>
              <p>
                <Link to="/map">Map</Link>
              </p>
              <p>
                <Link to="/dashboard">Profile</Link>
              </p>
            </div>
          </div>
          </div>
          </div>
      </footer>
    );
  }
}
export default Footer;
