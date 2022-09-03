import React, { Component } from "react";
// import { Link } from "react-router-dom";
import WhatWeDoCard from "./Cards/WhatWeDoCard";
export default class WhatWeDo extends Component {
  render() {
    return (
      <div className="testimonial-area-l-13 position-relative overflow-hidden z-index-1">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-xl-11">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading-7 text-left text-black font-face-bold">
                    <div className="flex">
                      <h2 className="what-we-do">What we do at</h2>
                      <h2 className="G">G</h2>
                      <h2 className="D">D</h2>
                      <h2 className="S">S</h2>
                      <h2 className="C">C</h2>
                      <h2>?</h2>
                    </div>
                  </div>
                  <div className="section-heading-7 text-left text-black font-face-lighter">
                    <h4>
                      Google Developers Students Club (GDSC) is formed by
                      passionate and dedicated students leading to empower other
                      students and help them enhance their learning curve, aims
                      to bring out a positive change in the students and helps
                      them to get to know about wider aspects of technologies
                      and to build solutions for local business and community.
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="row testimonial-area-l-13-items justify-content-center"
                data-aos="fade-right"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <div className="col-xl-4 col-md-6 col-sm-8">
                  <WhatWeDoCard />
                </div>
                <div className="col-xl-4 col-md-6 col-sm-8">
                  <WhatWeDoCard />
                </div>
                <div className="col-xl-4 col-md-6 col-sm-8">
                  <WhatWeDoCard />
                </div>
                <div className="col-xl-4 col-md-6 col-sm-8">
                  <WhatWeDoCard />
                </div>
                <div className="col-xl-4 col-md-6 col-sm-8">
                  <WhatWeDoCard />
                </div>
                <div className="col-xl-4 col-md-6 col-sm-8">
                  <WhatWeDoCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-3" />
      </div>
    );
  }
}
