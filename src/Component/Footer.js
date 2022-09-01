import React, { Component } from "react";
import logo from "../Images/gdsc.png";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className="footer-distributed">
        <div className="footer-left text-center">
          <img src={logo}></img>
        </div>
        <div className="footer-center">
          <div className="college flex align-items-center">
            <i className="fa fa-map-marker" />
            <p>University Institute of Technology RGPV Bhopal</p>
          </div>
          <div className="college align-items-center">
            <i className="fa fa-phone" />
            <p>+91-628-369-8964</p>
          </div>
          <div className="college align-items-center">
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:gdscuitrgpv@gmail.com" className="text-black">
                gdscuitrgpv@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about text-center">
            <span>Follow Us</span>
          </p>
          <div className="footer-icons text-center">
            <a href="https://www.instagram.com/gdsc_uitrgpv/">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://twitter.com/gdsc_uitrgpv">
              <i className="fa fa-twitter" />
            </a>
            <a href="https://www.linkedin.com/company/gdscuitrgpv/">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/gdscrgpv">
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
        <div className="justify-content-center text-center">
          <p className="copyright">Copyright ⓒ All rights reserved.</p>
        </div>
      </footer>
      </>
    );
  }
}
