import React, { Component } from "react";
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
import ContactComponent from "../Component/Contact";
import NavBarcomp from "../Component/NavBar";
import Footer from "../Component/Footer";
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="">
          <NavBarcomp />
          <ContactComponent />
          <Footer />
        </div>
      </>
    );
  }
}
