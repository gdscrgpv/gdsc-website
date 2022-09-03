import React, { Component } from 'react'
import Logo from '../Assets/img/landing5.png';
import './css/landing.css';
export default class Landing extends Component {
  render() {
    return (
      <div className='banner-landing '>
        <img src={Logo} alt="logo" className='gdsc-landing-logo' style={{height:'90%',width:'90%'}}/>
        
                
      </div>
    )
  }
}
