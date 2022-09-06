import React, { useEffect, useRef, useState } from "react";
import "./AboutUsStyle.css";
import Img from "../Assets/img/AboutUs.png";
// import Transition from "./Transition/Transition";

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
              Google Developer Student Club (GDSC) is a student-led community
              that provides undergrad students with the opportunity to learn,
              grow or polish their technical skills. It provides students with a
              peer-to-peer learning environment to grow their knowledge as a
              developer and build solutions for society. Community learning is a
              key aspect of GDSC as it helps in effective learning and essential
              networking
            </h5>
          </div>
        </div>

        {/* image */}
        <div className="imageDiv" ref={aboutImg}>
          <img className="image" alt="AboutUS" src={Img} />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
