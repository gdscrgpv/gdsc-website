import React, { Component } from "react";
import "../Component/css/contact.css";
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
export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact-section">
          <div className="contact-body">
            <p className="contact-title">Contact Us</p>
            <div className="contact-info">
              <div>
                <span>
                  <FiPhone size="2rem" id="icon"/>
                </span>
                <span>Phone No.</span>
                <span className="text">1-2392-23928-2</span>
              </div>
              <div>
                <span>
                  <FiSend size="2rem" id="icon" />
                </span>
                <span>E-mail</span>
                <span className="text">mail@company.com</span>
              </div>
              <div>
                <span>
                  <FiHome size="2rem" id="icon" />
                </span>
                <span>Address</span>
                <span className="text">
                  2939 Patrick Street, Vicotria TX, United States
                </span>
              </div>
            </div>
            <div className="contact-form">
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
              <div>
                <form>
                  <p className="contact-title">Share ideas & queries!</p>
                  <p className="contact-title"></p>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mail"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="form-control"
                    defaultValue={""}
                  />
                  <input
                    type="submit"
                    className="send-btn"
                    defaultValue="send message"
                  />
                </form>
              </div>
            </div>
            <div className="contact-social">
              <p className="contact-title">Connect with us on social platforms! </p>
              <div className="socials-div">
                <div>
                  <a className="social-icons G" id="icon">
                    {" "}
                    <FaGithub size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons D" id="icon">
                    {" "}
                    <FaInstagram size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons S" id="icon">
                    {" "}
                    <FaLinkedin size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons C" id="icon">
                    {" "}
                    <FaTwitter size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons G" id="icon">
                    {" "}
                    <FaTelegram size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons D" id="icon">
                    {" "}
                    <FaFacebook size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons S" id="icon">
                    {" "}
                    <FaDiscord size="2em" />{" "}
                  </a>
                </div>
                <div>
                  <a className="social-icons C" id="icon">
                    {" "}
                    <FaGoogle size="2em" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.1539168403733!2d77.35946871477518!3d23.310173684808195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c663a2f02fc89%3A0x12a6b478bbd192f1!2sUniversity%20Institute%20of%20Technology%20RGPV!5e0!3m2!1sen!2sin!4v1662109383674!5m2!1sen!2sin"
              width="100%"
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </section>
      </>
    );
  }
}
