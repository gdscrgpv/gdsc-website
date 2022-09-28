import React from "react";
import "aos/dist/aos.css";

export const WTBMember = () => {
  return (
    <div className="main-box ">
      <div className="Side-box align-self-center" data-aos="fade-up">
        <div className="circle-1"> Learn</div>
        <div className="d-flex font-face-bold  justify-content-center">
          <p>
            Why To Become <br />
            Community Member At
          </p>
        </div>
        <div className="d-flex font-face-bold  justify-content-center colored-logo">
          <h2 className="G">G</h2>
          <h2 className="D">D</h2>
          <h2 className="S">S</h2>
          <h2 className="C">C</h2>
          <h2>?</h2>
        </div>
        <div className="circle-2 ">Connect</div>
        <div className="circle-3 ">Growth</div>
      </div>
      <div className="right-box d-flex" data-aos="fade-up">
        <div className=" d-flex text-center justify-content-center font-face-bold WTB-text ">
          <p>
            {" "}
            GDSC provides an arena for every student to learn new technical
            skills, enhance their personality and form an amazing network with
            people. With immense exposure and a peer-to-peer learning
            environment, GDSC is the ideal community for you to thrive.
          </p>
        </div>
        <div className="d-flex  justify-content-center">
          <button className="font-face-bold  join-community-btn">
            {" "}
            <a href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/">JOIN COMMUNITY </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WTBMember;
