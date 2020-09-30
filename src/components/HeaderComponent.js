import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  Collapse,
  NavItem,
  Nav,
  Button,
  NavbarToggler,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <Navbar dark expand="md" className="bg-danger">
        <div className="container">
          <NavbarBrand href="/">Book HUB</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg"></i> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <i className="fa fa-info fa-lg"></i> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <i className="fa fa-list fa-lg"></i> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <i className="fa fa-address-card fa-lg"></i> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav dark className="ml-auto" navbar>
              <NavItem>
                <Button
                  className="text-light"
                  outline
                  onClick={this.toggleModal}
                >
                  <i className="fa fa-sign-in "></i> Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
