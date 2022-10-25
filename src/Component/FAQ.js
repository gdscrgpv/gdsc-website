import React, { Component, useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
// import ReactLogo from "../Images/illustration-box-desktop.svg";
// import { FiPlus } from "react-icons/fi";
import "../Assets/css/faq.css";
export default function FAQ() {
  return (
    <>
      <div className="root" data-aos="fade-up" data-aos-delay="100">
        <main>
          <article>
            <div className="container">
              <div className="row faq-card">
                <div className="col-sm">
                  <lottie-player
                    src="https://assets4.lottiefiles.com/packages/lf20_rmqm00ic.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "100%" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div className="col-sm">
                  <div className="mt-5 mb-5 contentWrapper">
                    <h1>FAQ</h1>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          id="question1"
                          name="accordionGroup"
                          className="toggleState"
                        />
                        <h2 className="question">
                          <label for="question1">
                            Who can become a member of GDSC?
                          </label>
                        </h2>
                        <p className="answer">
                          Students of all undergraduate and graduate programs
                          from all domains who are passionate about becoming a
                          developer are welcome as a member of GDSC. The passion
                          to learn and grow in a community of enthusiastic
                          developers is the only prerequisite needed.
                        </p>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="question2"
                          name="accordionGroup"
                          className="toggleState"
                        />
                        <h2 className="question">
                          <label for="question2">
                            Are GDSC activities free of cost?
                          </label>
                        </h2>
                        <p className="answer">
                          Yes, all sessions, workshops, seminars, hackathons,
                          etc. organised by GDSC are free of cost. All
                          activities are organised by highly skilled experts who
                          have achieved laurels in their respective domains.
                        </p>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="question3"
                          name="accordionGroup"
                          className="toggleState"
                        />
                        <h2 className="question">
                          <label for="question3">
                            Why GDSC when we have a similar club?
                          </label>
                        </h2>
                        <p className="answer">
                          Being a global community, GDSC offers immense exposure
                          to its community members. By joining a GDSC, a student
                          not only learns and grows as a developer but also
                          builds up a strong network and exquisite communication
                          skills.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
