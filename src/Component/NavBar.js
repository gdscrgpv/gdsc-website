import "./Navbarcomp.css"
import React, { Component } from "react";
import logo from "../Images/sample.png";
export default class NavBarcomp extends Component {
  render() {
    return (
        <nav class="_navbar" >
        <div className="logo"><img src={logo} alt ="logo"/>
        </div>

        <ul className="nav-links ">
             <input type="checkbox" id="checkbox_toggle" />
             <label htmlFor="checkbox_toggle" className="hamburger"> ☰ </label>
        <div className="menu">
            <li>
              <a className="link_text font-face-Bold " href="/">Home</a>
            </li>
            <li>
              <a className="link_text font-face-Bold" href="/">Team</a>
            </li>
            <li >
              <a  className="link_text font-face-Bold" href="/">Event</a>
            </li>
            <li>
              <a className="link_text font-face-Bold" href="/">Gallery</a>
            </li>
            <li>
              <a className="link_text font-face-Bold" href="/">Contact us</a>
            </li>
            <li>
            < div className="join_us_btn">
             <a className=" font-face-Bold btn_text" target="_blank" rel="noopener noreferrer" href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/">JOIN US</a>
             </div>
            </li>
          </div>
        </ul>
      </nav>
      
    );
  }
}
