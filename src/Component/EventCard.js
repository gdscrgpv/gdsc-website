import React from "react";
import "../Assets/css/eventcard.css";
import os from "../Assets/img/os.png";
import asj from "../Assets/img/android-study-jams.jpeg";
import keploy from "../Assets/img/keploy.png";
import Footer from "./Footer";
import NavBarcomp from "./NavBar";

const EventCard = () => {
  const EventData = [
    {
      id: 1,
      name: "Android Study Jams",
      content:
        " Start your android study jams while earning a branded Hacktoberfest T-shirt.",
      logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
      link: "https://gdsc.community.dev/events/details/google-gdsc-guru-gobind-singh-indraprastha-university-presents-android-study-jams/",
    },
    {
      id: 1,
      name: "Hacktober-fest",
      content:
        " Start your android study jams while earning a branded Hacktoberfest T-shirt.",
      logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
      link: "https://gdsc.community.dev/events/details/google-gdsc-guru-gobind-singh-indraprastha-university-presents-android-study-jams/",
    },
    {
      id: 1,
      name: "Hacktober-fest",
      content:
        " Start your android study jams while earning a branded Hacktoberfest T-shirt.",
      logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
      link: "https://gdsc.community.dev/events/details/google-gdsc-guru-gobind-singh-indraprastha-university-presents-android-study-jams/",
    },
    {
      id: 1,
      name: "Android Study Jams",
      content:
        " Start your android study jams while earning a branded Hacktoberfest T-shirt.",
      logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
      link: "https://gdsc.community.dev/events/details/google-gdsc-guru-gobind-singh-indraprastha-university-presents-android-study-jams/",
    },
    {
      id: 1,
      name: "Hacktober-fest",
      content:
        " Start your android study jams while earning a branded Hacktoberfest T-shirt.",
      logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
      link: "https://gdsc.community.dev/events/details/google-gdsc-guru-gobind-singh-indraprastha-university-presents-android-study-jams/",
    },
    {
      id: 1,
      name: "Hacktober-fest",
      content:
        " Start your android study jams while earning a branded Hacktoberfest T-shirt.",
      logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
      link: "https://gdsc.community.dev/events/details/google-gdsc-guru-gobind-singh-indraprastha-university-presents-android-study-jams/",
    },
  ];

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
                <button class="know-more-btn-small">Know More</button>
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
                <button class="know-more-btn-small">Know More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Compose Camp</h3>
              </div>
              <div className="description text-end">
                <p>
                  Session 3 of compose camp - Deep dive into compose
                  fundamentals and build birthday card app Date: September 29,
                  2022
                </p>
              </div>
              <div className="know-more text-end">
                <button class="know-more-btn-small">Know More</button>
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
                <h3>Hacktoberfest</h3>
              </div>
              <div className="description text-start">
                <p>
                Join us with Semikolan and GDSC UIT RGPV where you can find a variety of projects in which you can contribute and through which you can start your open source journey.
                </p>
              </div>
              <div className="know-more text-start">
                <button class="know-more-btn-small">Know More</button>
              </div>
            </div>
          </div>
        </div>


        <div className="session-cards">
          <div className="event-section-title">Sessions</div>
          <div class="wrap-event">
            {EventData.map((event) => {
              return (
                <article class="card-event">
                  <div class="card-inner-event">
                    <div class="card-image-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba"
                        alt=""
                        width="330"
                        class="card-event-image"
                      />
                    </div>

                    <div class="card-text-box">
                      <div class="card-event-flex-box">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887"
                          alt=""
                          class="card-event-logo"
                        />

                        <p
                          style={{
                            fontSize: 20,
                            fontWeight: "550",
                            marginLeft: "10%",
                          }}
                          class="card-event-text"
                        >
                          {event.name}
                        </p>
                      </div>

                      <div class="card-event-column-box">
                        <p
                          style={{ fontSize: 14, fontWeight: "500" }}
                          class="card-event-text"
                        >
                          {event.content}
                        </p>
                      </div>

                      <button class="know-more-btn-small">
                        <a className="link-event" href={event.link}>
                          Know More
                        </a>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default EventCard;
