import React from "react";
import "../Assets/css/eventcard.css";
import asj from "../Assets/img/android-study-jams.jpeg";
import Footer from "./Footer";
import NavBarcomp from "./NavBar";

const EventCard = () => {
  const EventData = [
    {
      id: 1,
      name: "Orientation",
      image: "",
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
          <div class="row major-event-item">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Android Study Jams</h3>
              </div>
              <div className="description text-end">
                <p>
                  30 Days of Google Cloud program will provide you an
                  opportunity to kickstart your career in the cloud
                </p>
              </div>
              <div className="know-more text-end">
                <button class="know-more-btn-small">Know More</button>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={asj} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={asj} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Android Study Jams</h3>
              </div>
              <div className="description text-start">
                <p>
                  30 Days of Google Cloud program will provide you an
                  opportunity to kickstart your career in the cloud
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
                      Hacktoberfest
                    </p>
                  </div>

                  <div class="card-event-column-box">
                    <p
                      style={{ fontSize: 14, fontWeight: "500" }}
                      class="card-event-text"
                    >
                      Start your open-source journey while earning a branded
                      Hacktoberfest T-shirt.
                    </p>
                  </div>

                  <button class="know-more-btn-small">Know More</button>
                </div>
              </div>
            </article>

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
                      Hacktoberfest
                    </p>
                  </div>

                  <div class="card-event-column-box">
                    <p
                      style={{ fontSize: 14, fontWeight: "500" }}
                      class="card-event-text"
                    >
                      Start your open-source journey while earning a branded
                      Hacktoberfest T-shirt.
                    </p>
                  </div>

                  <button class="know-more-btn-small">Know More</button>
                </div>
              </div>
            </article>

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
                      Hacktoberfest
                    </p>
                  </div>

                  <div class="card-event-column-box">
                    <p
                      style={{ fontSize: 14, fontWeight: "500" }}
                      class="card-event-text"
                    >
                      Start your open-source journey while earning a branded
                      Hacktoberfest T-shirt.
                    </p>
                  </div>

                  <button class="know-more-btn-small">Know More</button>
                </div>
              </div>
            </article>

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
                      Hacktoberfest
                    </p>
                  </div>

                  <div class="card-event-column-box">
                    <p
                      style={{ fontSize: 14, fontWeight: "500" }}
                      class="card-event-text"
                    >
                      Start your open-source journey while earning a branded
                      Hacktoberfest T-shirt.
                    </p>
                  </div>

                  <button class="know-more-btn-small">Know More</button>
                </div>
              </div>
            </article>

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
                      Hacktoberfest
                    </p>
                  </div>

                  <div class="card-event-column-box">
                    <p
                      style={{ fontSize: 14, fontWeight: "500" }}
                      class="card-event-text"
                    >
                      Start your open-source journey while earning a branded
                      Hacktoberfest T-shirt.
                    </p>
                  </div>

                  <button class="know-more-btn-small">Know More</button>
                </div>
              </div>
            </article>

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
                      Hacktoberfest
                    </p>
                  </div>

                  <div class="card-event-column-box">
                    <p
                      style={{ fontSize: 14, fontWeight: "500" }}
                      class="card-event-text"
                    >
                      Start your open-source journey while earning a branded
                      Hacktoberfest T-shirt.
                    </p>
                  </div>

                  <button class="know-more-btn-small">Know More</button>
                </div>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default EventCard;
