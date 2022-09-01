/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import Landing from '../Component/Landing';
// import  NavBarcomp  from '../Component/NavBarcomp';
import { WTB_Member }  from '../Component/WTB_Member';
export default class Home extends Component {
  render() {
    return (
      <div className='d-flex flex-column' >
        {/* <NavBarcomp /> */}
        <Landing />
        <WTB_Member />
      </div>
    )
  }
}
