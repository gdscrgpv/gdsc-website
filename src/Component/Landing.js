import React, { Component } from 'react'
import Logo from '../Assets/img/GDSC Logo.png';
import './css/landing.css';
export default class Landing extends Component {
  render() {
    return (
      <div className='banner-landing '>
        <img src={Logo} alt="logo" className='gdsc-landing-logo' style={{height:'35%',width:'40%'}}/>

        <h1></h1>
        
                
      </div>
    )
  }
}
