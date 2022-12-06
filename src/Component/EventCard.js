import React from "react";
import "../Assets/css/eventcard.css";
import os from "../Assets/img/os.png";
import asj from "../Assets/img/android-study-jams.jpeg";
import opensource from "../Assets/img/opensource.png";
import gcp from "../Assets/img/Google Cloud Campaign.png";
import hacktoberfest from "../Assets/img/hacktoberfest.png";
import compose from "../Assets/img/compose.png";
import keploy from "../Assets/img/keploy.png";
import Footer from "./Footer";
import NavBarcomp from "./NavBar";

const EventCard = () => {
  return (
    <>
      <div className="event-page">
        <NavBarcomp />
        <div className="container major-event">
          <div class="row major-event-item">
            <div class="col">
              <div className="event-image-page">
                <lottie-player
                  src="https://assets3.lottiefiles.com/packages/lf20_L72m3bQKrm.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div className="col event-page-landing">
              <div className="event-page-info">
                <div className="event-page-title">Participate and Engage</div>
                <div className="event-page-description">
                  We host events and hackathons all year long, where you may
                  learn new skills by putting your knowledge and talents to use
                  in order to win prizes.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div className="event-section-title">Major Events</div>
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>GDSC Orientation Session 2022</h3>
              </div>
              <div className="description text-end">
                <p>
                  With a heartful adieu to the first ever legacy, we’re more
                  than glad to commence the ‘Orientation Program’ of the 2nd
                  chapter of one of the most splendid clubs of our college,
                  GDSC.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-university-institute-of-technology-rgpv-bhopal-presents-orientation-session-gdsc-22-23/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={os} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={keploy} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>API Literacy Session with Keploy</h3>
              </div>
              <div className="description text-start">
                <p>
                  Semikolan with GDSC UIT RGPV brings an interactive session to
                  make you understand the concepts of APIs in a super fun way!
                </p>
              </div>
              <div className="know-more text-start">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-university-institute-of-technology-rgpv-bhopal-presents-api-literacy-session-keploy/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Compose Camp 2022</h3>
              </div>
              <div className="description text-end">
                <p>
                  Learn how to build Android apps using Jetpack Compose,
                  Android’s modern UI toolkit, alongside your peers at Compose
                  Camp. These virtual and in-person sessions are kicking off
                  near you soon!
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-university-institute-of-technology-rgpv-bhopal-presents-getting-started-with-android-and-android-studio-compose-camp/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={compose} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={hacktoberfest} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Hacktober Fest 2022</h3>
              </div>
              <div className="description text-start">
                <p>
                  Hacktoberfest, the biggest event in Hacktoberfest is open to
                  register now! We have a lot more planned for the fest and it's
                  time you all tie up your seatbelts and join us on the ride.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-university-institute-of-technology-rgpv-bhopal-presents-initiating-hacktoberfest-get-started-with-git-and-github/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Demystifying Open Source</h3>
              </div>
              <div className="description text-end">
                <p>
                  Google Summer of Code (GSoC) is a global, online program
                  focused on bringing new contributors into open source software
                  development. You get the chance to interact with the greatest
                  developers in the world.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-university-institute-of-technology-rgpv-bhopal-presents-demystifying-open-source/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={opensource} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={gcp} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Google Cloud Campaign</h3>
              </div>
              <div className="description text-start">
                <p>
                  Deep dive into the world of Cloud Computing and get hands-on
                  experience with the Google Cloud Platform (GCP).
                </p>
              </div>
              <div className="know-more text-end">
              <a href="http://semiurl.tech/gccp">
                <button class="know-more-btn-small">Know More</button>
              </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default EventCard;
