import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

class Navbar extends Component {
  render() {
    return (
      <ul className="navbar">
        <li><Link to='/'>Top 100 Cryptocurrency</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
      </ul>
    );
  }
}

export default Navbar;
