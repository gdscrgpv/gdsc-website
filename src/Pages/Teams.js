import React, { Component } from "react";
import "./../Assets/css/team.css";
import { Row } from "reactstrap";
import FAQ from "../Component/Footer.js";
import Ankur from "../Assets/img/Ankur Gupta _ Lead.jpg";
import NavBarcomp from "../Component/NavBar";
import Sir from "../Assets/img/sanjaysir.JPG";
import linkedIn from "../Assets/img/linkedin.png";
import Footer from "../Component/Footer.js";
import "aos/dist/aos.css";
export default class Teams extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const GDSCLead = [
      {
        name: "Ankur Gupta",
        role: "GDSC Lead",
        img: Ankur,
        linkedIn: "https://www.linkedin.com/in/ankurg132",
      },
    ];
    const Leads = [
      {
        name: "Rajat Bhaskare",
        role: "Tech Team Lead",
        img: require("../Assets/img/Rajat Bhaskare - Tech Team Lead.png"),
        linkedIn: "https://www.linkedin.com/in/rajat-bhaskare-b40443202",
      },
      {
        name: "Srajal Sahu",
        role: "Design Team Lead",
        img: require("../Assets/img/srajal.jpg"),
        linkedIn: "https://www.linkedin.com/in/srajal-sahu-50863b214",
      },
      {
        name: "Abhinav Bagde ",
        role: "Content Lead",
        img: require("../Assets/img/Abhinav Bagde - Content Lead.jpg"),
        linkedIn: "",
      },
      {
        name: "Atharva J V Mathur ",
        role: "Event and Outreach Co-Lead",
        img: require("../Assets/img/Atharva J V Mathur _ Event and Outreach Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/atharvamathur/",
      },
      {
        name: "Tanmay Rajawat ",
        role: "Event and Outreach Co-Lead",
        img: require("../Assets/img/Tanmay Rajawat - Co-lead event management.jpg"),
        linkedIn: "https://www.linkedin.com/in/tanmayrajawat",
      },
    ];
    const teachteam = [
      {
        name: "Pulkit Dubey",
        role: "App Developer",
        img: require("../Assets/img/Pulkit Dubey - App Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/pulkit-dubey-75b703224/",
      },
      {
        name: "Satyam Sharma",
        role: "Web Developer",
        img: require("../Assets/img/ss.png"),
        linkedIn: "https://www.linkedin.com/in/iamsatyam17/",
      },
      {
        name: "Prakrti Mankar",
        role: "Women In Tech",
        img: require("../Assets/img/Prakrti Mankar _ Women in Tech.jpg"),
        linkedIn: "https://www.linkedin.com/in/prakrti-mankar",
      },
      {
        name: "Abhishek Malviya",
        role: "ML/Cloud",
        img: require("../Assets/img/Abhishek Malviya _ Ml _ Cloud lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/abhishek-malviya-458b001ba/",
      },
      {
        name: "Aryan Singh",
        role: "Open Source Developer",
        img: require("../Assets/img/Aryan Singh _ Open Source Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/amazing-aryan",
      },
      {
        name: "Abhishek Singh Lodhi",
        role: "UI/UX Designer",
        img: require("../Assets/img/Abhishek Singh Lodhi _ UI_UX Lead.png"),
        linkedIn: "https://www.linkedin.com/in/abhishek-singh-lodhi-b037091b8",
      },
    ];
    const designandcontent = [
      {
        name: "Sumit Yadav",
        role: "Design",
        img: require("../Assets/img/Sumit Yadav - Graphic designer and Video Editor.jpg"),
        linkedIn: "https://www.linkedin.com/in/sumit-yadav-9306971b4",
      },
      {
        name: "Aastha Koserwal",
        role: "Content and Marketing",
        img: require("../Assets/img/Aastha Koserwal - Content and Marketing Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/aastha-koserwal-8832b3225",
      },
      {
        name: "Pratishtha Tiwari",
        role: "Content and Marketing",
        img: require("../Assets/img/Pratishtha Tiwari - Content and Marketin.jpg"),
        linkedIn: "https://www.linkedin.com/in/pratishtha-tiwari-49511b218",
      },
    ];

    const buddies = [
      {
        name: "Aman Kushwaha",
        role: "GDSC Buddy",
        img: require("../Assets/img/ProfilePic_Aman.png"),
        linkedIn:
          "https://www.linkedin.com/in/aman-kumar-singh-kushwaha-60b501225/",
      },
      {
        name: "Divyanshu Uramliya",
        role: "GDSC Buddy",
        img: require("../Assets/img/diyanshu.jpg"),
        linkedIn: "https://www.linkedin.com/in/divyanshu-urmaliya-b542ba21b/",
      },
      {
        name: "Jaywardhan Mourya",
        role: "GDSC Buddy",
        img: require("../Assets/img/jai.jpg"),
        linkedIn: "https://www.linkedin.com/in/jay-wardhan-mourya-9736ab22b/",
      },
      ,
      {
        name: "Sumit Choudhary",
        role: "GDSC Buddy",
        img: require("../Assets/img/sumit_buddies.jpg"),
        linkedIn: "https://www.linkedin.com/in/sumitc02468/",
      },
      {
        name: "Shreya Rai",
        role: "GDSC Buddy",
        img: require("../Assets/img/sherya.png"),
        linkedIn: "https://www.linkedin.com/in/shreya-rai-742952226/",
      },
    ];

    const mentors = [
      {
        name: "Rishabh Gupta",
        role: "Mentor",
        img: require("../Assets/img/rg.jpg"),
        linkedIn: "https://www.linkedin.com/in/rishabhgupta1/",
      },
      {
        name: "Apoorv Pandey",
        role: "Mentor",
        img: require("../Assets/img/ap.jpg"),
        linkedIn: "https://www.linkedin.com/in/apoorv-pandey/",
      },
      {
        name: "Geetansh Agrawal",
        role: "Mentor",
        img: require("../Assets/img/ga.jpg"),
        linkedIn: "https://www.linkedin.com/in/geetansh-agrawal-1b8a27190/",
      },
      ,
      {
        name: "Harsh Vishwakarma",
        role: "Mentor",
        img: require("../Assets/img/hv.jpg"),
        linkedIn: "https://www.linkedin.com/in/meinhoonharsh/",
      },
    ];

    return (
      <div className="team">
        <NavBarcomp />

        {/*left right section */}
        <div className="teamlanding" data-aos="zoom-in" data-aos-delay="300">
          <div>
            <h1 className="first-title">
              The
              <br />
              <span className="G">T</span>
              <span className="D">e</span>
              <span className="S">a</span>
              <span className="C">m</span>
            </h1>
            <h2>
              <b>Presenting Board of 2022-2023</b>
            </h2>
            {/* <div></div> */}
          </div>
        </div>
        {/*team section */}

        {/*team section */}
        {/* <div className="container"></div> */}
        <div
          className="Heading text-center mt-5"
          style={{ fontFamily: "GoogleSans-Bold" }}
          data-aos="fade-up"
        >
          <h1>Faculty Coordinator</h1>
        </div>
        <div className="speakersCardContainer mt-5" data-aos="fade-up">
          <div class="speakerCard">
            <div style={{ height: "40px" }}>
              <img class="speakerImage" alt="" src={Sir} />
            </div>
            <h5
              class="MuiTypography-root sanjay-sir jss7 MuiTypography-h5 MuiTypography-alignCenter"
              style={{ fontFamily: "GoogleSans-Bold" }}
            >
              Sanjay Kumar Sharma
            </h5>
            <span
              class="MuiTypography-root mt-4 jss7 MuiTypography-caption MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              Faculty Coordinator
            </span>
            <span
              class="MuiTypography-root mt-4 jss7 MuiTypography-caption MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              sksharma@rgtu.net
            </span>
          </div>
        </div>
        {/* GDSC Lead */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>GDSC Lead</h1>
        </div>
        <div className="speakersCardContainer mt-5" data-aos="fade-up">
          <div class="speakerCard">
            <div style={{ height: "40px" }}>
              <img class="speakerImage" alt="" src={Ankur} />
            </div>
            <h5
              class="MuiTypography-root mt-5 jss7 MuiTypography-h4 team-heading MuiTypography-alignCenter"
              style={{ fontFamily: "GoogleSans-Bold" }}
            >
              Ankur Gupta
            </h5>
            <span
              class="MuiTypography-root mt-2 jss7 MuiTypography-caption team-dept MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              GDSC Lead
            </span>

            <div class="MuiCardActions-root MuiCardActions-spacing margin-2">
              <button class="connect-btn">
                <a href="https://www.linkedin.com/in/ankurg132" target="_blank">
                  <img src={linkedIn} className="connect-icon" />
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Leads */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Leads</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {Leads.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={speaker.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/*---------------------TechTeam---------------------*/}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Tech Team</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {teachteam.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root MuiCardActions-spacing">
                <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                  <button class="connect-btn">
                    <a href={speaker.linkedIn} target="_blank">
                      <img src={linkedIn} className="connect-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*---------------------DesignandcontentTeam---------------------*/}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Design and Content Team</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {designandcontent.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 team-heading margin-2 MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />
              <div class="MuiCardActions-root MuiCardActions-spacing">
                <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                  <button class="connect-btn">
                    <a href={speaker.linkedIn} target="_blank">
                      <img src={linkedIn} className="connect-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --------------------BuddyTeam------------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Buddies</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {buddies.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={speaker.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------------MentorTeam----------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>GDSC Mentors</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {mentors.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={speaker.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
