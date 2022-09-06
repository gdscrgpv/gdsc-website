import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Component/Partners.css";
import semikolan from "../Images/semikolan.png";
import finflee from "../Images/finflee.png";
import WhatWeDoCard from "./Cards/WhatWeDoCard";
export default class Partners extends Component {
  render() {
    // const data = [
    //   {
    //     title: "Seminars",
    //     text: "A necessary kick to propel students toward innovation and learning. Seminars will offer insight into upcoming and trending technologies.",
    //     img: require("../Assets/img/wedsem.png"),
    //   },
    //   {
    //     title: "Hackathons",
    //     text: "Put your problem-solving skills to the test and win amazing prizes by participating in hackathons and creating solutions that benefit mankind.",
    //     img: require("../Assets/img/wedhack.png"),
    //   },
    //   {
    //     title: "Workshops",
    //     text: "Gain hands-on learning experience on a particular topic and acquire knowledge by practical implementation under the guidance of experts.",
    //     img: require("../Assets/img/wedwerench.png"),
    //   },
    //   {
    //     title: "Projects",
    //     text: "Give life to your ideas. Build projects with the teams support and guidance and gain expertise. Explore out of your circle along the way.",
    //     img: require("../Assets/img/wedmanage.png"),
    //   },
    // ];

    return (
      <>
      <div className="partners">
      <div className="partners-title">Partners & Sponsors</div>
        <div className="cards-list">
          <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div>
          <div className="card">
            <div className="card_image">
              <img src={finflee} />
            </div>
          </div>
          <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div>
          <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
