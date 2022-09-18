import React, { Component } from "react";
import "../Assets/css/footer.css";
import GDSC from "../Assets/img/GDSC_Logo.png";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="https://gdscuitrgpv.com">
                      <img src={GDSC} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text text-left">
                    <p className="text-left">
                      Google Student Developer Clubs (GDSC) is a student-led
                      network that allows undergrad students to upgrade their
                      skills and learn about various domains of computing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 useful-links">
                <div className="footer-widget">
                  <div className="footer-widget-heading useful">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="footer-link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/teams">Team</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/">
                        Join Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading useful">
                    <h3>GDSC Departments</h3>
                  </div>
                  <ul className="footer-link">
                    <li>
                      <a>Technical</a>
                    </li>
                    <li>
                      <a>Design</a>
                    </li>
                    <li>
                      <a>Content</a>
                    </li>
                    <li>
                      <a>Event & Outreach</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50 subscribe">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Enter email address here..."
                      />
                      <button>Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
