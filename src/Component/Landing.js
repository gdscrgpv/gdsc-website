import React, { Component } from "react";
import Logo from "../Assets/img/gdsclogomain.png";
import "../Assets/css/landing.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    AOS.init({ duration: 1500 });
  }
  render() {
    return (
      <div className="banner-landing" data-aos="zoom-in" data-aos-delay="300">
        <img src={Logo} alt="logo" className="gdsc-landing-logo" />
      </div>
    );
  }
}
