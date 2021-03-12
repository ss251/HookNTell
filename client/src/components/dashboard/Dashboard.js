import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Post from "../posts/Post";
import axios from "axios";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  constructor(props) {
    super(props);
    this.state = {
      showCreatePost: false,
    };
  }
  showCreatePost = (e) => {
    e.preventDefault();
    this.setState({ showCreatePost: true });
  };

  fetchData = (e) => {
    e.preventDefault();
    let bearer = localStorage.getItem("jwtToken");
    console.log(bearer);
    axios
      .post(
        "http://localhost:5000/api/posts/create",
        {
          title: document.getElementsByClassName("title")[0].innerHTML,
          body: document.getElementsByClassName("body")[0].innerHTML,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "x-www-form-urlencoded",
            Authorization: '"' + bearer + '"', // if you use token
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const createPostPage = (
      <form>
        <div className="mainapp">
          <h2>Title</h2>
          <input type="title" className="title" placeholder="Title" required />
          <h2>Body</h2>
          <input type="body" className="body" placeholder="Body" required />
          <div>
            <button
              type="submit"
              onClick={this.fetchData}
              className="recordbutton"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );

    const { user } = this.props.auth;
    const maindashboard = (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into Hook and Tell 👏
                {/* <span style={{ fontFamily: "monospace" }}>MERN</span>  */}
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginRight: "1rem",
              }}
              onClick={this.showCreatePost}
              className="btn btn-large waves-effect waves-light hoverable teal accent-3"
            >
              Record
            </button>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable teal accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
    return (
      <div>{this.state.showCreatePost ? createPostPage : maindashboard};</div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
