import React from "react";
import logo from "./../logo.svg";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import {Link} from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" expand="md">

        <Link className="navbar-brand" to="/">
          <img alt="logo" className="img-fluid logo" src={logo} />
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {/* <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem> */}


            <NavItem className="indexpage">
              <i className="nav-link logout" onClick={()=>this.props.handleLogout()} >
                Logout
              </i>
            </NavItem> 
          </Nav>
        </Collapse>

      </Navbar>
    );
  }
}


