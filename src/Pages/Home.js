/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import About from '../Component/AboutUs.js'
import Landing from '../Component/Landing';
import Whatwedo from '../Component/WhatWeDo';
import Partner from '../Component/Partners';
export default class Home extends Component {
  render() {
    return (
      <div >
     
          <Landing />
    
          <About/>
    
        <Whatwedo/>

        <Partner/>
 
        
        



      </div>
    )
  }
}
