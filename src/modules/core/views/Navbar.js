import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
	  <div className="navbar">
        <ul>
          <li><NavLink exact to='/' activeClassName="active">Top 100 Cryptocurrency</NavLink></li>
          <li><NavLink to='/settings' activeClassName="active">Settings</NavLink></li>
        </ul>
	  </div>
    );
  }
}

export default Navbar;
