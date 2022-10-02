import React from "react";
import "../Assets/css/eventcard.css";

const EventCard = () => {

    const EventData = [
        {
            id: 1,
            name: 'Orientation',
            image: '',
        },
    ]

    return (
        <div>

            {/* Major events */}
            <div class="major-event-box">
                <div class="major-event-image">
                    <img style={{
                        borderRadius: 10,
                    }} src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fandroid-study-jams%2Fandroid-study-jams.jpeg?alt=media&token=7a00e80a-4dfb-4990-8ed9-fdd2f92ebfed" alt="" width="400" class='event-banner' />
                </div>

                <div class="major-event-text">

                    <p style={{ fontSize: 30, fontWeight: '550' }}>
                        Android Study Jams
                    </p>

                    <p style={{ fontSize: 18, fontWeight: '500' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>

                    <button class='know-more-btn'>
                        Know More
                    </button>

                </div>

            </div>

            <div class="wrap-event">
                <article class="card-event">
                    <div class="card-inner-event">
                        <div class="card-image-box" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba" alt="" width="330" class='card-event-image' />
                        </div>

                        <div class='card-text-box'>

                            <div class='card-event-flex-box' >

                                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887" alt="" class="card-event-logo" />

                                <p style={{ fontSize: 20, fontWeight: '550', marginLeft: '10%' }} class="card-event-text">
                                    Hacktoberfest
                                </p>
                            </div>

                            <div class='card-event-column-box'>
                                <p style={{ fontSize: 14, fontWeight: '500' }} class="card-event-text">
                                    Start your open-source journey while earning a branded Hacktoberfest T-shirt.
                                </p>
                            </div>

                            <button class='know-more-btn-small'>
                                Know More
                            </button>
                        </div>

                    </div>
                </article>

                <article class="card-event">
                    <div class="card-inner-event">
                        <div class="card-image-box" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba" alt="" width="330" class='card-event-image' />
                        </div>

                        <div class='card-text-box'>

                            <div class='card-event-flex-box' >

                                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887" alt="" class="card-event-logo" />

                                <p style={{ fontSize: 20, fontWeight: '550', marginLeft: '10%' }} class="card-event-text">
                                    Hacktoberfest
                                </p>
                            </div>

                            <div class='card-event-column-box'>
                                <p style={{ fontSize: 14, fontWeight: '500' }} class="card-event-text">
                                    Start your open-source journey while earning a branded Hacktoberfest T-shirt.
                                </p>
                            </div>

                            <button class='know-more-btn-small'>
                                Know More
                            </button>
                        </div>
                    </div>
                </article>

                <article class="card-event">
                    <div class="card-inner-event">
                        <div class="card-image-box" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba" alt="" width="330" class='card-event-image' />
                        </div>

                        <div class='card-text-box'>

                            <div class='card-event-flex-box' >

                                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887" alt="" class="card-event-logo" />

                                <p style={{ fontSize: 20, fontWeight: '550', marginLeft: '10%' }} class="card-event-text">
                                    Hacktoberfest
                                </p>
                            </div>

                            <div class='card-event-column-box'>
                                <p style={{ fontSize: 14, fontWeight: '500' }} class="card-event-text">
                                    Start your open-source journey while earning a branded Hacktoberfest T-shirt.
                                </p>
                            </div>

                            <button class='know-more-btn-small'>
                                Know More
                            </button>
                        </div>
                    </div>
                </article>

                <article class="card-event">
                    <div class="card-inner-event">
                        <div class="card-image-box" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba" alt="" width="330" class='card-event-image' />
                        </div>

                        <div class='card-text-box'>

                            <div class='card-event-flex-box' >

                                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887" alt="" class="card-event-logo" />

                                <p style={{ fontSize: 20, fontWeight: '550', marginLeft: '10%' }} class="card-event-text">
                                    Hacktoberfest
                                </p>
                            </div>

                            <div class='card-event-column-box'>
                                <p style={{ fontSize: 14, fontWeight: '500' }} class="card-event-text">
                                    Start your open-source journey while earning a branded Hacktoberfest T-shirt.
                                </p>
                            </div>

                            <button class='know-more-btn-small'>
                                Know More
                            </button>
                        </div>

                    </div>
                </article>

                <article class="card-event">
                    <div class="card-inner-event">
                        <div class="card-image-box" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba" alt="" width="330" class='card-event-image' />
                        </div>

                        <div class='card-text-box'>

                            <div class='card-event-flex-box' >

                                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887" alt="" class="card-event-logo" />

                                <p style={{ fontSize: 20, fontWeight: '550', marginLeft: '10%' }} class="card-event-text">
                                    Hacktoberfest
                                </p>
                            </div>

                            <div class='card-event-column-box'>
                                <p style={{ fontSize: 14, fontWeight: '500' }} class="card-event-text">
                                    Start your open-source journey while earning a branded Hacktoberfest T-shirt.
                                </p>
                            </div>

                            <button class='know-more-btn-small'>
                                Know More
                            </button>
                        </div>
                    </div>
                </article>

                <article class="card-event">
                    <div class="card-inner-event">
                        <div class="card-image-box" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba" alt="" width="330" class='card-event-image' />
                        </div>

                        <div class='card-text-box'>

                            <div class='card-event-flex-box' >

                                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887" alt="" class="card-event-logo" />

                                <p style={{ fontSize: 20, fontWeight: '550', marginLeft: '10%' }} class="card-event-text">
                                    Hacktoberfest
                                </p>
                            </div>

                            <div class='card-event-column-box'>
                                <p style={{ fontSize: 14, fontWeight: '500' }} class="card-event-text">
                                    Start your open-source journey while earning a branded Hacktoberfest T-shirt.
                                </p>
                            </div>

                            <button class='know-more-btn-small'>
                                Know More
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
export default EventCard;