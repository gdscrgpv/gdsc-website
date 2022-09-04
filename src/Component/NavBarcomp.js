import React, { Component } from "react";
import { Navbar, Nav, Button } from "reactstrap";
import logo from "../Images/sample.png";
import './css/navbar.css';
export default class NavBarcomp extends Component {
  render() {
    return (
      <div>
        <header id="header" class="fixed-top d-flex   ">
    <div class="container d-flex justify-content-space-around">

      <div id="logo">

        <img
          src="https://gdsciiitb.tech/images/logos/gdsc-logo.gif"
          width="20%" class="svg" alt="Google Developer Student Clubs logo"/>
      
      </div>

      <nav id="navbar" class="navbar " >
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
         

          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
      </div>
    );
  }
}
