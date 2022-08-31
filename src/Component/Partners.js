import React, { Component } from "react";
import "./Partners.css";
import finflee from "../Images/finflee.png";
import semikolan from "../Images/semikolan.png";

export default class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <div className="partners-heading font-face-bold flex">
            <h2 className="text-white margin-10px">Partners at</h2>
            <h2 className="G margin-10px">GDSC</h2>
            <h2 className="D margin-10px">UIT</h2>
            <h2 className="S margin-10px">RGPV</h2>
            <h2 className="C">Bhopal</h2>
        </div>
        <div className="cards-list">
          <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div>
          <div className="card">
            <div className="card_image semikolan">
              <img src={semikolan} />
            </div>
          </div>
          <div className="card">
            <div className="card_image finflee">
              <img src={finflee} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
