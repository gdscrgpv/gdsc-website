import React, { Component } from 'react'
import Logo from '../Assets/img/landing.png';
import './css/landing.css';
export default class Landing extends Component {
  render() {
    return (
      <div className='container landing heading'>
        
        <img src={Logo} alt='logo' className='logo'  />
                
      </div>
    )
  }
}
