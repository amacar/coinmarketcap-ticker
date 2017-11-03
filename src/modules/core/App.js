import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCoinsIfNeeded } from './actions/coinActions'
import './css/App.css';
import Header from './views/Header';
import Navbar from './views/Navbar';
import Content from './views/Content';

class App extends Component {
	
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCoinsIfNeeded());
  }
	
  render() {
    return (
	  <div className="center">
        <Header />
	    <Navbar />
		<Content />
	  </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coins: state.coins,
    isFetching: state.isFetching,
    lastUpdated: state.lastUpdated
  }
}

export default withRouter(connect(mapStateToProps)(App));
