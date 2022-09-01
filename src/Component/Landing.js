import React, { Component } from 'react'
import Logo from '../Images/gdsc.png';
import './css/landing.css';
export default class Landing extends Component {
  render() {
    return (
      <div className='container landing heading'>
        
        <img src={Logo} alt='logo' className='logo' style={{height:'65%',width:'65%'}} />
                
      </div>
    )
  }
}
