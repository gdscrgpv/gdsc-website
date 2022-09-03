import React from "react";

export const WTB_Member = () => {
  return (
    <div className="main-box ">

      <div className="Side-box align-self-center">
      <div className="circle-1"> Learn</div>
        <div className="d-flex font-face-bold  justify-content-center  ">
          <p >
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
      <div className="right-box d-flex">
        <div className=" d-flex text-center justify-content-center font-face-bold WTB-text ">
          <p>
            {" "}
            Being a part of GDSC, gives you a platform to express yourself and
            build your skills with peer's and help enhance your technical
            knowledge
          </p>
        </div>
        <div className="d-flex  justify-content-center">
          <button className="font-face-bold  join-community-btn">
            {" "}
            <a href="#community">JOIN COMMUNITY </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WTB_Member;