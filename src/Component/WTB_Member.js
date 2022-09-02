import React from "react";

export const WTB_Member = () => {
  return (
    <div className="main-box ">
      <div className="Side-box d-flex align-self-center">
        <div className="d-flex justify-content-center  ">
          <p>
            Why To Become <br />
            Community Member At
          </p>
        </div>
        <div className="d-flex  justify-content-center colored-logo">
          <h2 className="G">G</h2>
          <h2 className="D">D</h2>
          <h2 className="S">S</h2>
          <h2 className="C">C</h2>
          <h2>?</h2>
        </div>
      </div>
      <div className="right-box d-flex">
        <div className=" d-flex text-center justify-content-center WTB-text ">
          <p>
            {" "}
            Being a part of GDSC, gives you a platform to express yourself and
            build your skills with peer's and help enhance your technical
            knowledge
          </p>
        </div>
        <div className="d-flex  fs-5  justify-content-center colored-logo">
          <button className="join-community-btn">
            {" "}
            <a href="#community">JOIN COMMUNITY </a>
          </button>
        </div>
      </div>
    </div>
  );
};
