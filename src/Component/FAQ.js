import React, { Component, useState, useRef, useEffect } from "react";
// import ReactLogo from "../Images/illustration-box-desktop.svg";
// import { FiPlus } from "react-icons/fi";
import "../Component/css/faq.css";
export default function FAQ() {
  return (
    <>
      <div className="root">
        <main>
          <article>
            <div class="container">
              <div class="row faq-card">
                <div class="col-sm">
                  <lottie-player
                    src="https://assets4.lottiefiles.com/packages/lf20_rmqm00ic.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "100%", height: "100%" }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div class="col-sm">
                  <div class="mt-5 mb-5 contentWrapper">
                    <h1>Faq</h1>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          id="question1"
                          name="accordionGroup"
                          class="toggleState"
                        />
                        <h2 class="question">
                          <label for="question1">
                            Who can become a member of GDSC?
                          </label>
                        </h2>
                        <p class="answer">
                        Students of all undergraduate and graduate programs from all domains who are passionate about becoming a developer are welcome as a member of GDSC. The passion to learn and grow in a community of enthusiastic developers is the only prerequisite needed.
                        </p>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="question2"
                          name="accordionGroup"
                          class="toggleState"
                        />
                        <h2 class="question">
                          <label for="question2">
                            Are GDSC activities free of cost?
                          </label>
                        </h2>
                        <p class="answer">
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
                          class="toggleState"
                        />
                        <h2 class="question">
                          <label for="question3">
                            Why GDSC when we have a similar club?
                          </label>
                        </h2>
                        <p class="answer">
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
