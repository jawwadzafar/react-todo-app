import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import logo from "./../logo.svg";
import ErrorBox from "./ErrorBox";
class Login extends React.Component {
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
  componentDidMount() {
    this.refs.itemName.focus();
  }
  handleChange = e => {
    let userdata = { ...this.state.userdata };
    userdata[e.target.name] = e.target.value;
    this.setState({ userdata });
  };
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
        if (searchUser.password === data.password) {
          return this.props.handleLogin(searchUser.userid);
        } else {
          this.setState({
            error: true,
            errorMsg: "username and password not matched"
          });
        }
      } else {
        this.setState({
          error: true,
          errorMsg: "username not found"
        });
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
                  <p className="login-header">Please login to continue</p>
                </div>
                <div className="form-group">
                  <label htmlFor="username">username</label>
                  <input
                    className="form-control"
                    name="username"
                    placeholder="username"
                    ref="itemName"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.userdata.username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    name="password"
                    placeholder="enter your password"
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
                    Continue
                  </button>
                </div>
                <div className="form-group">
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
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

export default Login;
