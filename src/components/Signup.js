import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import logo from "./../logo.svg";
import ErrorBox from "./ErrorBox";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        username: "",
        password: ""
      },
      error: false,
      errorMsg: ""
    };
  }
  handleChange = e => {
    let userdata = { ...this.state.userdata };
    userdata[e.target.name] = e.target.value;
    this.setState({ userdata });
  };
  componentDidMount() {
    this.refs.itemName.focus();
  }
  searchUsername = (username, arr) => {
    if(arr && arr.length > 0){
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].username === username) {
          return arr[i];
        }
      }
    }else{
      return null
    }

  };
  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.userdata.username || !this.state.userdata.password) {
      this.setState({
        error: true,
        errorMsg: "fields missing"
      });
    } else {
      let data = this.state.userdata;
      data.username = data.username.toLowerCase();
      let users = JSON.parse(localStorage.getItem("users"));
      let searchUser = this.searchUsername(data.username, users);
      if (searchUser) {
        this.setState({
          error: true,
          errorMsg: "username already taken"
        });
      } else {
        let oldUsers = JSON.parse(localStorage.getItem("users"));
        let newUser = {userid: (oldUsers && oldUsers.length)?oldUsers.length+1:1, username: this.state.userdata.username, password: this.state.userdata.password}
        oldUsers?oldUsers.push(newUser):oldUsers=newUser
        localStorage.setItem('users',JSON.stringify(oldUsers))
        return this.props.handleLogin(newUser.userid);
      }
    }
  };
  handleError = () => {
    this.setState({
      error: false,
      errorMsg: ""
    });
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3 bg-white pt-3">
              <form className="center-third" onSubmit={this.handleSubmit}>
                <div className="form-group text-center">
                  <img alt="logo" className="img-fluid logo login" src={logo} />
                  <p className="login-header">Please signup to continue</p>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    name="username"
                    placeholder="choose a username"
                    type="text"
                    ref="itemName"
                    onChange={e => this.handleChange(e)}
                    value={this.state.userdata.username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    name="password"
                    placeholder="enter a password"
                    type="password"
                    onChange={e => this.handleChange(e)}
                    value={this.state.userdata.password}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fund" />
                  <button
                    type="submit"
                    className="btn btn-login btn-lg btn-block"
                  >
                    Signup
                  </button>
                </div>
                <div className="form-group">
                <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
                {this.state.error ? (
                  <div className="form-group">
                    <ErrorBox
                      handleError={this.handleError}
                      message={this.state.errorMsg}
                    />
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Signup;
