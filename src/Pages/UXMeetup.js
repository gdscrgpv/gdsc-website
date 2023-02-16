import { Component } from "react";
import "../Assets/css/uxmeetup.css";

export default class UXMeetup extends Component {
    render() {
        return (
            <>
                <section className="header">
                    <div className="landing">
                        <div className="intro">
                            <p>Bringing to you Bhopal's first ever UX meetup!</p>
                            <br />
                            <h1>
                                Bhopal <span> UX Meetup</span>
                            </h1>
                            <h2>On 27th Feb 2023</h2>
                            <div className="button">
                                <button className="btn">Register now</button>
                            </div>
                        </div>
                        <div className="lottie">
                            <lottie-player
                                src="https://assets5.lottiefiles.com/packages/lf20_ucB6LY4uTG.json"
                                background="transparent"
                                speed={1}
                                style={{ width: 500, height: 300 }}
                                loop=""
                                autoPlay=""
                            />
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="heading">
                        <h1> About</h1>
                    </div>
                    <div className="content">
                        <p>
                            GDSC UIT-RGPV invites you to Bhopal’s first-ever UX meetup. Level up
                            your career in design with some amazing talks, panel discussions and
                            networking sessions with our guests. If you love the design and meeting
                            interesting folks, don’t miss this chance. It is the first UX meet-up in
                            Bhopal and the second in central India i.e. Madhya Pradesh. There will
                            be a pannel discussion and talks over product design and all. Deep dive
                            into the world of User Experience(UX). Gain insights into the latest
                            tools and techniques for creating user-centred designs and much more.
                            Get the opportunity to learn from industry experts and leaders. Whether
                            you are a seasoned UX designer or just starting out, come join us and
                            gain valuable insights and inspiration to take your skills to the next
                            level!
                        </p>
                    </div>
                </section>
                {/* sponsars start */}
                <div className="sponsers">
                    <div className="sponsars-heading">
                        <h1>Bringing Experience from</h1>
                    </div>
                    <div className="row">
                        <div className="row1">
                            <div className="col">
                                <img src="./images/accenture.jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/adplist.ccf05d76.jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/cisco.22d3e7bd.jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (1).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (10).jpg" alt="" />
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col">
                                <img src="./images/download (11).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (12).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (13).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (14).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (15).jpg" alt="" />
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col">
                                <img src="./images/download (17).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (18).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download.jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/reliance.jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/uniliver.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col">
                                <img src="./images/iitkanpur.jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/infosys.png" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/makemytrip.85035c74.png" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/microsoft.png" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/mindtree.d2793663.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col">
                                <img src="./images/payu.e9ba2f72.png" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (2).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (3).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (4).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (5).jpg" alt="" />
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col">
                                <img src="./images/download (6).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (7).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (8).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (9).jpg" alt="" />
                            </div>
                            <div className="col">
                                <img src="./images/download (10).jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* sponsars end*/}
                {/* community start */}
                <div className="community">
                    <div className="community-heading">
                        <h1>Community Partners</h1>
                    </div>
                    <div className="row-community">
                        <div className="col-community">
                            <img src="./images/logo_gdscuitrgpv.59ee6659.png" alt="" />
                            <h4>Google Developers Student Club</h4>
                            <p>University Institute Of Technology, RGPV</p>
                        </div>
                        <div className="col-community">
                            <img src="./images/logo_gdscuitrgpv.59ee6659.png" alt="" />
                            <h4>Google Developers Student Club</h4>
                            <p>MANIT, Bhopal</p>
                        </div>
                        <div className="col-community">
                            <img src="./images/logo_gdscuitrgpv.59ee6659.png" alt="" />
                            <h4>Google Developers Student Club</h4>
                            <p>LNCT, Bhopal</p>
                        </div>
                    </div>
                    <div className="row-community">
                        <div className="col-community">
                            <img src="./images/logo_gdscuitrgpv.59ee6659.png" alt="" />
                            <h4>Google Developers Student Club</h4>
                            <p>LNCTS, Bhopal</p>
                        </div>
                        <div className="col-community">
                            <img src="./images/logo_gdscuitrgpv.59ee6659.png" alt="" />
                            <h4>Google Developers Student Club</h4>
                            <p>Oriental, Bhopal</p>
                        </div>
                        <div className="col-community">
                            <img src="./images/logo_gdscuitrgpv.59ee6659.png" alt="" />
                            <h4>Google Developers Student Club</h4>
                            <p>Indian Institute Of Information Technology, Bhopal</p>
                        </div>
                    </div>
                    <div className="row-community">
                        <div className="col-community cork">
                            <img src="./images/c.png" alt="" />
                        </div>
                        <div className="col-community logo ">
                            <img src="./images/logo_flutterbhopal.b6b5238d.png" alt="" />
                        </div>
                        <div className="col-community logo">
                            <img src="./images/logo_cncfbhopal.0e628a52.png" alt="" />
                        </div>
                    </div>
                    <div className="row-community last-col">
                        <div className="col-community last-col">
                            <img src="./images/commerce.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* community end */}
                {/* meetup start */}
                <div className="meet-container">
                    {/* <h1>Meetup Venue</h1> */}
                    <div className="heading">
                        <h1>Meetup Venue</h1>
                    </div>
                    <div className="content">
                        <div className="map">
                            <lottie-player
                                src="https://assets3.lottiefiles.com/packages/lf20_is82b4.json"
                                background="transparent"
                                speed={1}
                                style={{ width: 500, height: 500 }}
                                loop=""
                                autoPlay=""
                            />
                        </div>
                        <div className="location">
                            <h2>RGPV Conference Hall</h2>
                            <p>
                                Rajiv Gandhi Proudyogiki Vishwavidyalaya Airport Rd, Abbas Nagar,
                                Gandhi Nagar Bhopal, Madhya Pradesh 462033
                            </p>
                        </div>
                    </div>
                </div>
                {/* meetup end */}
            </>
        );
    }
}