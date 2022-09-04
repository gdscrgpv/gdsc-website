import React, { Component } from "react";
import "./Partners.css";
import finflee from "../Images/finflee.png";
import semikolan from "../Images/semikolan.png";

export default class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <div className="partners-heading font-face-bold flex">
          <div>
            {" "}
            <h2 className="start-text">Partners at </h2>
          </div>
          <h2 className="G margin-2px">G</h2>
          <h2 className="D margin-2px">D</h2>
          <h2 className="S margin-2px">S</h2>
          <h2 className="C margin-10px">C</h2>
          <h2 className="margin-10px">UIT RGPV</h2>
        </div>
        <div className="cards-list">
          <div className="card">
            <div className="card_image semikolan">
              <img src={semikolan} alt="semikolan" />
            </div>
            <p>
              <a href="/">semikolan</a>
            </p>
          </div>
          <div className="card">
            <div className="card_image semikolan">
              <img src={semikolan} alt="semikolan" />
            </div>
            <p>
              <a href="/">semikolan</a>
            </p>
          </div>
          <div className="card">
            <div className="card_image semikolan">
              <img src={semikolan} alt="semikolan" />
            </div>
            <p>
              <a href="/">semikolan</a>
            </p>
          </div>
          <div className="card">
            <div className="card_image finflee">
              <img src={finflee} alt="FinFlee" />
            </div>
            <p>
              <a href="/">FinFlee</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
