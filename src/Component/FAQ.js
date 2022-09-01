import React, { Component, useState, useRef, useEffect }from "react";
import ReactLogo from "../Images/illustration-box-desktop.svg";
import { FiPlus } from "react-icons/fi";
export default function FAQ() {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="faq">
        <button
          className={`question-section ${active}`}
          onClick={toggleAccordion}
        >
          <div className="font-face-lighter">
            <div className="question-align">
              <h4 className="question-style">
                Who can become a member of GDSC?
              </h4>
              <FiPlus
                className={active ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef}
              className={active ? `answer answer-divider` : `answer`}
            >
              <p>Students from all undergraduate or graduate programs with an interest in growing as a developer are welcomed. The only prerequisite is your interest and will to learn in a community of budding developers.</p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
