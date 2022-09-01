import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Landing from '../Component/Landing';
export default class Home extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-center align-items-center'>
        <Landing/>

      </div>
    )
  }
}
