import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CustomNavLink from '../components/CustomNavLink';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
	  <div className="navbar">
        <ul>
          <li><NavLink exact to='/' activeClassName="active">Top 100 Cryptocurrency</NavLink></li>
		  <li><CustomNavLink pathname='/settings' name='Settings' /></li>
        </ul>
	  </div>
    );
  }
}

export default withRouter(Navbar);
