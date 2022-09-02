import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../Images/sample.png";
export default class NavBarcomp extends Component {
  render() {
    return (
      <div>
        <Navbar className="Navbar" sticky="top">
          <Navbar.Brand href="#">
            <img
              src={logo}
              className="d-inline-block align-top Navbar-logo"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1   ">
              <Nav.Link className="Navbar-links" href="#home">
                HOME
              </Nav.Link>
              <Nav.Link className="Navbar-links" href="/Teams">
                TEAM
              </Nav.Link>
              <Nav.Link className="Navbar-links" href="#Event">
                EVENT
              </Nav.Link>
              <Nav.Link className="Navbar-links" href="#gallery">
                GALLERY
              </Nav.Link>
              <Button className="join-navbar-button" variant="primary">
                Join US
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
