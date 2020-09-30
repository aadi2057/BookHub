import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <Navbar dark className="bg-primary">
      <div className="container">
        <NavbarBrand href="/">Book HUB</NavbarBrand>
      </div>
    </Navbar>
  );
}

export default Header;
