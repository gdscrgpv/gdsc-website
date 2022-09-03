import React, { Component } from "react";
import logo from "../Images/sample.png";
import  "./navbar.css"
export default class NavBarcomp extends Component {
  render() {
    return (
      <div className="_navbar sticky">
        <div className="logo">
          <img  src={logo} alt="logo"  /> 
        </div> 
        <div className="Links_Tabs d-flex ">
          <div className="tab_list" > 
              <button> <a href="/" className="font-face-Bold"> HOME </a></button>
              <button> <a href="/"> TEAM </a></button>
              <button> <a href="/"> EVENT </a></button>
              <button> <a href="/"> GALLERY </a></button>
              <button> <a href="/"> CONTACT US </a></button>
          </div>  
          <div className="JOINUS_btn">
            <button><a href="/JoinUS"> JOIN US</a></button>
          </div>
        </div>
      </div>
    );
  }
}
