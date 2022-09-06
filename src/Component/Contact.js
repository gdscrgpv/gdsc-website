import React, { Component } from "react";
import "../Component/css/contact.css";
import "../Component/css/contactUs.css";
import mapPin from "../Assets/img/map_pinBlack.png";
import mail from "../Assets/img/mailBlack.png";
import phone from "../Assets/img/phoneBlack.png";
import linkedin from "../Assets/img/linkedin.png";
import insta from "../Assets/img/instagram.png";
import github from "../Assets/img/github.png";
import discord from "../Assets/img/discord.png";
import twitter from "../Assets/img/twitter.png";
import youtube from "../Assets/img/youtube.png";
import telegram from "../Assets/img/telegram.png";
import whatsapp from "../Assets/img/whatsapp.png";
import { FiPhone } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
export default class ContactComponent extends Component {
  render() {
    return (
      <>

        <div class="">
          <div class="container" style={{ marginBottom: 50 }}>
            <div class="screen">
              <div class="screen-header">
                {/* <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div> */}
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">

                  {/* heanding */}
                  <div class="app-title" style={{ fontWeight: 700 }}>
                    <span>Get in Touch</span>
                  </div>

                  <p class="smallTxt" style={{ fontWeight: 600 }}>We are here for you! How can we help?</p>

                  {/* form */}
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="Enter your name" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="Enter your email address" />
                    </div>
                    <div class="app-form-group message">
                      <textarea rows={5} class="app-form-control" placeholder="Go ahead we are listening..." />
                    </div>
                    <div class="app-form-group buttons">
                      {/* <button class="app-form-button">CANCEL</button> */}
                      <button class="app-form-button">SUBMIT</button>
                    </div>
                  </div>
                  {/* <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
                </div>
                <div class="screen-body-item right">
                  {/* logo */}
                  <div className="logo">
                    <div className="d-flex align-items-center justify-content-center">
                      <lottie-player
                        src="https://assets3.lottiefiles.com/packages/lf20_u25cckyh.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "400px", height: "400px" }}
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>

                  {/* contact details */}
                  <div class="contact-detail contact ">
                    <div class=" flex" style={{ marginBottom: "2%" }}>
                      <img src={mapPin} className="contactIcon" style={{ color: 'black' }} />

                      <p class="midTxt">
                        8966+3M7, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462033
                      </p>
                    </div>
                    <div class=" flex" style={{ marginBottom: "2%" }}>
                      <img src={mail} className="contactIcon" style={{ color: 'black' }} />

                      <p class="midTxt">
                        gdscuitrgpv@gmail.com
                      </p>
                    </div>
                    <div class=" flex" style={{ marginBottom: "2%" }}>
                      <img src={phone} className="contactIcon" style={{ color: 'black' }} />

                      <p class="midTxt">
                        +91-6283698964
                      </p>
                    </div>
                  </div>

                  {/* connect with us */}
                  <div>
                    <div class="app-form-group buttons">

                      <button class="connect-button">
                        <a href="https://www.linkedin.com/company/gdscuitrgpv/" target="_blank">
                          <img src={linkedin} className="connectIcon" />
                        </a>
                      </button>


                      <button class="connect-button">
                        <a href="https://www.instagram.com/gdsc_uitrgpv/" target="_blank">
                          <img src={insta} className="connectIcon" />
                        </a>
                      </button>

                      <button class="connect-button">
                        <a href="https://github.com/gdscrgpv/" target="_blank">
                          <img src={github} className="connectIcon" />
                        </a>
                      </button>

                      <button class="connect-button">
                        <a href="https://discord.gg/pTxtS8xu" target="_blank">
                          <img src={discord} className="connectIcon" />
                        </a>
                      </button>

                      <button class="connect-button">
                        <a href="https://t.me/gdscuitrgpv" target="_blank">
                          <img src={telegram} className="connectIcon" />
                        </a>
                      </button>

                      <button class="connect-button">
                        <a href="https://www.youtube.com/c/GoogleDeveloperStudentClubUITRGPVBhopal" target="_blank">
                          <img src={youtube} className="connectIcon" />
                        </a>
                      </button>

                      <button class="connect-button">
                        <a href="https://chat.whatsapp.com/Kuv8sZjJnGy7mlSxXMQcNZ" target="_blank">
                          <img src={whatsapp} className="connectIcon" />
                        </a>
                      </button>

                      <button class="connect-button">
                        <a href="https://twitter.com/Gdsc_UitRgpv" target="_blank">
                          <img src={twitter} className="connectIcon" />
                        </a>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}
