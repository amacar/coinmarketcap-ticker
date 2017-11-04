import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
	  <div className="navbar">
        <ul>
          <li><NavLink exact to='/' activeClassName="active">Top 100 Cryptocurrency</NavLink></li>
          <li><Link to={{pathname: '/settings', state: { prevPath: this.props.location.pathname }}} activeClassName="active">Settings</Link></li>
        </ul>
	  </div>
    );
  }
}

export default withRouter(Navbar);
