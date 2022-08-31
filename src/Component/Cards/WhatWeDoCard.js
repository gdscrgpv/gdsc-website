import React, { Component } from "react";
import wedo from '../../Images/wedo.png';
export default class WhatWeDoCard extends Component {
  render() {
    return (
      <div className="testimonial-card text-white font-face-lighter">
        <div className="d-flex customer-identity">
          <div className="customer-img">
            <img src={wedo} />
          </div>
          <div className="content-body">
            <h5>SEMINAR</h5>
          </div>
        </div>
        <p className="text-center">
          “You made it so simple. My new site is so much faster and easier to
          work with than my old site. I just choose the page, make the change
          and click save.
        </p>
      </div>
    );
  }
}
