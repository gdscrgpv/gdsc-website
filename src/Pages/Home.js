import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/teams">Team</Link> 
      </nav>
      </div>
    )
  }
}
