import React, { Component } from "react";
import "./Footer.css";
import GSDC from "../Assets/img/GDSC_Logo.png";
import mail from "../Assets/img/mail.png";
import phone from "../Assets/img/phone.png";
import mapPin from "../Assets/img/map_pin.png";
import facebook from "../Assets/img/facebook.png";
import linkedin from "../Assets/img/linkedin.png";
import twitter from "../Assets/img/twitter.png";
import youtube from "../Assets/img/youtube.png";
import insta from "../Assets/img/instagram.png";
import telegram from "../Assets/img/telegram.png";
import discord from "../Assets/img/discord.png";


import { Button } from "reactstrap";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6 leftDiv">
                <img src={GSDC} class="gdscImg"/>
              </div>

              <div class="col-xs-6 col-md-3">

                <div className="horizontal ">
                  <img src={mail} className="icon leftIcon" />

                  <h6 className=" font-face-lighter" >gdscuitrgpv@gmail.com</h6>
                </div>

                <div className="horizontal ">
                  <img src={phone} className="icon leftIcon" />

                  <h6 className=" font-face-lighter" >+91-6283698964</h6>
                </div>

                <div className="horizontal ">
                  <img src={mapPin} className="icon leftIcon" />

                  <h6 className=" font-face-lighter" >8966+3M7, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462033</h6>

                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="container">
            <div class="row text-center">
              <div class="col-sm-6 col-md-3">
                <p class="copyright-text">Copyright &copy; 2022 GDSC UIT RGPV Bhopal
                </p>
              </div>

              <div class="col-xs-6 col-md-3 horizontal">
                <p class="contact-text">Contact with US
                </p>

                <div className="horizontal leftIcon ">
                  <img src={facebook} className="icon" />
                </div>

                <div className="horizontal leftIcon ">
                  <img src={linkedin} className="icon" />
                </div>
                <div className="horizontal leftIcon ">
                  <img src={twitter} className="icon" />
                </div>

                <div className="horizontal leftIcon ">
                  <img src={youtube} className="icon" />
                </div>

                <div className="horizontal leftIcon ">
                  <img src={insta} className="icon" />
                </div>

                <div className="horizontal leftIcon ">
                  <img src={telegram} className="icon" />
                </div>

                <div className="horizontal leftIcon ">
                  <img src={discord} className="icon" />
                </div>

              </div>

              <div className="col-xs-6 col-md-3">
                <p class="copyright-text">Privacy Policy | Terms & conditions
                </p>
              </div>

            </div>
          </div>
        </footer>
      </div>
    );
  }
}
