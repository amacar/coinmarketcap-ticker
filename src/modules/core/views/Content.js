import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../css/App.css';
import Settings from '../../settings/Settings';
import CoinList from '../../crypto-market/CoinList';

class Content extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path='/' component={CoinList}/>
          <Route path='/settings' component={Settings}/>
      </div>
    );
  }
}

export default Content;
