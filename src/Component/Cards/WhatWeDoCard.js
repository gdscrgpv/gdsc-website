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
          <div className="content-body text-black">
            <h5></h5>
          </div>
        </div>
        <p className="text-center text-black ">
         
        </p>
      </div>
    );
  }
}
