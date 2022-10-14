import React, { useEffect, useRef, useState } from "react";
import "../Assets/css/aboutus.css";
import Img from "../Assets/img/AboutUs.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [hid, setHid] = useState(false);

  const aboutHeading = useRef(null);
  const aboutImg = useRef(null);
  
  setTimeout(() => {
    setHid(true);
  }, 600);

  return (
    <>
      <div className="mainView" data-aos="fade-up">
        <div className="leftBox"  data-aos="fade-up">
          {/* heading section */}

          {/* yellow line */}
          <div className="line space"></div>

          <div className="flex top heading" ref={aboutHeading}>
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
              networking.
            </h5>
          </div>
        </div>

        {/* image */}
        <div className="imageDiv"  data-aos="fade-up" ref={aboutImg}>
          <img className="image" alt="AboutUS" src={Img} />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
