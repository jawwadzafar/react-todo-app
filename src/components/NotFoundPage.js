import React, { Fragment } from "react";
import { Redirect,Link } from "react-router-dom";
import logo from "./../logo.svg";
class NotFoundPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      random: false,
    }
  }
  componentDidMount(){
    this.props.handleLogout();
    // console.log(this.props)
  }
  render() {
    if(this.props.isLoggedIn){
      return <Redirect to="/"/>
    }
    return (
      <Fragment>
        <div className="container-fluid h-100">
    <div className="row justify-content-center align-items-center h-100">
        <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
      <div className="text-center">
      <img alt="logo" className="img-fluid logo" src={logo} />
        <h6 className="login-header">Over The Hedge</h6>
        <h2 className="login-header"><i>404</i></h2>
        <h5 className="login-header"><i>Page Not Found</i></h5>
        <p>Perhaps, <Link to="/login">Login</Link>?</p>
      </div>
      </div>
        </div>
    </div>
      </Fragment>
    );
  }
}

export default NotFoundPage;
