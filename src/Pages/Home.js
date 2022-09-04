/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Landing from '../Component/Landing';
import Whatwedo from '../Component/WhatWeDo';
import Navbar from '../Component/NavBar';
import WTBM from '../Component/WTB_Member';
import Partner from '../Component/Partners';
import Footer from '../Component/Footer.js';
import AboutUs from '../Component/AboutUs.js';
import FAQ from '../Component/FAQ.js';
export default class Home extends Component {
  render() {
    return (
      <div >
         <Navbar />
          <Landing />
          <AboutUs/>
        <Whatwedo/>
        <div className='mt-5 mb-5'>
        <WTBM/>
        </div>
        <Partner/>
        <FAQ />
        <Footer/>

      </div>
    )
  }
}
