import React, { Component } from "react";
import about1 from "../../img/about.png";
import lilfish from "../../img/lilfish.png";
import report from "../../img/report.png";
import connect from "../../img/connect.png";
import find from "../../img/find.png";
import Footer from "./Footer";
import { Fragment } from "react";

class about extends Component {
  render() {
    return (
      <Fragment>
        <div className="full">
          <div className="flex">
            <div className="inner-left-box-HP">
              <h1>
                <div className="title-info-page">ABOUT US</div>
              </h1>
              <div className="description-info-page">
                <p>
                  We are a group of students on a mission to give fisherman a
                  platform to connect, gain insights, and find the best ways to
                  fish. Our mission is to continue and spread the love of
                  fishing while protecting the environment.
                </p>
              </div>
            </div>
            <div className="info-page-image">
              <img src={about1} alt="This a person fishing in a river" />
            </div>
          </div>

          <div className="flex">
            <div className="lilfish">
              <img src={lilfish} />
            </div>
            <div className="lilfish">
              <img src={lilfish} />
            </div>
            <div className="lilfish">
              <img src={lilfish} />
            </div>
            <div className="lilfish">
              <img src={lilfish} />
            </div>
            <div className="lilfish">
              <img src={lilfish} />
            </div>
            <div className="lilfish">
              <img src={lilfish} />
            </div>
          </div>

          <div className="flex1">
            <div className="boxes">
              <div className="report">
                <img src={report} />
              </div>
              <div className="report1">
                <h2>REPORT</h2>
              </div>
              <div className="report2">
                <p>
                  Record your fish catches as you go to get insights on your
                  skills and gain new strategies. Allows you to later on easily
                  print out your catches to report to the state all at once.
                </p>
              </div>
            </div>

            <div className="boxes">
              <div className="connect">
                <img src={connect} />
              </div>

              <div className="connect1">
                <h2>CONNECT</h2>
              </div>

              <div className="connect2">
                <p>
                  Gain information on what the best strategies to use, bait,
                  best spots from experienced fisherman. Use our heat map to see
                  where species are found and where the biggest sucesses have
                  been.
                </p>
              </div>
            </div>

            <div className="boxes">
              <div className="find">
                <img src={find} />
              </div>

              <div className="find1">
                <h2>FIND</h2>
              </div>

              <div className="find2">
                <p>
                  Share your findings with friends and find events or challenges
                  near you. Post a photo or let your friends see what fish you
                  have caught. Or if you prefer, keep all your catches and
                  secrets to yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default about;
