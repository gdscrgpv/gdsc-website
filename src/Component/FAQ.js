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
        <div className="App">
          <div>
            <button
              className={`question-section ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="question-align">
                  <h4 className="question-style">
                    Why do you like web developemnt
                  </h4>
                  <FiPlus
                    className={active ? `question-icon rotate` : `question-icon`}
                  />
                </div>
                <div
                  ref={contentRef}
                  className={active ? `answer answer-divider` : `answer`}
                >
                  <p>Because I love coding</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </>
    );
  }
  