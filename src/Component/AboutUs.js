import React, { useEffect, useRef, useState } from "react";
import "./AboutUsStyle.css";
import gsap from "gsap";
import Img from "../Assets/img/AboutUs.png";
import Transition from "./Transition/Transition";

const AboutUs = () => {
  const [hid, setHid] = useState(false);

  const aboutHeading = useRef(null);
  const aboutImg = useRef(null);
  useEffect(() => {
    // aboutUs.from(aboutHeading, {
    //     duration: .6,
    //     skewX: 10,
    //     x: -100,
    //     opacity: 0
    // }, 3.5)
    // aboutUs.from(aboutImg, {
    //     duration: .5,
    //     y: -200,
    //     opacity: 0
    // }, 3)
  });

  setTimeout(() => {
    setHid(true);
  }, 600);

  return (
    <>
      <div className="mainView">
        <div className="leftBox">
          {/* heading section */}

          {/* yellow line */}
          <div className="line space"></div>

          <div className="flex top" ref={aboutHeading}>
            <h1 className="space"> About</h1>

            <div className="flex gdsc">
              <span className=" G bgDiv">
                <h1>G</h1>
              </span>
              <span className=" D bgDiv">
                <h1>D</h1>
              </span>
              <span className=" S bgDiv">
                <h1>S</h1>
              </span>
              <span className=" C bgDiv">
                <h1>C</h1>
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="line space"></div>
            <div className="smallLine space"></div>
          </div>

          {/* content section */}
          <div className="content textbox">
            {/* text  */}
            <h5 className="font-face-lighter ">
              Google Student Developer Clubs (GDSC) is a student-led network
              that allows undergrad students to upgrade their skills and learn
              about various domains of computing. It gives students the
              potential to expand their technological skills, create solutions
              for their local communities, and network with other members of the
              Google community.
            </h5>
          </div>
        </div>

        {/* image */}
        <div className="imageDiv" ref={aboutImg}>
          <img className="image" src={Img} />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
