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
            <div className="contentWrapper">
              <h1>Faq</h1>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="question1"
                    name="accordionGroup"
                    className="toggleState"
                  />
                  <h2 className="question">
                    <label htmlFor="question1">
                      How many team members can I invite?
                    </label>
                  </h2>
                  <p className="answer">
                    You can invite up to 2 additional users on the Free plan.
                    There is no limit on team members for the Premium plan.
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
                    <label htmlFor="question2">
                      What is the maximum file upload size?
                    </label>
                  </h2>
                  <p className="answer">
                    No more than 2GB. All files in your account must fit your
                    allotted storage space.
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
                    <label htmlFor="question3">
                      How do I reset my password?
                    </label>
                  </h2>
                  <p className="answer">
                    Click “Forgot password” from the login page or “Change
                    password” from your profile page. A reset link will be
                    emailed to you.
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="question4"
                    name="accordionGroup"
                    className="toggleState"
                  />
                  <h2 className="question">
                    <label htmlFor="question4">
                      Can I cancel my subscription?
                    </label>
                  </h2>
                  <p className="answer">
                    Yes! Send us a message and we’ll process your request no
                    questions asked.
                  </p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="question5"
                    name="accordionGroup"
                    className="toggleState"
                  />
                  <h2 className="question">
                    <label htmlFor="question5">
                      Do you provide additional support?
                    </label>
                  </h2>
                  <p className="answer">
                    Chat and email support is available 24/7. Phone lines are
                    open during normal business hours.
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
